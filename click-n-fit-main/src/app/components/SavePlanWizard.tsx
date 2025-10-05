// src/app/components/SavePlanWizard.tsx
"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useMemo, useState } from "react";
import type {
  WorkoutDay,
  Exercise,
  SavedWorkoutPlan,
} from "@/app/data/premadePlans";

// Shape expected from your builder (ABC split)
export type PlansByDay = Record<
  "A" | "B" | "C",
  { muscles: string[]; exercises: string[] }
>;

interface Props {
  open: boolean;
  onClose: () => void;
  plansByDay: PlansByDay; // from your builder
  onSaved?: () => void;
}

const STEPS = ["Informações básicas", "Agenda e divisão", "Revisar exercícios"];

const defaultSets = 3;
const defaultReps = "10-12";

function buildInitialDays(plansByDay: PlansByDay): WorkoutDay[] {
  const map: Record<string, string> = { A: "Day A", B: "Day B", C: "Day C" };
  return (Object.keys(plansByDay) as Array<keyof PlansByDay>)
    .filter((k) => plansByDay[k].exercises.length > 0)
    .map((k) => ({
      day: map[k],
      exercises: plansByDay[k].exercises.map<Exercise>((name) => ({
        name,
        sets: defaultSets,
        reps: defaultReps,
      })),
    }));
}

export default function SavePlanWizard({
  open,
  onClose,
  plansByDay,
  onSaved,
}: Props) {
  const [activeStep, setActiveStep] = useState(0);

  // Step 1 fields
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("General Fitness");
  const [level, setLevel] = useState<"Beginner" | "Intermediate" | "Advanced">(
    "Beginner"
  );

  // Step 2 fields
  const [durationWeeks, setDurationWeeks] = useState<number>(4);
  const [frequencyPerWeek, setFrequencyPerWeek] = useState<number>(3);
  const [split, setSplit] = useState("ABC");

  // Step 3: review exercises (editable)
  const initialDays = useMemo(() => buildInitialDays(plansByDay), [plansByDay]);
  const [days, setDays] = useState<WorkoutDay[]>(initialDays);

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setDays(initialDays);
  }, [initialDays, open]);

  const canNext = () => {
    if (activeStep === 0) return name.trim().length > 0;
    if (activeStep === 1)
      return (
        durationWeeks > 0 && frequencyPerWeek > 0 && split.trim().length > 0
      );
    if (activeStep === 2)
      return days.length > 0 && days.every((d) => d.exercises.length > 0);
    return true;
  };

  const handleSave = () => {
    if (isSaving) return;
    setIsSaving(true);
    try {
      const id =
        globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;

      // Deep clone snapshots to avoid any mutation/race surprises
      const daysSnapshot = JSON.parse(JSON.stringify(days));
      const planSnapshot = JSON.parse(JSON.stringify(plansByDay));

      const newPlan: SavedWorkoutPlan = {
        id,
        name: name.trim(),
        createdAt: new Date().toISOString(),
        completed: false,
        plan: planSnapshot,
        goal,
        level,
        durationWeeks,
        frequencyPerWeek,
        split,
        days: daysSnapshot,
      };

      const existingRaw = localStorage.getItem("savedPlans");
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      localStorage.setItem(
        "savedPlans",
        JSON.stringify([...existing, newPlan])
      );

      onSaved?.(); // let parent refresh the list
      onClose();
    } catch (e) {
      alert(
        `Não foi possível salvar o plano (storage inválido). Limpando cache pode resolver. ERROR: ${e}`
      );
      return;
    } finally {
      setIsSaving(false);
    }
  };

  const updateExercise = (
    dayIndex: number,
    exIndex: number,
    patch: Partial<Exercise>
  ) => {
    setDays((prev) => {
      const next = [...prev];
      const ex = { ...next[dayIndex].exercises[exIndex], ...patch };
      next[dayIndex] = {
        ...next[dayIndex],
        exercises: next[dayIndex].exercises.map((e, i) =>
          i === exIndex ? ex : e
        ),
      };
      return next;
    });
  };

  const removeExercise = (dayIndex: number, exIndex: number) => {
    setDays((prev) => {
      const next = [...prev];
      next[dayIndex] = {
        ...next[dayIndex],
        exercises: next[dayIndex].exercises.filter((_, i) => i !== exIndex),
      };
      return next.filter((d) => d.exercises.length > 0); // drop empty days
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Salvar Plano</DialogTitle>

      <DialogContent>
        <Stepper activeStep={activeStep} sx={{ my: 2 }}>
          {STEPS.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === 0 && (
          <Box sx={{ display: "grid", gap: 2 }}>
            <TextField
              label="Nome do Plano"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
            />
            <TextField
              select
              label="Objetivo"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              fullWidth
            >
              {[
                "General Fitness",
                "Fat Loss",
                "Muscle Growth",
                "Strength",
                "Endurance",
              ].map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </TextField>

            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Nível
              </Typography>
              <RadioGroup
                row
                value={level}
                onChange={(e) => setLevel(e.target.value as typeof level)}
              >
                <FormControlLabel
                  value="Beginner"
                  control={<Radio />}
                  label="Beginner"
                />
                <FormControlLabel
                  value="Intermediate"
                  control={<Radio />}
                  label="Intermediate"
                />
                <FormControlLabel
                  value="Advanced"
                  control={<Radio />}
                  label="Advanced"
                />
              </RadioGroup>
            </Box>
          </Box>
        )}

        {activeStep === 1 && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr", xs: "1fr" },
              gap: 2,
            }}
          >
            <TextField
              label="Semanas de duração"
              type="number"
              inputProps={{ min: 1 }}
              value={durationWeeks}
              onChange={(e) => setDurationWeeks(Number(e.target.value))}
              required
            />
            <TextField
              label="Frequência/semana"
              type="number"
              inputProps={{ min: 1 }}
              value={frequencyPerWeek}
              onChange={(e) => setFrequencyPerWeek(Number(e.target.value))}
              required
            />
            <TextField
              label="Divisão (split)"
              value={split}
              onChange={(e) => setSplit(e.target.value)}
              helperText='Ex.: "ABC", "PPL", "Upper/Lower", "Full Body"...'
            />
          </Box>
        )}

        {activeStep === 2 && (
          <Box sx={{ display: "grid", gap: 3 }}>
            {days.map((d, di) => (
              <Box
                key={d.day}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Typography variant="h6">{d.day}</Typography>
                <Divider sx={{ my: 1 }} />

                {d.exercises.map((ex, xi) => (
                  <Box
                    key={`${ex.name}-${xi}`}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        md: "2fr 120px 160px 40px",
                        xs: "1fr",
                      },
                      gap: 1,
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <TextField label="Exercício" value={ex.name} disabled />
                    <TextField
                      label="Séries"
                      type="number"
                      inputProps={{ min: 1 }}
                      value={ex.sets}
                      onChange={(e) =>
                        updateExercise(di, xi, { sets: Number(e.target.value) })
                      }
                    />
                    <TextField
                      label="Reps"
                      value={ex.reps}
                      onChange={(e) =>
                        updateExercise(di, xi, { reps: e.target.value })
                      }
                      placeholder="10-12, 8, 30s..."
                    />
                    <IconButton
                      onClick={() => removeExercise(di, xi)}
                      aria-label="Remover"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            ))}
            {days.length === 0 && (
              <Typography color="text.secondary">
                Nenhum exercício selecionado.
              </Typography>
            )}
          </Box>
        )}
      </DialogContent>

      <DialogActions>
        {activeStep > 0 && (
          <Button onClick={() => setActiveStep((s) => s - 1)}>Voltar</Button>
        )}
        {activeStep < STEPS.length - 1 ? (
          <Button
            disabled={!canNext()}
            onClick={() => setActiveStep((s) => s + 1)}
            variant="contained"
          >
            Próximo
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled={!canNext() || isSaving}
            onClick={handleSave}
          >
            {isSaving ? "Salvando..." : "Salvar Plano"}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
