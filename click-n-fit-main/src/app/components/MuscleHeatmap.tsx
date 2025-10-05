// components/MuscleHeatmap.tsx
"use client";

import { useState } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { muscles } from "../data/heatMapMuscles";

interface Props {
  muscleFrequency: Record<string, number>; // e.g., { Chest: 5, Biceps: 3 }
}

function getHeatColor(value: number): string {
  if (value >= 5) return "#d32f2f"; // red
  if (value >= 3) return "#fbc02d"; // yellow
  if (value >= 1) return "#66bb6a"; // green
  return "#e0e0e0"; // gray for unused
}

export default function MuscleHeatmap({ muscleFrequency }: Props) {
  const [side, setSide] = useState<"front" | "back">("front");

  return (
    <Box sx={{ textAlign: "center" }}>
      <Button
        onClick={() => setSide(side === "front" ? "back" : "front")}
        sx={{ mb: 2 }}
      >
        Switch to {side === "front" ? "Back" : "Front"} View
      </Button>

      <Box sx={{ position: "relative", width: 300, height: 500, mx: "auto" }}>
        <Image
          src={
            side === "front" ? "/bodypicture.jpeg" : "/bodypicture-back.jpeg"
          }
          alt="Body Map"
          fill
          style={{ objectFit: "contain", borderRadius: 8 }}
        />
        {muscles
          .filter((m) => m.side === side)
          .map((muscle, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: muscle.top,
                left: muscle.left,
                width: muscle.width,
                height: muscle.height,
                rotate: muscle.rotate,
                borderRadius: muscle.borderRadius || "50%",
                backgroundColor: getHeatColor(muscleFrequency[muscle.id] || 0),
                opacity: 0.7,
              }}
            />
          ))}
      </Box>
    </Box>
  );
}
