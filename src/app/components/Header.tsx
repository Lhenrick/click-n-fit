import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar
      position="fixed"
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
        <Link href="/">
          <Box display="flex" alignItems="center" gap={1}>
            <Image
              src="/logo.png"
              alt="Click N Fit Logo"
              width={50}
              height={40}
            />
          </Box>
        </Link>

        {/* User Greeting */}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body1" sx={{ color: "white" }}>
            welcome back, user!
          </Typography>
          <Avatar alt="profile" src="/profile.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
