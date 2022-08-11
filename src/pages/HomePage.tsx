import { Typography, Box } from "@mui/material";
import ItemsList from "../components/ItemsList";
import Page from "../components/Page";

const HomePage = () => (
  <Page>
    <Box sx={{ my: 4 }}>
      <Typography variant="h2" align="center" gutterBottom>
        THE PANINI drop
      </Typography>
      <ItemsList />
    </Box>
  </Page>
);

export default HomePage;
