// components/ExercisePicker.tsx

import { Box, Typography, Button } from "@mui/material";
import { muscleExercises } from "../data/mexercises";

interface Props {
  selectedMuscle: string | null;
  onAddExercise: (exerciseName: string) => void;
}

export default function ExercisePicker({
  selectedMuscle,
  onAddExercise,
}: Props) {
  if (!selectedMuscle) return null;

  const muscle = muscleExercises[selectedMuscle];
  if (!muscle) return null;

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">Exercises for {muscle.name}</Typography>
      {muscle.groups.map((group, groupIndex) => (
        <Box key={groupIndex} sx={{ mt: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            {group.category}
          </Typography>
          {group.exercises.map((exercise, exerciseIndex) => (
            <Box
              key={exerciseIndex}
              sx={{ display: "flex", alignItems: "center", gap: 2, my: 1 }}
            >
              <Typography>{exercise}</Typography>
              <Button
                variant="contained"
                onClick={() => onAddExercise(exercise)}
              >
                Add
              </Button>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
