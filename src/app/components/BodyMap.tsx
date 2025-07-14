"use client";

import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ExerciseModal from "./ExerciseModal";
import { muscleExercises } from "../data/exercises";
import { muscles } from "@/app/data/muscles";

export default function BodyMap() {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSide, setCurrentSide] = useState<"front" | "back">("front");

  const handleMuscleClick = (name: string) => {
    setSelectedMuscle(name);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedMuscle(null);
  };

  const imageSrc =
    currentSide === "front" ? "/bodypicture.jpeg" : "/bodypicture-back.jpeg";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <Button
        onClick={() =>
          setCurrentSide(currentSide === "front" ? "back" : "front")
        }
      >
        Switch to {currentSide === "front" ? "back" : "front"} view
      </Button>
      <Box
        sx={{
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: 800,
            height: 1000,
          }}
        >
          <Image
            src={imageSrc}
            alt="Body Map"
            layout="fill"
            objectFit="cover"
          />

          {muscles
            .filter((m) => m.side === currentSide)
            .map((muscle, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  top: muscle.top,
                  left: muscle.left,
                  width: muscle.width,
                  height: muscle.height,
                  backgroundColor: "rgba(255, 0, 0, 0.3)",
                  borderRadius: muscle.borderRadius ?? "50%",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.5)",
                  },
                }}
                onClick={() => handleMuscleClick(muscle.name)}
              />
            ))}
        </Box>
      </Box>
      <ExerciseModal
        open={modalOpen}
        onClose={handleClose}
        muscle={selectedMuscle}
        exercises={selectedMuscle ? muscleExercises[selectedMuscle] || [] : []}
      />
    </Box>
  );
}
