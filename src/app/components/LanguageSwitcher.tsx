"use client";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { useI18n, Locale } from "../../i18n/I18nProvider";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
] as const satisfies readonly { code: Locale; label: string; flag: string }[];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (code: Locale) => {
    setLocale(code);
    handleClose();
  };

  const currentLang = LANGUAGES.find((l) => l.code === locale);

  return (
    <Box>
      <IconButton onClick={handleOpen} color="inherit">
        <span style={{ fontSize: "1.5rem" }}>{currentLang?.flag}</span>
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {LANGUAGES.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === locale}
            onClick={() => handleSelect(lang.code)}
          >
            <ListItemIcon>
              <span style={{ fontSize: "1.5rem" }}>{lang.flag}</span>
            </ListItemIcon>
            <ListItemText>{lang.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
