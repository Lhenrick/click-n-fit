"use client";

import { Box, Typography, Divider } from "@mui/material";
import ProgressStats from "../components/ProgressStats";
import Header from "../components/Header";
import WorkoutCalendar from "../components/WorkoutCalendar";
import ProgressCharts from "../components/ProgressCharts";
import MuscleHeatmap from "../components/MuscleHeatmap";
import CompletedPlansList from "../components/completedPlansList";
import MotivationNote from "../components/MotivationNote";
import BottomNav from "../components/BottomNav";

export default function MyProgressPage() {
  return (
    <Box
      marginY={6}
      sx={{ px: { xs: 2, sm: 4, md: 8 }, py: { xs: 3, sm: 4, md: 6 } }}
    >
      <Header />

      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" } }}
      >
        My Progress
      </Typography>

      <Divider sx={{ my: { xs: 2, sm: 3 } }} />

      {/* Progress Summary */}
      <Box mb={{ xs: 3, sm: 4 }}>
        <Typography variant="h6">Overview</Typography>
        <ProgressStats totalWorkouts={42} totalHours={55} streak={6} />
      </Box>

      {/* Calendar + Streak */}
      <Box mb={{ xs: 3, sm: 4 }}>
        <Typography variant="h6">Workout Calendar</Typography>
        <WorkoutCalendar
          workoutDates={["2025-07-01", "2025-07-05", "2025-07-10"]}
          className="calendarCard"
        />
      </Box>

      {/* Graphs */}
      <Box mb={{ xs: 3, sm: 4 }}>
        <Typography variant="h6">Progress Charts</Typography>
        <ProgressCharts />
      </Box>

      {/* Body Map Heatmap */}
      <Box mb={{ xs: 3, sm: 4 }}>
        <Typography variant="h6">Muscle Heatmap</Typography>
        <MuscleHeatmap muscleFrequency={{ chest: 6, biceps: 3, quads: 1 }} />
      </Box>

      {/* Completed Plans */}
      <Box mb={{ xs: 3, sm: 4 }}>
        <Typography variant="h6">Completed Plans</Typography>
        <CompletedPlansList
          plans={[
            { id: "1", name: "Full Body Starter", completedAt: "2025-07-15" },
            { id: "2", name: "Leg Day Boost", completedAt: "2025-07-18" },
          ]}
        />
      </Box>

      {/* Motivation & Notes */}
      <Box mb={4}>
        <Typography variant="h6">Motivation & Notes</Typography>
        <MotivationNote />
      </Box>

      <BottomNav />
    </Box>
  );
}
