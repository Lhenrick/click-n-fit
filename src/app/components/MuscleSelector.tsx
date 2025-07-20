import { Box, Button, Typography } from "@mui/material";
import { muscles } from "@/app/data/muscles";

export default function MuscleSelector({
  onSelect,
}: {
  onSelect: (muscle: string) => void;
}) {
  const uniqueMuscles = [...new Set(muscles.map((m) => m.name))];

  return (
    <Box sx={{ my: 3 }}>
      <Typography variant="h6">Choose a muscle group:</Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 1 }}>
        {uniqueMuscles.map((muscle) => (
          <Button
            key={muscle}
            variant="outlined"
            onClick={() => onSelect(muscle)}
          >
            {muscle}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
