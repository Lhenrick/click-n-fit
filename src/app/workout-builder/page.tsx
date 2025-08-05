"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import PlanPreview from "../components/PlanPreview";
import ExercisePicker from "../components/ExercisePicker";
import MuscleSelector from "../components/MuscleSelector";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

export default function WorkoutBuilderPage() {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);
  const [workoutPlan, setWorkoutPlan] = useState<string[]>([]);

  const handleAddExercise = (exerciseName: string) => {
    setWorkoutPlan((prev) => [...prev, exerciseName]);
  };

  const handleRemoveExercise = (index: number) => {
    setWorkoutPlan((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ p: 8 }}>
      <Header />
      <Typography variant="h4" gutterBottom>
        Monte seu Treino
      </Typography>

      <MuscleSelector onSelect={setSelectedMuscle} />

      <ExercisePicker
        selectedMuscle={selectedMuscle}
        onAddExercise={handleAddExercise}
      />

      <PlanPreview workoutPlan={workoutPlan} onRemove={handleRemoveExercise} />
      <BottomNav />
    </Box>
  );
}
