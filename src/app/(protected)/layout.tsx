"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // avoid issues on the server
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("auth_token"); // or whatever key setToken uses

    if (!token) {
      router.replace("/login"); // user not logged in -> go to login
      return;
    }

    setChecking(false); // user is authenticated
  }, [router]);

  if (checking) {
    // simple loading screen while we check
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #000000 0%, #1a0b00 30%, #E96000 100%)",
          color: "#f9fafb",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        Loading your Click-n-Fit profile...
      </div>
    );
  }

  // if token exists, render the real page
  return <>{children}</>;
}
