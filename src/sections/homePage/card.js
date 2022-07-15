import Card from "@mui/material/Card";
import { CardMedia, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { styled, css } from "@mui/material/styles";

const SubHeadingView = styled(Typography)(({ fontSize }) => ({
  fontSize: 16,
}));

const CardMediaView = styled(CardMedia)(
  ({ theme, cardmediawidth, cardmediaheight, mediamargintop }) => ({
    position: "relative",
    objectFit: "fill",
    marginTop: mediamargintop,
    width: cardmediawidth || "100%",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      //   width: isaboutuspage && "80%",
      //   marginLeft: isaboutuspage && 38,
    },
    [theme.breakpoints.up("sm")]: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    "@media (min-width: 746px) and (max-width: 1024px)": {
      width: "100% !important",
      height: 430,
    },
  })
);

const CardContentView = styled(CardContent)(({ cardcontentmargintop }) => ({
  position: "abosulte",
  textAlign: "center",
  marginTop: cardcontentmargintop || -180,
  width: "100%",
  height: 160,
  opacity: "100%",
  backdropFilter: "blur(30px)",
  background: "border-box",
}));

export default function HomePageCard({
  heading,
  content,
  image,
  cardmediawidth,
  cardmediaheight,
  mediamargintop,
  isaboutuspage,
  cardcontentmargintop,
}) {
  return (
    <Card
      style={{
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: 12,
      }}
    >
      <CardMediaView
        component="img"
        image={image}
        alt="images"
        cardmediawidth={cardmediawidth}
        cardmediaheight={cardmediaheight}
        mediamargintop={mediamargintop}
        isaboutuspage={isaboutuspage}
      />
      <CardContentView cardcontentmargintop={cardcontentmargintop}>
        <Typography
          color="#fff"
          fontSize="25px"
          fontFamily="Work Sans, Bold"
          fontWeight="bold"
        >
          {heading}
        </Typography>
        <SubHeadingView
          color="#fff"
          fontFamily="Work Sans, Regular"
          fontSize="20px"
        >
          {content}
        </SubHeadingView>
      </CardContentView>
    </Card>
  );
}
