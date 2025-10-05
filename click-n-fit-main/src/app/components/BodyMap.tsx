"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ExerciseModal from "./ExerciseModal";
import { muscleExercises } from "../data/exercises";
import { muscles } from "@/app/data/muscles";

export default function BodyMap() {
  const [selectedMuscleId, setSelectedMuscleId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSide, setCurrentSide] = useState<"front" | "back">("front");

  const handleMuscleClick = (id: string) => {
    setSelectedMuscleId(id);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedMuscleId(null);
  };

  const imageSrc =
    currentSide === "front" ? "/bodypicture.jpeg" : "/bodypicture-back.jpeg";

  // Find the display name of the selected muscle for the modal
  const selectedMuscleName =
    (selectedMuscleId &&
      muscles.find((m) => m.id === selectedMuscleId)?.name) ||
    "";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
        pt: 8,
        px: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Body Map
      </Typography>
      <Button
        onClick={() =>
          setCurrentSide(currentSide === "front" ? "back" : "front")
        }
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.text.primary,
        }}
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
            height: 1400,
            px: 2,
            my: 8,
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
                  borderRadius: muscle.borderRadius ?? "50%",
                  transform: muscle.rotate
                    ? `rotate(${muscle.rotate})`
                    : "none",
                  backgroundColor: "transparent", // let it transparent
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.5)",
                  },
                }}
                onClick={() => handleMuscleClick(muscle.id)}
              />
            ))}
        </Box>
      </Box>

      <ExerciseModal
        open={modalOpen}
        onClose={handleClose}
        muscle={selectedMuscleName}
        exercises={
          selectedMuscleId
            ? muscleExercises[selectedMuscleId]?.groups || []
            : []
        }
      />
    </Box>
  );
}
