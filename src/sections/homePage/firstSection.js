import React, { useState, useEffect } from "react";
import BannerImage from "./../../homepage laptop.webp";
// import MobileBannerImage from "./../../homepage mobile.webp";
import firstImage from "./../../vetic_is_different laptop.webp";
import SecondImage from "./../../homepage laptop 1-4.webp";
import thirdImage from "./../../homepage laptop 2.webp";
// import secondImageMobile from './../../homepage mobile 1.webp'
import COLORS from "./../../constants/colors";
import { Grid, Typography, Box } from "@mui/material";
import ButtonComponent from "./../../component/button";
import BlurredComponent from "./../../component/blurredComponent";
import { styled } from "@mui/material/styles";
import { Link } from "react-scroll";
import HorizontalLine from "./../../component/horizontalLine";
import LeftRightIcons from "./../../component/leftRightIcons";
import "./../../App.css";

const MobileView = styled("div")(
  ({ theme, laptopbannerimgheight, mobilebannerimgheight }) => ({
    fontFamily: "Work Sans",
    height: laptopbannerimgheight || 570,
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
  right: 40,
  height: laptopbannerimgheight || 500,
  borderRadius: 4,
  [theme.breakpoints.up("md")]: {
    left: 0,
    width: "94%",
    // marginTop: 20,
    height: "auto",
    borderRadius: 12,
  },
  [theme.breakpoints.between("sm", "md")]: {
    // ipad
    width: "95%",
    marginLeft: "10%",
  },

  [theme.breakpoints.down("sm")]: {
    width: "90%",
    height: "183px",
    marginLeft: 80,
  },
}));

const BlurredComp = styled("div")(({ theme }) => ({
  // padding: "50px 60px 0px 60px",
  padding: "70px 50px 70px 70px",
}));

const PWrapper = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "400",
  color: "#8A8987",
  [theme.breakpoints.down("sm")]: {
    width: 320,
  },
}));

const LineWrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  height: 2,
  width: 350,
  marginTop: 10,
  [theme.breakpoints.up("sm")]: {
    marginTop: 15,
    marginBottom: 30,
    marginLeft: "-22px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
}));

const HeadingWrapper = styled(Typography)(({ theme }) => ({
  lineHeight: "60px",
  [theme.breakpoints.up("sm")]: {
    marginTop: -10,
    marginBottom: 20,
    marginLeft: -29,
    letterSpacing: "-4px",
  },
}));

const SubHeadingWrapper = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginLeft: -24,
  },
}));

function FirstSection({
  setScroll,
  isScroll,
  laptopbannerimgheight,
  mobilebannerimgheight,
}) {
  const allData = [
    {
      image: BannerImage,
    },
    {
      image: SecondImage,
    },
    {
      image: thirdImage,
    },
  ];
  const [data, setData] = useState(allData);

  useEffect(() => {
    setTimeout(() => {
      onChange("next");
    }, 5000);
  }, [data]);

  const laptopView = () => {
    return (
      <Grid
        container
        style={{ backgroundColor: "#F6FCFC" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} display="flex" justifyContent="center">
          <ImageView
            alt="girl-image"
            src={data[0].image}
            style={{ position: "relative" }}
          />

          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <BlurredComponent
              children={
                <BlurredComp>
                  <HeadingWrapper color="#fff" fontSize="80px" fontWeight="700">
                    Pet Care Redefined
                  </HeadingWrapper>
                  <SubHeadingWrapper
                    component="div"
                    color="#fff"
                    fontSize="24px"
                    fontWeight="400"
                    style={{ lineHeight: "25px" }}
                  >
                    Friendly and urgent care for dogs and cats
                  </SubHeadingWrapper>
                  <LineWrapper marginleft="-22px" />
                  <Link
                    activeClass="active"
                    to="consultation_form"
                    spy={isScroll}
                    smooth={true}
                  >
                    <ButtonComponent
                      onClick={() => onClick()}
                      heading="Book Now"
                      width="230px"
                      fontSize="33px"
                      height="72px"
                      margintop="10px"
                      laptopmarginleft="-22px"
                    />
                  </Link>
                </BlurredComp>
              }
              laptopleft="46px"
              laptopheight="323px"
              width="50%"
              margintop="372px"
              mobileviewheight="584px"
              margintopmobile="-587px"
              bigsizelaptopleft="78px"
              borderradius="0px 12px"
            />
            <LeftRightIcons
              onRightClick={() => onChange("next")}
              onLeftClick={() => onChange("back")}
            />
          </Box>
        </Grid>
      </Grid>
    );
  };
  const mobileAndSmallScreenView = () => {
    return (
      <>
        <Box
          sx={{
            display: { xs: "flex", sm: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <LeftRightIcons
            onRightClick={() => onChange("next")}
            onLeftClick={() => onChange("back")}
          />
          <div style={{ display: "inline" }}>
            <Typography
              fontSize="32px"
              fontWeight="500"
              color="#013773"
              style={{ display: "inline" }}
            >
              Pet Care
            </Typography>
            <Typography
              fontSize="32px"
              fontWeight="bold"
              color="#013773"
              fontWeight="900"
              style={{ display: "inline" }}
            >
              {` `}
              Redefined
            </Typography>{" "}
          </div>
          <div style={{ lineHeight: "20px", textAlign: "center" }}>
            <PWrapper>Friendly and urgent care for dogs and cats</PWrapper>
          </div>
          <Link
            activeClass="active"
            to="consultation_form"
            spy={isScroll}
            smooth={true}
          >
            <ButtonComponent
              onClick={() => onClick()}
              heading="Book Now"
              width="180px"
              fontSize="21px"
              height="64px"
              margintop="10px"
            />
          </Link>
        </Box>
        <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
          <HorizontalLine
            color="#5E7FB159"
            mobilemargintop="28px"
            mobilemarginleft="35px"
            mobilewidth="80%"
          />
        </Box>
      </>
    );
  };

  const onClick = () => {
    setScroll(!isScroll);
  };

  const onChange = (val) => {
    const newData = [...data];

    if (val === "next") {
      newData[1] = data[2];
      newData[0] = data[1];
      newData[data.length - 1] = data[0];
      setData(newData);
    } else if (val === "back") {
      newData[1] = data[0];
      newData[0] = data[2];
      newData[data.length - 1] = data[1];
      setData(newData);
    }
  };

  return (
    <>
      <MobileView
        laptopbannerimgheight={laptopbannerimgheight}
        mobilebannerimgheight={mobilebannerimgheight}
      >
        {laptopView()}
        {mobileAndSmallScreenView()}
      </MobileView>
    </>
  );
}

export default FirstSection;
