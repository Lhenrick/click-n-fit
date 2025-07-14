import { Box } from "@mui/material";
import Header from "./components/Header";
import QuickNavigation from "./components/QuickNavigation";
import DailyTip from "./components/DailyTip";

export default function Home() {
  return (
    <Box m={"4rem"}>
      <Header />
      <QuickNavigation />
      <DailyTip />
    </Box>
  );
}
