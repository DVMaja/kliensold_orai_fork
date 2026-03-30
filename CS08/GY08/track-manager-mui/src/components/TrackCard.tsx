import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Track } from "../data/track";

interface Props {
  track: Track;
}

export function TrackCard({ track }: Props) {
  return (
    <Card
      sx={{
        cursor: "pointer",
        height: "100%",
        border: "1px solid",
        borderColor: "rgba(148, 163, 184, 0.2)",
        background:
          "linear-gradient(180deg, rgba(30, 41, 59, 0.9) 0%, rgba(17, 24, 39, 0.9) 100%)",
        transition: "transform 180ms ease, border-color 180ms ease",
        "&:hover": {
          transform: "translateY(-2px)",
          borderColor: "rgba(94, 234, 212, 0.55)",
        },
      }}
    >
      <CardMedia component="img" height="140" image={track.thumbnailURL} />

      <CardContent sx={{ display: "grid", gap: 0.5 }}>
        <Typography variant="h6">{track.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {track.artist}
        </Typography>

        {/* Not functional yet */}
        <IconButton
          color="error"
          sx={{
            justifySelf: "start",
            mt: 0.5,
            border: "1px solid rgba(239, 68, 68, 0.35)",
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
