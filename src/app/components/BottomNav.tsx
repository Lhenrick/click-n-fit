"use client";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GroupIcon from "@mui/icons-material/Group";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState(pathname);

  useEffect(() => {
    setValue(pathname);
  }, [pathname]);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: "1px solid #ddd",
        zIndex: 10,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
          router.push(newValue);
        }}
      >
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Body Map"
          value="/body-map"
          icon={<MapIcon />}
        />
        <BottomNavigationAction
          label="Workouts"
          value="/workout-builder"
          icon={<FitnessCenterIcon />}
        />
        <BottomNavigationAction
          label="Community"
          value="/community"
          icon={<GroupIcon />}
        />
        {/* <BottomNavigationAction
          label="Settings"
          value="/settings"
          icon={<SettingsIcon />}
        /> */}
      </BottomNavigation>
    </Paper>
  );
}
