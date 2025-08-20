// src/app/workout-builder/page.tsx (example)
"use client";

import { useState } from "react";
import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import MuscleSelector from "../components/MuscleSelector";
import ExercisePicker from "../components/ExercisePicker";
import PlanPreview from "../components/PlanPreview";
import SavePlanWizard, { PlansByDay } from "../components/SavePlanWizard";

export default function WorkoutBuilderPage() {
  const [selectedDay, setSelectedDay] = useState<"A" | "B" | "C">("A");
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);

  const [plansByDay, setPlansByDay] = useState<PlansByDay>({
    A: { muscles: [], exercises: [] },
    B: { muscles: [], exercises: [] },
    C: { muscles: [], exercises: [] },
  });

  const [openSave, setOpenSave] = useState(false);

  const handleSelectMuscle = (muscleId: string) => {
    setSelectedMuscle(muscleId);
    setPlansByDay((prev) => {
      const curr = prev[selectedDay];
      return {
        ...prev,
        [selectedDay]: {
          ...curr,
          muscles: Array.from(new Set([...curr.muscles, muscleId])),
        },
      };
    });
  };

  const handleAddExercise = (exerciseName: string) => {
    setPlansByDay((prev) => {
      const curr = prev[selectedDay];
      return {
        ...prev,
        [selectedDay]: {
          ...curr,
          exercises: [...curr.exercises, exerciseName],
        },
      };
    });
  };

  const flatPlanForPreview = [
    ...plansByDay.A.exercises.map((e) => `A · ${e}`),
    ...plansByDay.B.exercises.map((e) => `B · ${e}`),
    ...plansByDay.C.exercises.map((e) => `C · ${e}`),
  ];

  const removeFromPreview = (index: number) => {
    // map index back to day list
    const aLen = plansByDay.A.exercises.length;
    const bLen = plansByDay.B.exercises.length;
    if (index < aLen) {
      setPlansByDay((prev) => ({
        ...prev,
        A: {
          ...prev.A,
          exercises: prev.A.exercises.filter((_, i) => i !== index),
        },
      }));
    } else if (index < aLen + bLen) {
      const bi = index - aLen;
      setPlansByDay((prev) => ({
        ...prev,
        B: {
          ...prev.B,
          exercises: prev.B.exercises.filter((_, i) => i !== bi),
        },
      }));
    } else {
      const ci = index - aLen - bLen;
      setPlansByDay((prev) => ({
        ...prev,
        C: {
          ...prev.C,
          exercises: prev.C.exercises.filter((_, i) => i !== ci),
        },
      }));
    }
  };

  return (
    <Box sx={{ p: 4, m: 4 }}>
      <Header />
      <Typography variant="h4" gutterBottom>
        Monte seu Treino
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Dia atual:
      </Typography>
      <ButtonGroup sx={{ mb: 2 }}>
        {(["A", "B", "C"] as const).map((day) => (
          <Button
            key={day}
            variant={selectedDay === day ? "contained" : "outlined"}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </Button>
        ))}
      </ButtonGroup>

      <MuscleSelector onSelect={handleSelectMuscle} />
      <ExercisePicker
        selectedMuscle={selectedMuscle}
        onAddExercise={handleAddExercise}
      />

      <PlanPreview
        workoutPlan={flatPlanForPreview}
        onRemove={removeFromPreview}
      />

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={() => setOpenSave(true)}
      >
        Salvar plano
      </Button>

      <SavePlanWizard
        open={openSave}
        onClose={() => setOpenSave(false)}
        plansByDay={plansByDay}
      />

      <BottomNav />
    </Box>
  );
}
