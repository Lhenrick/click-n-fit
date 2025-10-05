"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Auth } from "../../lib/api";
import { setToken } from "../../lib/auth-store";

type Mode = "login" | "register";

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  const submit = async () => {
    try {
      const res =
        mode === "login"
          ? await Auth.login({ email, password })
          : await Auth.register({ email, password, name });
      setToken(res.token);
      setMsg("OK!");
    } catch (e: unknown) {
      const err = e instanceof Error ? e.message : "Error";
      setMsg(err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 12 }}>
      <Tabs value={mode} onChange={(_evt, v: Mode) => setMode(v)}>
        <Tab value="login" label="Login" />
        <Tab value="register" label="Register" />
      </Tabs>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        {mode === "register" && (
          <TextField
            label="Name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        )}
        <TextField
          label="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <Button variant="contained" onClick={submit}>
          {mode === "login" ? "Login" : "Create account"}
        </Button>
        {msg && <Typography variant="body2">{msg}</Typography>}
      </Box>
    </Container>
  );
}
