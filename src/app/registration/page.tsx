"use client ";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function RegistrationPage() {
  return (
    <Box sx={{ p: 6, my: 6 }}>
      <Box display="flex" alignItems="center" gap={1}>
        <Image
          src="/logo.png"
          alt="Click N Fit Logo"
          width={300}
          height={300}
        />
      </Box>
      <Typography variant="h2" gutterBottom>
        Click-n-fit
      </Typography>

      <Typography variant="body1">
        This is where the registration form will go.
      </Typography>
    </Box>
  );
}
