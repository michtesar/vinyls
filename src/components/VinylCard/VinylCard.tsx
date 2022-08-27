import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Vinyl } from "../VinylTypes/Vinyl";

export const VinylCard = ({
  artist,
  album,
  year,
  cover,
  id,
  rating,
}: Vinyl) => {
  const dimension: number = 200;

  return (
    <Card sx={{ width: dimension, margin: 5 }}>
      <CardHeader key={id} title={album} subheader={artist} />
      <CardMedia
        component={"img"}
        height={dimension}
        image={cover}
        alt={artist + ": " + album}
      />
      <CardContent>
        <Rating name="read-only" value={rating} readOnly />
      </CardContent>
    </Card>
  );
};
