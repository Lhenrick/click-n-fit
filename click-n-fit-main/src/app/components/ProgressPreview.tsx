"use client";

import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TimelineIcon from "@mui/icons-material/Timeline";

export default function ProgressPreview() {
  const workoutStreak = 3;
  const lastMuscleGroup = "Biceps";
  const weeklyGoal = 5;
  const completedWorkouts = 3;

  const progressPercent = (completedWorkouts / weeklyGoal) * 100;

  return (
    <Box sx={{ mt: 4 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 3, backgroundColor: "primary" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Your Progress
          </Typography>

          <Stack direction="row" spacing={4} alignItems="center" mb={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <FitnessCenterIcon color="primary" />
              <Typography>Streak: {workoutStreak} days</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <TimelineIcon color="primary" />
              <Typography>Last trained: {lastMuscleGroup}</Typography>
            </Box>
          </Stack>

          <Box>
            <Typography variant="body2" gutterBottom>
              Weekly Goal: {completedWorkouts}/{weeklyGoal} workouts
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progressPercent}
              sx={{ height: 10, borderRadius: 5 }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
