import { Grid, Box, Typography } from "@mui/material";
import firstImage from "./../../vetic_is_different laptop.webp";
import firstMobileImage from "./../../vetic_is_different mobile.webp";
import AttentionImage from "./../../Attention.svg";
import ProductsImage from "./../../Products.svg";
import ExclusiveSavingsImage from "./../../ExclusiveSavings.svg";
import {
  SubTextHomePage,
  SubMiniTextHomePage,
} from "../../constants/constants";
import { styled } from "@mui/material/styles";

const Image = styled("img")(({ theme }) => ({
  width: "99px",
  height: "99px",
  [theme.breakpoints.down("sm")]: {
    width: "80px",
    height: "83px",
  },
}));
const BoxView = styled(Box)(({ theme }) => ({
  padding: "5%",
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: "156px !important",
    paddingBottom: "0px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "160px",
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: 230,
    paddingBottom: "0px",
  },
}));

const GridItemView = styled(Grid)(({ theme, imagesection }) => ({
  paddingBottom: "0px !important",
  [theme.breakpoints.between("sm", "md")]: {
    paddingLeft: "70px !important",
    paddingTop: "0px !important",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0px !important",
  },
  [theme.breakpoints.up("sm")]: {
    paddingTop: "0px !important",
  },
  "@media (min-width: 823px) and (max-width: 1368px)": {
    paddingLeft: imagesection === "true" && "50px !important",
  },
}));

const ImageView = styled("img")(({ theme }) => ({}));

const GridView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { marginTop: 10 },
  [theme.breakpoints.up("sm")]: {
    marginTop: 30,
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: 10,
  },
}));

const TypographyView = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { marginTop: 10 },
  [theme.breakpoints.up("sm")]: {
    marginTop: 30,
    lineHeight: "45px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: 10,
    lineHeight: "20px",
    fontSize: "60px",
  },
}));

const SubTypographyView = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    fontSize: "80px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "60px",
  },
}));

const DivView = styled("div")(({ theme }) => ({
  [theme.breakpoints.between("sm", "md")]: {
    paddingLeft: "50px !important",
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: 40,
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
  },
}));

const laptopViewHeading = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
      <TypographyView
        component={"span"}
        fontSize="70px"
        fontWeight="400"
        color="#013773"
      >
        Vetic is{" "}
        <SubTypographyView
          component={"span"}
          fontWeight="bold"
          color="#013773"
          fontWeight="700"
        >
          {" "}
          Differenttttt
        </SubTypographyView>
      </TypographyView>
    </Box>
  );
};

const rightSide = () => {
  return [
    {
      image: AttentionImage,
      heading: "24x7 attentionp",
      subHeading: "Lorem ipsum dolor sit amet,",
    },
    {
      image: ProductsImage,
      heading: "24x7 attentiono",
      subHeading: "Lorem ipsum dolor sit amet,",
    },
    {
      image: ExclusiveSavingsImage,
      heading: "24x7 attentionm",
      subHeading: "Lorem ipsum dolor sit amet,",
    },
  ].map(({ image, subHeading, heading }) => {
    return (
      <GridView
        key={`${subHeading}_${heading}`}
        container
        spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4} sm={2}>
          <Image src={image} style={{ borderRadius: 10 }} />
        </Grid>
        <Grid item xs={8} sm={10}>
          <DivView>
            <div>{SubTextHomePage(heading, "24px")}</div>
            <div>{SubMiniTextHomePage(subHeading, "16px")}</div>
          </DivView>
        </Grid>
      </GridView>
    );
  });
};

// USP Showcasing

const SecondSection = () => {
  return (
    <BoxView>
      <Grid
        container
        spacing={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <GridItemView item xs={12} sm={6} md={6}>
          <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
            <img
              src={firstImage}
              width="100%"
              height="auto"
              style={{ borderRadius: 12 }}
              alt="image"
            />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none", md: "none" },
              flexDirection: "column",
              alignItems: "center",
              margin: "20px 0px",
            }}
          >
            <Typography
              component={"span"}
              fontSize="34px"
              fontWeight="400"
              color="#013773"
            >
              Vetic is
              <Typography
                component={"span"}
                fontSize="34px"
                fontWeight="bold"
                color="#013773"
                fontWeight="700"
                style={{ display: "inline", marginLeft: 6 }}
              >
                Different
              </Typography>
            </Typography>{" "}
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
            <ImageView src={firstMobileImage} width="100%" height="100%" />
          </Box>
        </GridItemView>
        <GridItemView item xs={12} sm={6} md={6} imagesection="true">
          {laptopViewHeading()}
          {rightSide()}
        </GridItemView>
      </Grid>
    </BoxView>
  );
};

export default SecondSection;
