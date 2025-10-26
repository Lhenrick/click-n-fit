// components/ExercisePicker.tsx

import { Box, Typography, Button } from "@mui/material";
import { muscleExercises } from "../data/exercises";
import { useEffect, useState } from "react";
// Import the ExerciseItem type
import { Catalog, ExerciseItem } from "../../lib/api";
import { useI18n } from "../../i18n/I18nProvider";

// Assuming MuscleExerciseGroup is defined locally or imported correctly
interface MuscleExerciseGroup {
  category: string;
  exercises: string[];
}
// Note: muscleExercises and MuscleExerciseGroup are assumed to be defined/imported correctly

interface Props {
  selectedMuscle: string | null;
  onAddExercise: (exercise: string) => void;
}

export default function ExercisePicker({
  selectedMuscle,
  onAddExercise,
}: Props) {
  const { t } = useI18n();
  const [remoteGroups, setRemoteGroups] = useState<
    MuscleExerciseGroup[] | null
  >(null);

  useEffect(() => {
    async function run() {
      if (!selectedMuscle) return;
      try {
        /**
         * FIX 6: Change the expected type from 'string[]' to 'ExerciseItem[]'.
         * This resolves the 'Type unknown is not assignable to type string[]' error.
         */
        const list: ExerciseItem[] = await Catalog.exercises(selectedMuscle);

        // Map backend shape to local group shape
        const groups: MuscleExerciseGroup[] = [
          {
            category: "API",
            /**
             * FIX 7: 'list' is now an array of objects ({name: string}),
             * so the map callback correctly expects an object 'x', resolving
             * the incompatible argument type error.
             */
            exercises: list.map((x) => x.name),
          },
        ];
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
        {t("picker.exercisesFor")} {muscleData.name}
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
