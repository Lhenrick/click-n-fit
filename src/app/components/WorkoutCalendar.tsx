// components/WorkoutCalendar.tsx
"use client";

import { Box } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // default style
import { useMemo } from "react";
import dayjs from "dayjs";

interface Props {
  workoutDates: string[]; // e.g. ["2025-07-01", "2025-07-05"]
}

export default function WorkoutCalendar({ workoutDates }: Props) {
  const workoutSet = useMemo(() => new Set(workoutDates), [workoutDates]);

  return (
    <Box sx={{ "& .react-calendar": { border: "none", width: "100%" } }}>
      <Calendar
        tileClassName={({ date }) => {
          const iso = dayjs(date).format("YYYY-MM-DD");
          return workoutSet.has(iso) ? "workout-day" : "";
        }}
      />
      <style jsx global>{`
        .workout-day {
          background: #4caf50 !important;
          color: white !important;
          border-radius: 50%;
        }
      `}</style>
    </Box>
  );
}
