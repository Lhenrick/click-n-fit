"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Button,
  Paper,
  Chip,
  Stack,
} from "@mui/material";
import CustomPlanModal, { CustomSavedPlan } from "./CustomPlanModal";

// ---------- helpers ----------
type DayKey = "A" | "B" | "C";
type DayPlan = { muscles: string[]; exercises: string[] };
type Rawplan = {
  id?: string | number;
  name?: string;
  createdAt?: string;
  plan?: {
    A?: DayPlan;
    B?: DayPlan;
    C?: DayPlan;
  };
  exercises?: string[];
};

function isValidDateStr(s: string | undefined): s is string {
  const d = new Date(s ?? "");
  return typeof s === "string" && !Number.isNaN(d.getTime());
}

// migrate older saved shapes -> CustomSavedPlan
function normalizePlan(raw: Rawplan): CustomSavedPlan | null {
  if (!raw) return null;

  // If it's already the right shape
  if (raw.plan && (raw.plan.A || raw.plan.B || raw.plan.C)) {
    return {
      id: String(raw.id ?? Date.now()),
      name: String(raw.name ?? "Treino"),
      createdAt: isValidDateStr(raw.createdAt)
        ? raw.createdAt
        : new Date().toISOString(),
      plan: {
        A: {
          muscles: Array.isArray(raw.plan.A?.muscles) ? raw.plan.A.muscles : [],
          exercises: Array.isArray(raw.plan.A?.exercises)
            ? raw.plan.A.exercises
            : [],
        },
        B: {
          muscles: Array.isArray(raw.plan.B?.muscles) ? raw.plan.B.muscles : [],
          exercises: Array.isArray(raw.plan.B?.exercises)
            ? raw.plan.B.exercises
            : [],
        },
        C: {
          muscles: Array.isArray(raw.plan.C?.muscles) ? raw.plan.C.muscles : [],
          exercises: Array.isArray(raw.plan.C?.exercises)
            ? raw.plan.C.exercises
            : [],
        },
      },
    };
  }

  // Older “single list” save: { id, name, exercises: string[] }
  if (Array.isArray(raw.exercises)) {
    return {
      id: String(raw.id ?? Date.now()),
      name: String(raw.name ?? "Treino"),
      createdAt: isValidDateStr(raw.createdAt)
        ? raw.createdAt
        : new Date().toISOString(),
      plan: {
        A: { muscles: [], exercises: raw.exercises },
        B: { muscles: [], exercises: [] },
        C: { muscles: [], exercises: [] },
      },
    };
  }

  // If it doesn't match anything we know, ignore it
  return null;
}

function summarizeDay(dayLabel: DayKey, day: DayPlan) {
  const muscles = day.muscles?.length ? day.muscles.join(", ") : "—";
  const count = Array.isArray(day.exercises) ? day.exercises.length : 0;
  return `Treino ${dayLabel}: ${muscles} (${count} ex.)`;
}

// ---------- component ----------
export default function SavedPlansList() {
  const [plans, setPlans] = useState<CustomSavedPlan[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<CustomSavedPlan | null>(null);

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem("savedPlans") || "[]");
    const normalized: CustomSavedPlan[] = raw
      .map((p: Rawplan) => normalizePlan(p))
      .filter(Boolean);

    // If normalization changed anything (e.g., added createdAt), write it back
    localStorage.setItem("savedPlans", JSON.stringify(normalized));
    setPlans(normalized);
  }, []);

  const handleView = (p: CustomSavedPlan) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Divider sx={{ my: 2 }} />
      {plans.length === 0 ? (
        <Typography>Nenhum plano salvo ainda.</Typography>
      ) : (
        <Grid container spacing={2}>
          {plans.map((p) => {
            const created = isValidDateStr(p.createdAt)
              ? new Date(p.createdAt).toLocaleDateString()
              : "—";

            const A = p.plan?.A ?? { muscles: [], exercises: [] };
            const B = p.plan?.B ?? { muscles: [], exercises: [] };
            const C = p.plan?.C ?? { muscles: [], exercises: [] };

            const totalExercises =
              (A.exercises?.length || 0) +
              (B.exercises?.length || 0) +
              (C.exercises?.length || 0);

            return (
              <Grid size={{ xs: 12, md: 6 }} key={p.id}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="h6" noWrap title={p.name}>
                      {p.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Criado em: {created}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ mt: 1, flexWrap: "wrap" }}
                    >
                      <Chip
                        size="small"
                        label={`Total: ${totalExercises} exercícios`}
                      />
                    </Stack>

                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {summarizeDay("A", A)}
                    </Typography>
                    <Typography variant="body2">
                      {summarizeDay("B", B)}
                    </Typography>
                    <Typography variant="body2">
                      {summarizeDay("C", C)}
                    </Typography>
                  </Box>

                  <Button variant="outlined" onClick={() => handleView(p)}>
                    Ver plano
                  </Button>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      )}

      <CustomPlanModal
        open={open}
        onClose={() => setOpen(false)}
        plan={selected}
        onChange={() => {
          const saved = JSON.parse(localStorage.getItem("savedplans") || "[]");
          setPlans(saved);
        }}
      />
    </Box>
  );
}
