import { Box, Button, Typography } from "@mui/material";
import { muscles } from "../data/heatMapMuscles";

interface Props {
  onSelect: (muscleId: string) => void;
}

export default function MuscleSelector({ onSelect }: Props) {
  const uniqueMuscles = Array.from(
    new Map(muscles.map((m) => [m.id, m.name])).entries()
  );

  return (
    <Box sx={{ my: 3 }}>
      <Typography variant="h6" gutterBottom>
        Selecione um grupo muscular:
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {uniqueMuscles.map(([id, name]) => (
          <Button key={id} variant="outlined" onClick={() => onSelect(id)}>
            {name}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
