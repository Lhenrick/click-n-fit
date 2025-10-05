// components/WorkoutCalendar.tsx
"use client";

import { Box } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useMemo } from "react";
import dayjs from "dayjs";

interface Props {
  workoutDates: string[];
  className?: string;
}

export default function WorkoutCalendar({ workoutDates, className }: Props) {
  const workoutSet = useMemo(() => new Set(workoutDates), [workoutDates]);

  return (
    <Box
      className={className}
      sx={(theme) => ({
        borderRadius: 2,
        overflow: "hidden",
        /* MAIN CARD BACKGROUND */
        "& .react-calendar": {
          width: "100%",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          padding: 8,
          backgroundColor: theme.palette.background.paper + " !important", // dark like the charts
          color: theme.palette.text.primary,
        },
        /* HEADER */
        "& .react-calendar__navigation button": {
          background: "transparent",
          color: theme.palette.text.primary,
          "&:hover": { backgroundColor: "rgba(255,255,255,0.06)" },
        },
        /* WEEKDAYS */
        "& .react-calendar__month-view__weekdays abbr": {
          textDecoration: "none",
          color: "rgba(255,255,255,0.7)", //
        },
        /* DAY CELLS */
        "& .react-calendar__tile": {
          background: "transparent",
          color: theme.palette.text.primary,
          borderRadius: 8,
          "&:hover": { backgroundColor: "rgba(255,255,255,0.06)" },
        },
        "& .react-calendar__tile--now": {
          backgroundColor: "rgba(255,255,255,0.08)",
        },
        "& .react-calendar__tile--active": {
          backgroundColor: theme.palette.primary.main + " !important",
          color: "#fff !important",
        },
      })}
    >
      <Calendar
        next2Label={null}
        prev2Label={null}
        tileClassName={({ date }) =>
          workoutSet.has(dayjs(date).format("YYYY-MM-DD")) ? "workout-day" : ""
        }
      />

      {/* keep your workout highlight */}
      <style jsx global>{`
        .workout-day {
          background: #cc3300 !important;
          color: white !important;
          border-radius: 50% !important;
        }
      `}</style>
    </Box>
  );
}
