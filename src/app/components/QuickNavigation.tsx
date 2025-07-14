"use client";

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MapIcon from "@mui/icons-material/Map";
import GroupIcon from "@mui/icons-material/Group";
import TimelineIcon from "@mui/icons-material/Timeline";
import { useRouter } from "next/navigation";

const features = [
  {
    title: "Body Map",
    icon: <MapIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    link: "/body-map",
  },
  {
    title: "Workout Plans",
    icon: <FitnessCenterIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
    link: "/workouts",
  },
  {
    title: "Community",
    icon: <GroupIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
    link: "/community",
  },
  {
    title: "My Progress",
    icon: <TimelineIcon sx={{ fontSize: 40, color: "#f57c00" }} />,
    link: "/progress",
  },
];

export default function QuickNavigation() {
  const router = useRouter();

  return (
    <Box sx={{ px: 2, mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Quick Access
      </Typography>

      <Grid container spacing={2}>
        {features.map((item) => (
          <Grid item xs={6} sm={3} key={item.title}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  cursor: "pointer",
                },
              }}
              onClick={() => router.push(item.link)}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 120,
                  }}
                >
                  {item.icon}
                  <Typography variant="subtitle1" mt={1}>
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
