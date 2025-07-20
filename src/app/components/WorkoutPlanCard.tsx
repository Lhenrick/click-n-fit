"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { WorkoutPlan } from "../data/premadePlans";

interface Props {
  plan: WorkoutPlan;
  onView: (plan: WorkoutPlan) => void;
}

export default function WorkoutPlanCard({ plan, onView }: Props) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        minHeight: 280,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        p: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {plan.name}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          <strong>Objetivo:</strong> {plan.goal}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          <strong>Level:</strong> {plan.level}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          <strong>Duração:</strong> {plan.durationWeeks} weeks
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          <strong>Divisão:</strong> {plan.split}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          <strong>Dias/Semana</strong> {plan.frequencyPerWeek}
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained" fullWidth onClick={() => onView(plan)}>
          View Plan
        </Button>
      </CardActions>
    </Card>
  );
}
