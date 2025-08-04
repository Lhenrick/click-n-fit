"use client";

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MapIcon from "@mui/icons-material/Map";
import GroupIcon from "@mui/icons-material/Group";
import TimelineIcon from "@mui/icons-material/Timeline";
import FeedIcon from "@mui/icons-material/Feed";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid";

const features = [
  {
    title: "Body Map",
    icon: <MapIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    link: "/body-map",
  },
  {
    title: "Wokout Builder",
    icon: <FitnessCenterIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
    link: "/workout-builder",
  },
  {
    title: "Community",
    icon: <GroupIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
    link: "/community",
  },
  {
    title: "My Progress",
    icon: <TimelineIcon sx={{ fontSize: 40, color: "#f57c00" }} />,
    link: "/my-progress",
  },
  {
    title: "Treinos Prontos",
    icon: <FeedIcon sx={{ fontSize: 40, color: "#8746B9" }} />,
    link: "/premade-plans",
  },
];

export default function QuickNavigation() {
  const router = useRouter();

  return (
    <Box sx={{ px: 1, mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Quick Access
      </Typography>

      <Grid container spacing={2}>
        {features.map((item) => (
          <Grid item xs={6} sm={4} md={3} key={item.title}>
            <Card
              sx={{
                height: "100%",
                width: "7rem",
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
