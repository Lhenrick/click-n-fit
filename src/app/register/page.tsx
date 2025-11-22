"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import Image from "next/image";
import { Auth } from "../../lib/api";
import { setToken } from "../../lib/auth-store";

export default function RegistrationPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setToken("");
  }, []);

  const submit = async () => {
    setMsg(null);
    if (!email || !password) {
      setMsg("Please provide email and password");
      return;
    }
    if (password !== confirm) {
      setMsg("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const res = await Auth.register({
        email,
        password,
        name: username || undefined,
      });
      setToken(res.token);
      setMsg("Registration successful");
      router.push("/");
    } catch (e: unknown) {
      const err = e instanceof Error ? e.message : "Registration error";
      setMsg(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 2, sm: 3 },
        py: { xs: 4, sm: 6 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        boxSizing: "border-box",
        background:
          "linear-gradient(135deg, #000000 0%, #1a0b00 30%, #E96000 100%)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1100,
          display: "flex",
          justifyContent: "center",
          mx: "auto",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Paper
            elevation={6}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              bgcolor: "rgba(15,23,42,0.95)",
              color: "#f9fafb",
            }}
          >
            <Box sx={{ display: { xs: "block", md: "flex" } }}>
              <Box
                sx={{
                  width: { xs: "100%", md: "40%" },
                  p: { xs: 3, sm: 4 },
                  borderRight: { md: "1px solid rgba(148,163,184,0.3)" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  justifyContent: "center",
                  textAlign: { xs: "center", md: "left" },
                  gap: 2,
                  background:
                    "radial-gradient(circle at top, rgba(233,96,0,0.25), transparent 55%)",
                }}
              >
                <Box sx={{ mb: 1 }}>
                  <Image
                    src="/logo.svg"
                    alt="Click N Fit Logo"
                    width={340}
                    height={340}
                    style={{ border: "none" }}
                  />
                </Box>
                <Typography variant="h4" component="h1" fontWeight={700}>
                  Welcome to Click-n-Fit
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(226,232,240,0.8)" }}
                >
                  Create your account and start levelling up your fitness
                  journey with quests, stats and real progress.
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    fontSize: 14,
                    color: "rgba(148,163,184,0.9)",
                  }}
                >
                  <Typography>✔ Track your workouts like an RPG</Typography>
                  <Typography>✔ Unlock achievements & milestones</Typography>
                  <Typography>
                    ✔ Stay consistent with daily and weekly goals
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                <Box
                  sx={{
                    p: { xs: 3, sm: 4, md: 5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h2"
                    fontWeight={600}
                    gutterBottom
                  >
                    Create your account
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: "rgba(148,163,184,0.9)" }}
                  >
                    Fill in the fields below to start your fitness journey.
                  </Typography>

                  <TextField
                    fullWidth
                    name="username"
                    label="Username (optional)"
                    variant="outlined"
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    InputLabelProps={{ sx: { color: "rgba(148,163,184,0.9)" } }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#e5e7eb",
                        "& fieldset": { borderColor: "rgba(148,163,184,0.5)" },
                        "&:hover fieldset": {
                          borderColor: "rgba(233,96,0,0.9)",
                        },
                        "&.Mui-focused fieldset": { borderColor: "#E96000" },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputLabelProps={{ sx: { color: "rgba(148,163,184,0.9)" } }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#e5e7eb",
                        "& fieldset": { borderColor: "rgba(148,163,184,0.5)" },
                        "&:hover fieldset": {
                          borderColor: "rgba(233,96,0,0.9)",
                        },
                        "&.Mui-focused fieldset": { borderColor: "#E96000" },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputLabelProps={{ sx: { color: "rgba(148,163,184,0.9)" } }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#e5e7eb",
                        "& fieldset": { borderColor: "rgba(148,163,184,0.5)" },
                        "&:hover fieldset": {
                          borderColor: "rgba(233,96,0,0.9)",
                        },
                        "&.Mui-focused fieldset": { borderColor: "#E96000" },
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    name="confirmpassword"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    InputLabelProps={{ sx: { color: "rgba(148,163,184,0.9)" } }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#e5e7eb",
                        "& fieldset": { borderColor: "rgba(148,163,184,0.5)" },
                        "&:hover fieldset": {
                          borderColor: "rgba(233,96,0,0.9)",
                        },
                        "&.Mui-focused fieldset": { borderColor: "#E96000" },
                      },
                    }}
                  />

                  <Box sx={{ mt: 3, textAlign: "center" }}>
                    <Button
                      variant="contained"
                      onClick={submit}
                      disabled={loading}
                      fullWidth
                      sx={{
                        py: 1.2,
                        fontWeight: 600,
                        letterSpacing: 0.5,
                        borderRadius: 999,
                        textTransform: "none",
                        background:
                          "linear-gradient(135deg, #FF7F00 0%, #E96000 40%, #FFA500 100%)",
                        boxShadow: "0 10px 25px rgba(233,96,0,0.35)",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #E96000 0%, #D45700 50%, #FF7F00 100%)",
                          boxShadow:
                            "0 0 40px rgba(233,96,0,0.7), 0 0 20px rgba(233,96,0,0.5)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      {loading ? "Registering..." : "Create account"}
                    </Button>
                  </Box>

                  {msg && (
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", mt: 2, color: "#f97316" }}
                    >
                      {msg}
                    </Typography>
                  )}

                  <Typography
                    variant="caption"
                    sx={{
                      mt: 3,
                      textAlign: "center",
                      color: "rgba(148,163,184,0.8)",
                    }}
                  >
                    By signing up, you agree to our{" "}
                    <span
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                    >
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span
                      style={{ textDecoration: "underline", cursor: "pointer" }}
                    >
                      Privacy Policy
                    </span>
                    .
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
