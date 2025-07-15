"use client";

import { Box } from "@mui/material";
import Header from "./Header";
import BottomNav from "./BottomNav";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Box sx={{ pt: 8, pb: 7, px: 2 }}>{children}</Box>
      <BottomNav />
    </>
  );
}
