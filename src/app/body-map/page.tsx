"use client";

import { Box } from "@mui/material";
import BodyMap from "../components/BodyMap";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";

export default function BodyMapPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Header />
      <Box sx={{ flexGrow: 1, overflowy: "auto" }}>
        <BodyMap />
      </Box>
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          zIndex: 10,
          backgroundColor: "#fff",
        }}
      >
        <BottomNav />
      </Box>
    </Box>
  );
}
