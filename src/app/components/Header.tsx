import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "../../i18n/I18nProvider";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { t } = useI18n();
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          position: "relative",
        }}
      >
        {/* User Greeting */}
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar alt="profile" src="/profile.png" />
          <Box display="flex" flexDirection="column" sx={{ width: 100 }}>
            <Typography variant="body2" sx={{ color: "white" }}>
              {t("header.welcome")}
            </Typography>
          </Box>
        </Box>

        {/* Logo */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Link href="/">
            <Box display="flex" alignItems="center" gap={1}>
              <Image
                src="/logo.svg"
                alt="Click N Fit Logo"
                width={60}
                height={60}
              />
            </Box>
          </Link>
        </Box>
        <Box>
          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
