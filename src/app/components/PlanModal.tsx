import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { WorkoutPlan } from "../data/premadePlans";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  onClose: () => void;
  plan: WorkoutPlan | null;
}

export default function PlanModel({ open, onClose, plan }: Props) {
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
        <Typography variant="body1" gutterBottom>
          <strong>Goal:</strong> {plan.goal} <br />
          <strong>Level:</strong> {plan.level} <br />
          <strong>Duration:</strong> {plan.durationWeeks} weeks <br />
          <strong>Split:</strong> {plan.split} <br />
          <strong>Days/Week:</strong> {plan.frequencyPerWeek}
          <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={() => {
                if (!plan) return;
                const saved = JSON.parse(
                  localStorage.getItem("myPlans") || "[]"
                );
                const exists = saved.find((p: any) => p.id === plan.id);
                if (!exists) {
                  saved.push(plan);
                  localStorage.setItem("myPlans", JSON.stringify(saved));
                }
                onClose();
              }}
            >
              Save to My Plans
            </Button>
          </Box>
        </Typography>

        <Divider sx={{ my: 2 }} />

        {plan.days.map((day, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              {day.day}
            </Typography>
            {day.exercises.map((exercise, i) => (
              <Typography key={i} sx={{ ml: 2 }}>
                • {exercise.name} — {exercise.sets} sets x {exercise.reps} reps
              </Typography>
            ))}
          </Box>
        ))}
      </DialogContent>
    </Dialog>
  );
}
