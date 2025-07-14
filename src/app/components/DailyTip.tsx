"use client";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const tips = [
  "Drink at least 2L of water today 💧",
  "Small progress is still progress. Keep going! 💪",
  "Don't skip stretching after your workout 🧘‍♂️",
  "You don't have to be extreme, just consistent 🔁",
  "Fuel your body with good food and better thoughts 🥦",
];

export default function DailyTip() {
  const [tip, setTip] = useState("");

  useEffect(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Card sx={{ backgroundColor: "#f5f5f5", borderRadius: 3, boxShadow: 3 }}>
        <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <EmojiObjectsIcon sx={{ fontSize: 36, color: "#ffa000" }} />
          <Typography variant="body1">{tip}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
