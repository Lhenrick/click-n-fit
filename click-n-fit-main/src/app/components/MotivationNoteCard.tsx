"use client";

import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function MotivationNoteCard() {
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("weeklyNotes") || "[]");
    setSavedNotes(notes);
  }, []);

  if (savedNotes.length === 0) return null;

  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Your Motivation & Reflections
      </Typography>
      <Paper
        sx={{
          p: 2,
          borderRadius: 2,
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      >
        <Typography variant="subtitle2" color="primary">
          Your Latest Reflection
        </Typography>
        <Typography>{savedNotes[savedNotes.length - 1]}</Typography>
      </Paper>
    </Box>
  );
}
