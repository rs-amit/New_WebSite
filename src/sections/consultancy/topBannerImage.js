import React from "react";
import GirlImage from "../../banner image3.webp";
import COLORS from "../../constants/colors";
import { Grid, Typography, Box } from "@mui/material";
import ButtonComponent from "../../component/button";
import { styled } from "@mui/material/styles";
import DotsImage from "../../+ sign image.webp";
import { Link } from "react-scroll";
import "../../App.css";

const MobileView = styled("div")(
  ({ theme, laptopbannerimgheight, mobilebannerimgheight }) => ({
    fontFamily: "Work Sans",
    height: laptopbannerimgheight || 600,
    backgroundColor: "#F6FCFC",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: mobilebannerimgheight || 300,
    },
  })
);

const ContentView = styled("div")(({ theme }) => ({
  fontFamily: "Work Sans",
  position: "absolute",
  zIndex: 100,
  [theme.breakpoints.down("sm")]: {
    top: 30,
    left: 18,
  },
  [theme.breakpoints.up("sm")]: {
    left: 80,
    top: 250,
    letterSpacing: 1,
  },
  [theme.breakpoints.between("sm", "md")]: {
    left: "18px !important",
    top: 250,
    letterSpacing: 1,
  },
}));

const HeadingsView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  letterSpacing: 0,
  [theme.breakpoints.up("sm")]: {
    fontSize: 48,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 23,
    marginTop: 54,
  },
}));

const SubHeadingView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  color: "#595f6f",
  [theme.breakpoints.up("sm")]: {
    fontSize: 20,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    marginTop: 5,
  },
}));

const ImageView = styled("img")(({ theme, laptopbannerimgheight }) => ({
  position: "absolute",
  right: 60,
  width: 500,
  height: laptopbannerimgheight || 500,
  [theme.breakpoints.up("md")]: {
    marginTop: 20,
  },
  [theme.breakpoints.only("sm")]: {
    marginTop: "195px !important",
    right: "0px !important",
  },
  [theme.breakpoints.only("xs")]: {
    height: "150px!important",
    width: "150px!important",
    marginTop: 62,
    right: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: "195px !important",
    right: "0px !important",
    width: 400,
    height: 400,
  },
  [theme.breakpoints.down("sm")]: {
    height: 300,
    width: "100%",
  },
}));

const DotsImageView = styled("img")(({ theme }) => ({
  position: "absolute",
  objectFit: "contain",
  [theme.breakpoints.only("lg")]: {
    height: "196px !important",
    width: "158px !important",
    right: "416px!important",
    top: "149px!important",
  },
  [theme.breakpoints.up("md")]: {
    height: 196,
    width: 158,
    right: 440,
    top: 244,
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: 196,
    width: 158,
    right: 0,
    top: 344,
  },
  [theme.breakpoints.only("sm")]: {
    height: 196,
    width: 158,
    right: 40,
    top: 342,
  },
  [theme.breakpoints.between("xs", "sm")]: {
    height: 196,
  },
  [theme.breakpoints.down("sm")]: {
    width: 77,
    height: 86,
    right: 0,
    marginTop: 52,
  },
}));

const SubHeadView = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: -10,
  },
}));

const headingText = (isaboutuspage) => {
  const color = COLORS.DARK_BLUE;

  if (isaboutuspage) {
    return (
      <HeadingsView
        component="div"
        fontFamily="Work Sans"
        color={color}
        fontWeight="bold"
      >
        Connect with a Vet.
        <SubHeadView>Speak with Doctor instantly.</SubHeadView>
      </HeadingsView>
    );
  }
  return (
    <HeadingsView
      component="div"
      fontFamily="Work Sans"
      color={color}
      fontWeight="bold"
    >
      Consult a <span style={{ color: "#02c0d8" }}>Vet </span> online
      <SubHeadView>
        to get immediate <span style={{ color: "#02c0d8" }}>Care</span>
      </SubHeadView>
    </HeadingsView>
  );
};

const subHeadingText = () => {
  return (
    <SubHeadingView component="div">
      <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
        Video Consult the specialist
      </Box>
      <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
        from the comfort of your home
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
        }}
      >
        Video Consult the specialist from the comfort of your home
      </Box>
    </SubHeadingView>
  );
};

function TopBannerImage({
  setScroll,
  isScroll,
  aboutUsPage,
  laptopbannerimgheight,
  mobilebannerimgheight,
  isaboutuspage,
}) {
  const onClick = () => {
    setScroll(!isScroll);
  };

  return (
    <>
      <MobileView
        laptopbannerimgheight={laptopbannerimgheight}
        mobilebannerimgheight={mobilebannerimgheight}
      >
        <Grid
          container
          style={{ backgroundColor: "#F6FCFC" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} display="flex" justifyContent="center">
            <ContentView>
              {headingText(isaboutuspage)}
              {!isaboutuspage && subHeadingText()}
              {!aboutUsPage && (
                <Link
                  activeClass="active"
                  to="consultation_form"
                  spy={isScroll}
                  smooth={true}
                >
                  <ButtonComponent
                    onClick={() => onClick()}
                    heading="Book now"
                    width="133px"
                    fontSize="15px"
                    height="40px"
                  />
                </Link>
              )}
            </ContentView>{" "}
            <DotsImageView alt="dots-image" src={DotsImage} />
            <ImageView alt="girl-image" src={GirlImage} />
          </Grid>
        </Grid>
      </MobileView>
    </>
  );
}

export default TopBannerImage;
