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

const features = [
  {
    title: "Body Map",
    icon: <MapIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    link: "/body-map",
  },
  {
    title: "Workout Builder",
    icon: <FitnessCenterIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
    link: "/workout-builder",
  },
  {
    title: "Community",
    icon: <GroupIcon sx={{ fontSize: 40, color: "#d32f2f" }} />,
    link: "/coming-soon",
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

      {/* Horizontal scroll container */}
      <Box
        role="list"
        aria-label="Quick navigation"
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          overflowY: "hidden",
          pb: 1, // room for scrollbar
          scrollSnapType: { xs: "x mandatory", sm: "x proximity" },
          WebkitOverflowScrolling: "touch",
          // optional: hide scrollbar (keeps accessibility)
          "&::-webkit-scrollbar": { height: 8 },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: "action.hover",
            borderRadius: 999,
          },
        }}
      >
        {features.map((item) => (
          <Box
            key={item.title}
            role="listitem"
            sx={{
              flex: "0 0 auto",
              scrollSnapAlign: "start",
            }}
          >
            <Card
              sx={{
                width: 130, // ~8.125rem
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px) scale(1.02)",
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
                    textAlign: "center",
                    px: 1,
                  }}
                >
                  {item.icon}
                  <Typography variant="subtitle2" mt={1} noWrap>
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
