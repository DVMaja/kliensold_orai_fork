import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  type SxProps,
  Stack,
  type Theme,
  Typography,
} from "@mui/material";
import { TrackList } from "./components/TrackList";
import { TrackForm } from "./components/TrackForm";
import { TrackDetails } from "./components/TrackDetails";
import { exampleTracks } from "./data/track";

const panelSx: SxProps<Theme> = {
  p: { xs: 1.5, md: 2.5 },
  border: "1px solid",
  borderColor: "rgba(148, 163, 184, 0.2)",
  backgroundColor: "rgba(17, 24, 39, 0.8)",
  backdropFilter: "blur(8px)",
};

function App() {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        background:
          "radial-gradient(circle at 5% 5%, rgba(94, 234, 212, 0.15), transparent 35%), radial-gradient(circle at 95% 0%, rgba(245, 158, 11, 0.15), transparent 30%), #070b14",
        py: { xs: 2.5, md: 4 },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          px: { xs: 1.5, sm: 2, md: 3, lg: 4 },
        }}
      >
        <Stack spacing={2.5}>
          <Box>
            <Typography variant="h4">Track Manager</Typography>
            <Typography variant="body1" color="text.secondary">
              Curate your playlist with a cleaner dark workspace.
            </Typography>
          </Box>

          <Grid container spacing={2.5}>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Paper elevation={0} sx={panelSx}>
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  Library
                </Typography>
                <TrackList tracks={exampleTracks} />
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>
              <Stack spacing={2.5}>
                <Paper elevation={0} sx={panelSx}>
                  <Typography variant="h6" sx={{ mb: 1.5 }}>
                    Track Details
                  </Typography>
                  <TrackDetails track={exampleTracks[0]} />
                </Paper>

                <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.2)" }} />

                <Paper elevation={0} sx={panelSx}>
                  <Typography variant="h6" sx={{ mb: 1.5 }}>
                    Add New Track
                  </Typography>
                  <TrackForm />
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
