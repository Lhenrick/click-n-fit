"use client";

import { Box, Modal, Typography, List, ListItem } from "@mui/material";

interface ExerciseModalProps {
  open: boolean;
  onClose: () => void;
  muscle: string | null;
  exercises: string[];
}

export default function ExerciseModal({
  open,
  onClose,
  muscle,
  exercises,
}: ExerciseModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          color: "black",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          width: 300,
        }}
      >
        <Typography variant="h6" gutterBottom>
          {muscle} Exercises
        </Typography>
        <List>
          {exercises.map((ex, i) => (
            <ListItem key={i}>{ex}</ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
}
