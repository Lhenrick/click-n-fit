"use client";

import { Typography, TextField, Paper, Button } from "@mui/material";
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
  const [draftNote, setDraftNote] = useState("");
  const [note, setNote] = useState("");
  // We only need the quote value – the setter is unused, so we omit it
  // to satisfy the @typescript-eslint/no-unused-vars rule.
  const [quote] = useState<string>(getRandomQuote());

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("weeklyNotes") || "[]");
    if (savedNotes.length > 0) {
      setNote(savedNotes[savedNotes.length - 1]);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDraftNote(e.target.value);
  };

  const handleSave = () => {
    if (draftNote.trim()) {
      setNote(draftNote);
      // Save to localStorage as an array of notes
      const savedNotes = JSON.parse(
        localStorage.getItem("weeklyNotes") || "[]"
      );
      savedNotes.push(draftNote);
      localStorage.setItem("weeklyNotes", JSON.stringify(savedNotes));
      setDraftNote("");
    }
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
        value={draftNote}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>

      {note && (
        <Paper
          sx={{
            mt: 3,
            p: 2,
            borderRadius: 2,
            backgroundColor: "primary.light",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: (theme) => theme.palette.text.primary }}
          >
            Last Saved Note
          </Typography>
          <Typography>{note}</Typography>
        </Paper>
      )}
    </Paper>
  );
}
