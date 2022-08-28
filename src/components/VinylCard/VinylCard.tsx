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
    //   <Card
    //     sx={{
    //       width: dimension,
    //       ":hover": { boxShadow: "1px 2px 9px grey" },
    //     }}
    //     className="Card"
    //     draggable={true}
    //   >
    //     <CardHeader key={id} title={album} subheader={artist} />
    //     <CardMedia
    //       component={"img"}
    //       height={dimension}
    //       image={cover}
    //       alt={artist + "- " + album + "(" + year + ")"}
    //       draggable={false}
    //     />
    //     {/* <CardContent>
    //       <Rating name="read-only" value={rating} size={"small"} readOnly />
    //     </CardContent> */}
    //   </Card>
    // );
    <div className="Card">
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
