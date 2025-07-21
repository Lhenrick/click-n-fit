// components/MotivationNote.tsx
"use client";

import { Box, Typography, TextField, Paper } from "@mui/material";
import { useState, useEffect } from "react";

const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Small progress is still progress.",
  "Discipline is the bridge between goals and accomplishment.",
  "You don’t have to be extreme, just consistent.",
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function MotivationNote() {
  const [note, setNote] = useState("");
  const [quote, setQuote] = useState(getRandomQuote());

  useEffect(() => {
    const saved = localStorage.getItem("weeklyNote");
    if (saved) setNote(saved);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNote(value);
    localStorage.setItem("weeklyNote", value);
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="subtitle1" gutterBottom color="primary">
        ✨ Motivation of the Day
      </Typography>
      <Typography sx={{ mb: 2 }}>{quote}</Typography>

      <Typography variant="subtitle1" gutterBottom>
        Your Note or Reflection
      </Typography>
      <TextField
        multiline
        fullWidth
        minRows={4}
        maxRows={10}
        placeholder="Write about your goals, thoughts, or week..."
        value={note}
        onChange={handleChange}
      />
    </Paper>
  );
}
