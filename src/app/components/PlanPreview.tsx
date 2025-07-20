// components/PlanPreview.tsx

import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  workoutPlan: string[];
  onRemove: (index: number) => void;
}

export default function PlanPreview({ workoutPlan, onRemove }: Props) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Your Workout Plan
      </Typography>

      {workoutPlan.length === 0 && (
        <Typography>No exercises added yet.</Typography>
      )}

      {workoutPlan.map((exercise, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            mb: 1,
            border: "1px solid #ccc",
            borderRadius: 2,
          }}
        >
          <Typography>{exercise}</Typography>
          <IconButton onClick={() => onRemove(i)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
}
