import { Box, Typography, Button } from "@mui/material";

interface Props {
  workoutPlan: string[];
  onRemove: (index: number) => void;
}

export default function PlanPreview({ workoutPlan, onRemove }: Props) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Seu Plano de Treino:
      </Typography>
      {workoutPlan.length === 0 && (
        <Typography>Nenhum exercício adicionado.</Typography>
      )}
      {workoutPlan.map((exercise, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: 1,
          }}
        >
          <Typography>{exercise}</Typography>
          <Button
            variant="outlined"
            color="error"
            onClick={() => onRemove(index)}
          >
            Remover
          </Button>
        </Box>
      ))}
    </Box>
  );
}
