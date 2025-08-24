"use client";

import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { WorkoutPlan } from "@/app/data/premadePlans";
import { exportPlanToPDF } from "../utilities/exportPlanToPDF";

interface Props {
  open: boolean;
  onClose: () => void;
  plan: WorkoutPlan | null;
  onRemove: (id: string) => void;
  onComplete: (id: string) => void;
  isCompleted: boolean;
}

export default function SavedPlanModal({
  open,
  onClose,
  plan,
  onRemove,
  onComplete,
  isCompleted,
}: Props) {
  if (!plan) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        {plan.name}
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ maxHeight: "70vh", overflowY: "auto" }}>
        <div id={`plan-pdf-${plan.id}`} style={{ padding: "20px" }}>
          <Typography variant="body1" gutterBottom>
            <strong>Goal:</strong> {plan.goal} <br />
            <strong>Level:</strong> {plan.level} <br />
            <strong>Duration:</strong> {plan.durationWeeks} weeks <br />
            <strong>Split:</strong> {plan.split} <br />
            <strong>Days/Week:</strong> {plan.frequencyPerWeek}
          </Typography>

          <Divider sx={{ my: 2 }} />

          {(plan.days ?? []).map((day, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="h6">{day.day}</Typography>
              {day.exercises.map((exercise, i) => (
                <Typography key={i} sx={{ ml: 2 }}>
                  • {exercise.name} — {exercise.sets} sets x {exercise.reps}
                </Typography>
              ))}
            </Box>
          ))}
        </div>

        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button
            color="error"
            variant="outlined"
            onClick={() => onRemove(plan.id)}
          >
            Remove Plan
          </Button>

          <Button
            variant="outlined"
            onClick={() =>
              exportPlanToPDF(`plan-pdf-${plan.id}`, `${plan.name}.pdf`)
            }
          >
            Export to PDF
          </Button>

          <Button
            color={isCompleted ? "success" : "primary"}
            variant="contained"
            onClick={() => onComplete(plan.id)}
          >
            {isCompleted ? "Marked as Completed" : "Mark as Completed"}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
