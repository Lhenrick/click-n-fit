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
import { exportPlanToPDF } from "../utilities/exportPlanToPDF";

interface Props {
  open: boolean;
  onClose: () => void;
  plan: WorkoutPlan | null;
}

export default function PlanModel({ open, onClose, plan }: Props) {
  if (!plan) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        {plan.name}
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        dividers
        sx={{
          maxHeight: "70vh",
          overflowY: "auto",
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <div id={`plan-pdf-${plan.id}`}>
          <Typography variant="body1" gutterBottom>
            <strong>Goal:</strong> {plan.goal} <br />
            <strong>Level:</strong> {plan.level} <br />
            <strong>Duration:</strong> {plan.durationWeeks} weeks <br />
            <strong>Split:</strong> {plan.split} <br />
            <strong>Days/Week:</strong> {plan.frequencyPerWeek}
          </Typography>

          <Divider sx={{ my: 2 }} />

          {plan.days.map((day, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                {day.day}
              </Typography>
              {day.exercises.map((exercise, i) => (
                <Typography key={i} sx={{ ml: 2 }}>
                  • {exercise.name} — {exercise.sets} sets x {exercise.reps}{" "}
                  reps
                </Typography>
              ))}
            </Box>
          ))}
        </div>

        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            onClick={() =>
              exportPlanToPDF(`plan-pdf-${plan.id}`, `${plan.name}.pdf`)
            }
          >
            Export to PDF
          </Button>

          <Button
            variant="contained"
            onClick={() => {
              const saved: WorkoutPlan[] = JSON.parse(
                localStorage.getItem("myPlans") || "[]"
              );
              const exists = saved.find((p) => p.id === plan.id);
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
      </DialogContent>
    </Dialog>
  );
}
