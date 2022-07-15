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
  ({
    theme,
    cardmediawidth,
    cardmediaheight,
    mediamargintop,
    isaboutuspage,
  }) => ({
    marginTop: mediamargintop,
    width: cardmediawidth || "100%",
    [theme.breakpoints.down("sm")]: {
      objectFit: isaboutuspage ? "contain" : "cover",
      height: !isaboutuspage && 190,
      width: isaboutuspage && "80%",
      marginLeft: isaboutuspage && 38,
    },
    [theme.breakpoints.up("sm")]: {
      objectFit: isaboutuspage ? "contain" : "cover",
      width: isaboutuspage && "381px !important",
      height: cardmediaheight || 220,
    },
  })
);

const CardContentView = styled(CardContent)(
  ({ theme, paddingleft, isaboutuspage, cardcontentwidth }) => ({
    paddingLeft: isaboutuspage ? paddingleft : 0,
    paddingBottom: "18px !important",
    // paddingL
    width: cardcontentwidth,
    marginLeft: isaboutuspage && 20, // about us mobile
    marginRight: isaboutuspage && 20, // about us mobile
    "@media (min-width: 425px) and (max-width: 767px)": {
      padding: isaboutuspage && 16,
      paddingLeft: isaboutuspage ? 25 : 0,
      // padding-left: 0;
    },
    [theme.breakpoints.down("sm")]: {
      width: isaboutuspage && "80%",
      marginLeft: isaboutuspage ? 80 : 0, // about us mobile
    },
  })
);

const CardActionsView = styled(CardActions)(({ theme }) => ({
  marginLeft: 36,
  [theme.breakpoints.up("sm")]: {
    padding: 0,
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 65,
    padding: 0,
    paddingBottom: "0px !important",
  },
}));

export default function CardComponent({
  heading,
  content,
  image,
  cardmediawidth,
  cardmediaheight,
  paddingleft,
  mediamargintop,
  contentMainHeadingFont,
  isaboutuspage,
  cardcontentwidth,
}) {
  return (
    <Card
      style={{
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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
      <CardContentView
        paddingleft={paddingleft}
        cardmediawidth={cardmediawidth}
        isaboutuspage={isaboutuspage}
        cardcontentwidth={cardcontentwidth}
      >
        <Typography
          component="div"
          color={contentMainHeadingFont ? "#313131" : "rgb(27, 55, 107)"}
          fontSize={contentMainHeadingFont || "20px"}
          fontFamily="Work Sans, Bold"
          fontWeight="bold"
        >
          {heading}
        </Typography>
        <SubHeadingView
          color={contentMainHeadingFont ? "#313131" : "text.secondary"}
          fontFamily="Work Sans, Regular"
        >
          {content}
        </SubHeadingView>
      </CardContentView>
      {isaboutuspage && (
        <CardActionsView
          style={{
            marginRight: "auto",
          }}
        >
          <Typography
            component="div"
            size="small"
            style={{
              textTransform: "none",
              color: "rgb(27, 55, 107)",
              fontSize: 17,
              fontFamily: "Work Sans, Medium",
            }}
          >
            Learn More
          </Typography>
        </CardActionsView>
      )}
    </Card>
  );
}
