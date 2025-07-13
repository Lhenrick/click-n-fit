import { Box } from "@mui/material";
import BodyMap from "./components/BodyMap";
import Header from "./components/Header";

export default function Home() {
  return (
    <Box m={"4rem"}>
      <Header />
      <BodyMap />
    </Box>
  );
}
