import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Vinyl } from "../VinylTypes/Vinyl";
import "./Card.css";

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
    <Card sx={{ width: dimension }} className="Card">
      <CardHeader key={id} title={album} subheader={artist} />
      <CardMedia
        component={"img"}
        height={dimension}
        image={cover}
        alt={artist + "- " + album + "(" + year + ")"}
      />
      <CardContent>
        <Rating name="read-only" value={rating} readOnly />
      </CardContent>
    </Card>
  );
};
