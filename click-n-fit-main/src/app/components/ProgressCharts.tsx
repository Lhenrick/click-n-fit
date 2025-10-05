// components/ProgressCharts.tsx
"use client";

import { Box, Tab, Tabs, Paper } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useState } from "react";

const workoutPerWeek = [
  { week: "Jul 1", workouts: 3 },
  { week: "Jul 8", workouts: 4 },
  { week: "Jul 15", workouts: 2 },
];

const muscleFrequency = [
  { muscle: "Chest", count: 5 },
  { muscle: "Legs", count: 3 },
  { muscle: "Back", count: 4 },
];

export default function ProgressCharts() {
  const [tab, setTab] = useState(0);

  return (
    <Box>
      <Tabs value={tab} onChange={(_, newVal) => setTab(newVal)}>
        <Tab label="Workouts / Week" />
        <Tab label="Muscle Frequency" />
      </Tabs>

      <Paper sx={{ p: 2, mt: 2, height: 300 }}>
        {tab === 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={workoutPerWeek}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="workouts" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        )}

        {tab === 1 && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={muscleFrequency}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="muscle" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#388e3c" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </Paper>
    </Box>
  );
}
