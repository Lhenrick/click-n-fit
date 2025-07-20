"use client";

import { Box, Typography, Divider } from "@mui/material";
import ProgressStats from "../components/ProgressStats";
import Header from "../components/Header";
import WorkoutCalendar from "../components/WorkoutCalendar";

export default function MyProgressPage() {
  return (
    <Box sx={{ p: 10 }}>
      <Header />
      <Typography variant="h4" gutterBottom>
        My Progress
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Progress Summary */}
      <Box mb={4}>
        <Typography variant="h6">Overview</Typography>
        <ProgressStats totalWorkouts={42} totalHours={55} streak={6} />
      </Box>

      {/* Calendar + Streak */}
      <Box mb={4}>
        <Typography variant="h6">Workout Calendar</Typography>
        <WorkoutCalendar
          workoutDates={["2025-07-01", "2025-07-05", "2025-07-10"]}
        />
      </Box>

      {/* Graphs */}
      <Box mb={4}>
        <Typography variant="h6">Progress Charts</Typography>
        {/* TODO: Add ProgressCharts component */}
      </Box>

      {/* Body Map Heatmap */}
      <Box mb={4}>
        <Typography variant="h6">Muscle Heatmap</Typography>
        {/* TODO: Add BodyMapHeatmap component */}
      </Box>

      {/* Completed Plans */}
      <Box mb={4}>
        <Typography variant="h6">Completed Plans</Typography>
        {/* TODO: Add CompletedPlansList component */}
      </Box>

      {/* Motivation & Notes */}
      <Box mb={4}>
        <Typography variant="h6">Motivation & Notes</Typography>
        {/* TODO: Add MotivationNote component */}
      </Box>
    </Box>
  );
}
