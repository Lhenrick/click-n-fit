// components/ExercisePicker.tsx
import { Box, Typography, Button } from "@mui/material";
import { muscleExercises, MuscleExerciseGroup } from "../data/exercises";
import { useEffect, useState } from "react";
import { Catalog } from "../../lib/api";
import { useI18n } from "../../i18n/I18nProvider";

interface Props {
  selectedMuscle: string | null;
  onAddExercise: (exercise: string) => void;
}

export default function ExercisePicker({
  selectedMuscle,
  onAddExercise,
}: Props) {
const { t } = useI18n();
const [remoteGroups, setRemoteGroups] = useState<MuscleExerciseGroup[] | null>(null);
useEffect(() => {
  async function run() {
    if (!selectedMuscle) return;
    try {
      const list = await Catalog.exercises(selectedMuscle);
      // Map backend shape to local group shape
      const groups: MuscleExerciseGroup[] = [{
        category: "API",
        exercises: list.map((x: any) => x.name)
      }];
      setRemoteGroups(groups);
    } catch {
      setRemoteGroups(null);
    }
  }
  run();
}, [selectedMuscle]);

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
        {t('picker.exercisesFor')} {muscleData.name}
      </Typography>

      {(remoteGroups ?? muscleData.groups).map(
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
