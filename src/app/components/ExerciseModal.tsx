"use client";

import {
  Box,
  Modal,
  Typography,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { MuscleExerciseGroup } from "../data/exercises";

interface ExerciseModalProps {
  open: boolean;
  onClose: () => void;
  muscle: string;
  exercises: MuscleExerciseGroup[];
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
          width: "90%",
          maxWidth: 500,
          height: "80vh", // fixed height to enable scrolling
          bgcolor: "background.paper",
          color: "black",
          boxShadow: 24,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Scrollable content */}
        <Box sx={{ p: 2, overflowY: "auto", color: "white" }}>
          {/* Close Button (scrolls with content) */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={onClose} sx={{ color: "grey.700" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography variant="h6" gutterBottom>
            {muscle} Exercícios
          </Typography>

          <List>
            {exercises.map((group, i) => (
              <Box key={i} sx={{ mb: 2 }}>
                <ListItem sx={{ fontWeight: "bold" }}>
                  {group.category}
                </ListItem>
                {group.exercises.map((exercise, j) => (
                  <ListItem key={j} sx={{ pl: 4 }}>
                    {exercise}
                  </ListItem>
                ))}
              </Box>
            ))}
          </List>
        </Box>
      </Box>
    </Modal>
  );
}
