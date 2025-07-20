"use client";

import { Grid, Paper, Typography } from "@mui/material";

interface ProgressStatsProps {
  totalWorkouts: number;
  totalHours: number;
  streak: number;
}

export default function ProgressStats({
  totalWorkouts,
  totalHours,
  streak,
}: ProgressStatsProps) {
  const stats = [
    { label: "Workouts", value: totalWorkouts },
    { label: "Hours Trained", value: totalHours },
    { label: "Current Streak", value: `${streak} days` },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Paper
            elevation={3}
            sx={{ p: 3, textAlign: "center", borderRadius: 2 }}
          >
            <Typography variant="h5" fontWeight="bold">
              {stat.value}
            </Typography>
            <Typography color="text.secondary">{stat.label}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
