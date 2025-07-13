"use client";

import { Box } from "@mui/material";
import Image from "next/image";

const muscles = [
  { name: "Chest", top: "18%", left: "26%" },
  { name: "Chest", top: "18%", left: "14%" },
  { name: "Biceps", top: "28%", left: "35%" },
  { name: "Biceps", top: "28%", left: "6%" },
  { name: "Shoulders", top: "18%", left: "34%" },
  { name: "Shoulders", top: "18%", left: "6%" },
  { name: "Abs", top: "35%", left: "20%" },
  { name: "Quads", top: "55%", left: "28%" },
  { name: "Quads", top: "55%", left: "13%" },

  // Add more muscles here with adjusted top/left % based on the image
];

export default function BodyMap() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
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
            src="/bodypicture.jpeg"
            alt="Body Map"
            layout="fill"
            objectFit="cover"
          />

          {muscles.map((muscle, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: muscle.top,
                left: muscle.left,
                width: 50,
                height: 50,
                backgroundColor: "rgba(255, 0, 0, 0.3)",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "12px",
                textAlign: "center",
              }}
              onClick={() => alert(`${muscle.name} clicked`)}
            >
              {muscle.name}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
