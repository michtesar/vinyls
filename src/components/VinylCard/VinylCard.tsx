import { Typography } from "@mui/material";
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
  const dimension: number = 150;

  return (
    <div
      className="Card"
      onClick={() => console.log(album)}
      style={{ padding: 10 }}
    >
      <img
        alt={artist + " - " + album + "(" + year + ")"}
        src={cover}
        width={dimension}
      />
      <div className="Details" style={{ maxWidth: dimension }}>
        <Typography className={"Title"} noWrap>
          {album}
        </Typography>
        <Typography className={"Subtitle"} noWrap>
          {artist}
        </Typography>
      </div>
    </div>
  );
};
