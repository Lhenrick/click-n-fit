// components/CompletedPlansList.tsx
"use client";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface CompletedPlan {
  id: string;
  name: string;
  completedAt: string;
}

interface Props {
  plans: CompletedPlan[];
  onView?: (id: string) => void; // Optional callback
}

export default function CompletedPlansList({ plans, onView }: Props) {
  if (plans.length === 0) {
    return (
      <Typography color="text.secondary">No plans completed yet.</Typography>
    );
  }

  return (
    <List>
      {plans.map((plan, index) => (
        <Box key={plan.id}>
          <ListItem
            secondaryAction={
              onView && (
                <IconButton edge="end" onClick={() => onView(plan.id)}>
                  <VisibilityIcon />
                </IconButton>
              )
            }
          >
            <ListItemText
              primary={plan.name}
              secondary={`Completed on ${new Date(
                plan.completedAt
              ).toLocaleDateString()}`}
            />
          </ListItem>
          {index !== plans.length - 1 && <Divider />}
        </Box>
      ))}
    </List>
  );
}
