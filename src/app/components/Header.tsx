import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <AppBar
      sx={{
        background: "#424242",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
        }}
      >
        {/* Logo */}
        <Box display="flex" alignItems="center" gap={1}>
          <Image
            src="/logo.png"
            alt="Click N Fit Logo"
            width={50}
            height={40}
          />
          {/* <Typography variant="h6" sx={{ color: "white", fontWeight: 500 }}>
            Click N Fit
          </Typography> */}
        </Box>

        {/* User Greeting */}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body1" sx={{ color: "white" }}>
            Welcome back, Luan!
          </Typography>
          <Avatar alt="Luan" src="/profile.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
