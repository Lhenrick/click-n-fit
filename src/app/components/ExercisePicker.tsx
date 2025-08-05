// components/ExercisePicker.tsx
import { Box, Typography, Button } from "@mui/material";
import { muscleExercises } from "../data/exercises"; // Adjust the path as needed
import { MuscleExerciseGroup } from "../data/exercises";

interface Props {
  selectedMuscle: string | null;
  onAddExercise: (exercise: string) => void;
}

export default function ExercisePicker({
  selectedMuscle,
  onAddExercise,
}: Props) {
  if (!selectedMuscle) {
    return (
      <Typography>Selecione um músculo para ver os exercícios.</Typography>
    );
  }

  const muscleData = muscleExercises[selectedMuscle];

  if (!muscleData) {
    return (
      <Typography>
        Esse músculo ainda não tem exercícios cadastrados.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Exercícios para {muscleData.name}
      </Typography>

      {muscleData.groups.map(
        (group: MuscleExerciseGroup, groupIndex: number) => (
          <Box key={groupIndex} sx={{ mt: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {group.category}
            </Typography>

            {group.exercises.map((exercise, exerciseIndex) => (
              <Button
                key={exerciseIndex}
                variant="contained"
                size="small"
                sx={{ mt: 1, mr: 1 }}
                onClick={() => onAddExercise(exercise)}
              >
                {exercise}
              </Button>
            ))}
          </Box>
        )
      )}
    </Box>
  );
}
