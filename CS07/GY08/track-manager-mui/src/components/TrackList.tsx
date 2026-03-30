import { Grid } from "@mui/material";
import type { Track } from "../data/track";
import { TrackCard } from "./TrackCard";

interface Props {
  tracks: Track[];
}

export function TrackList({ tracks }: Props) {
  return (
    <Grid container spacing={2}>
      {tracks.map((track) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={track.id}>
          <TrackCard track={track} />
        </Grid>
      ))}
    </Grid>
  );
}
