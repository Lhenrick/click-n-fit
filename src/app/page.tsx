"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import QuickNavigation from "./components/QuickNavigation";
import DailyTip from "./components/DailyTip";
import ProgressPreview from "./components/ProgressPreview";
import PageWrapper from "./components/PageWrapper";
import WorkoutPlanCard from "./components/WorkoutPlanCard";
import SavedPlanModal from "./components/SavedPlanModal";
import { WorkoutPlan } from "./data/premadePlans";

export default function Home() {
  const [myPlans, setMyPlans] = useState<WorkoutPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<WorkoutPlan | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [completedPlans, setCompletedPlans] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("myPlans");
    if (saved) setMyPlans(JSON.parse(saved));

    const completed = localStorage.getItem("completedPlans");
    if (completed) setCompletedPlans(JSON.parse(completed));
  }, []);

  const handleViewPlan = (plan: WorkoutPlan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPlan(null);
  };

  const handleRemovePlan = (id: string) => {
    const filtered = myPlans.filter((p) => p.id !== id);
    setMyPlans(filtered);
    localStorage.setItem("myPlans", JSON.stringify(filtered));
    handleCloseModal();
  };

  const handleCompletePlan = (id: string) => {
    const updated = completedPlans.includes(id)
      ? completedPlans.filter((pid) => pid !== id)
      : [...completedPlans, id];

    setCompletedPlans(updated);
    localStorage.setItem("completedPlans", JSON.stringify(updated));
  };

  return (
    <PageWrapper>
      <QuickNavigation />
      <DailyTip />
      <ProgressPreview />
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          My Saved Plans
        </Typography>

        {myPlans.length === 0 ? (
          <Typography>
            No plans saved yet. Go to “Pre-Made Plans” to get started.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {myPlans.map((plan) => (
              <Grid size={12} key={plan.id}>
                <WorkoutPlanCard plan={plan} onView={handleViewPlan} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      <SavedPlanModal
        open={modalOpen}
        onClose={handleCloseModal}
        plan={selectedPlan}
        onRemove={handleRemovePlan}
        onComplete={handleCompletePlan}
        isCompleted={
          selectedPlan ? completedPlans.includes(selectedPlan.id) : false
        }
      />
    </PageWrapper>
  );
}
