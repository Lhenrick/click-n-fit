import { AppBar } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <AppBar
      sx={{
        background: "#424242",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src="/clicklogo.png"
        alt="Click N Fit Logo"
        width={300}
        height={50}
      />
    </AppBar>
  );
}
