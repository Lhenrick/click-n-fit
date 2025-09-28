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
import MotivationNoteCard from "./components/MotivationNoteCard";

export default function Home() {
  const [myPlans, setMyPlans] = useState<WorkoutPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<WorkoutPlan | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [completedPlans, setCompletedPlans] = useState<string[]>([]);

  useEffect(() => {
    const savedRaw = localStorage.getItem("savedPlans");
    const premadeRaw = localStorage.getItem("myPlans");

    const savedPlans = savedRaw ? JSON.parse(savedRaw) : [];
    const premadePlans = premadeRaw ? JSON.parse(premadeRaw) : [];

    const mergedPlans = [
      ...premadePlans,
      ...savedPlans.filter(
        (sp: WorkoutPlan) =>
          !premadePlans.some((pp: WorkoutPlan) => pp.id === sp.id)
      ),
    ];

    setMyPlans(mergedPlans);

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

    // Remove from premade plans
    const premaderaw = localStorage.getItem("myPlans");
    const premadePlans = premaderaw ? JSON.parse(premaderaw) : [];
    const newPremade = premadePlans.filter((p: WorkoutPlan) => p.id !== id);
    localStorage.setItem("myPlans", JSON.stringify(newPremade));

    // Remove from saved plans
    const savedRaw = localStorage.getItem("savedPlans");
    const savedPlans = savedRaw ? JSON.parse(savedRaw) : [];
    const newSaved = savedPlans.filter((p: WorkoutPlan) => p.id !== id);
    localStorage.setItem("savedPlans", JSON.stringify(newSaved));

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
      <MotivationNoteCard />
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
