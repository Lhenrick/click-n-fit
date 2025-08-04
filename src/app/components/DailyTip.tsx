"use client";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { tips } from "../data/tips";

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
