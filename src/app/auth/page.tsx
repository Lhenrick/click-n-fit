"use client";
import { useState } from "react";
import { Box, Button, Container, TextField, Typography, Tabs, Tab } from "@mui/material";
import { Auth } from "../../lib/api";
import { setToken } from "../../lib/auth-store";

export default function AuthPage() {
  const [mode, setMode] = useState<"login"|"register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  const submit = async () => {
    try {
      const res = mode === "login"
        ? await Auth.login({ email, password })
        : await Auth.register({ email, password, name });
      setToken(res.token);
      setMsg("OK!");
    } catch (e: any) {
      setMsg(e?.message || "Error");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 12 }}>
      <Tabs value={mode} onChange={(_, v)=>setMode(v)}>
        <Tab value="login" label="Login" />
        <Tab value="register" label="Register" />
      </Tabs>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        {mode === "register" && (
          <TextField label="Name" value={name} onChange={e=>setName(e.target.value)} />
        )}
        <TextField label="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <TextField label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <Button variant="contained" onClick={submit}>
          {mode === "login" ? "Login" : "Create account"}
        </Button>
        {msg && <Typography variant="body2">{msg}</Typography>}
      </Box>
    </Container>
  );
}
