import { Box } from "@mui/material";
import Header from "./components/Header";
import QuickNavigation from "./components/QuickNavigation";

export default function Home() {
  return (
    <Box m={"4rem"}>
      <Header />
      <QuickNavigation />
    </Box>
  );
}
