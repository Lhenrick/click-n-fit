"use client";

import { Box, Grid, Typography } from "@mui/material";
import { preMadeWorkoutPlans, WorkoutPlan } from "../data/premadePlans";
import WorkoutPlanCard from "../components/WorkoutPlanCard";
import PlanModal from "../components/PlanModal";
import { useState } from "react";
import Header from "../components/Header";

export default function PreMadePlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<WorkoutPlan | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewPlan = (plan: WorkoutPlan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <Box sx={{ p: 10 }}>
      <Header />
      <Typography variant="h4" gutterBottom>
        Pre-made Workout Plans
      </Typography>
      <Grid container spacing={3}>
        {preMadeWorkoutPlans.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <WorkoutPlanCard plan={plan} onView={handleViewPlan} />
          </Grid>
        ))}
      </Grid>
      <PlanModal
        open={modalOpen}
        onClose={handleCloseModal}
        plan={selectedPlan}
      />
    </Box>
  );
}
