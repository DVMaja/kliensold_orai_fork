import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

type Genre = "rock" | "pop" | "soundtrack" | "alternative";
type Rating = "1" | "2" | "3" | "4" | "5";

interface FormValues {
  title: string;
  artist: string;
  genre: Genre;
  rating: Rating;
  isFavorite: boolean;
}

export function TrackForm() {
  return (
    <form>
      <Stack spacing={2}>
        <TextField label="Title" name="title" />
        <TextField label="Artist" name="artist" />

        <FormControl fullWidth>
          <InputLabel id="track-genre-label">Genre</InputLabel>
          <Select labelId="track-genre-label" label="Genre" name="genre">
            <MenuItem value="rock">Rock</MenuItem>
            <MenuItem value="pop">Pop</MenuItem>
            <MenuItem value="soundtrack">Soundtrack</MenuItem>
            <MenuItem value="alternative">Alternative</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="track-rating-label">Rating</InputLabel>
          <Select labelId="track-rating-label" label="Rating" name="rating">
            <MenuItem value="1">1 / 5</MenuItem>
            <MenuItem value="2">2 / 5</MenuItem>
            <MenuItem value="3">3 / 5</MenuItem>
            <MenuItem value="4">4 / 5</MenuItem>
            <MenuItem value="5">5 / 5</MenuItem>
          </Select>
        </FormControl>

        <FormControlLabel control={<Checkbox />} label="Mark as favorite" />

        <Button type="submit" variant="contained">
          Add Track
        </Button>
      </Stack>
    </form>
  );
}
