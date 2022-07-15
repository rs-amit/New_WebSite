import React, { lazy, Suspense } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Headings from "./../../component/headings";
import { styled } from "@mui/material/styles";
import FB_IMAGE from "./../../icon_fb.webp";
import LinkedIn from "./../../icon_linkedin.webp";
import veticLogo from "./../../logo.webp";
import Instagram from "./../../icon_insta.webp";
import Youtube from "./../../youtube-icon.webp";
import { redirectUrl } from "./../../constants/constants";
import COLORS from "./../../constants/colors";
import HorizontalLine from "./../../component/horizontalLine";

const Map = lazy(() => import("./../../component/map"));

const MobileView = styled("div")(({ theme, margintop }) => ({
  background: "#F5F7FB",
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
    padding: 10,
    fontSize: "10px !important",
    paddingLeft: "20px !important",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: margintop || 500,
    padding: "5%",
  },
}));

const BoxView = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    marginTop: 20,
  },
  [theme.breakpoints.up("sm")]: {
    margin: "20px 0px",
    justifyContent: "left",
  },
}));

const CopyrightView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans, Regular",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 12,
  },
}));

const LinksView = styled(Typography)(({ theme, fontSize, links }) => ({
  fontFamily: "Work Sans, Bold",
  fontSize: fontSize || 19,
  color: "#030303",
  [theme.breakpoints.down("sm")]: {
    fontWeight: links ? "normal" : "bold",
    fontSize: links ? 14 : 12,
  },
}));

const HeadingView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans, Medium",

  // textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    // fontSize: 10,
    fontSize: 32,
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 30,
    textAlign: "left",
  },
}));

const GridItemView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 20,
  },
}));

const SubHeadingView = styled(Typography)(
  ({ theme, fontSize, opacity, margintop }) => ({
    fontFamily: "Work Sans, Light",
    opacity: opacity && opacity,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: fontSize || 16,
      marginTop: margintop || 10,
    },
  })
);

const LineView = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    marginTop: 20,
    marginLeft: "10px",
    marginBottom: 20,
  },
  [theme.breakpoints.up("sm")]: {
    margin: "30px 0px",
  },
}));

const GridView = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

// const LineView = styled("div")(({ theme }) => ({
// justify-content: center;
// }

const socialIcons = () => {
  return (
    <BoxView>
      <span>
        <a
          href="https://www.linkedin.com/company/veticin"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={LinkedIn}
            alt="linkedin"
            style={{ width: 27, height: 27 }}
          />
        </a>
      </span>
      <span>
        <a
          href="https://www.facebook.com/Vetic-104753575610805"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={FB_IMAGE}
            alt="facebook"
            style={{ width: 27, height: 27, marginLeft: 12 }}
          />{" "}
        </a>
      </span>
      <span>
        <a
          href="https://www.youtube.com/channel/UCLtC83UXFX9_HZbBp6yeGtA"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Youtube}
            alt="youtube"
            style={{ width: 27, height: 27, marginLeft: 12 }}
          />{" "}
        </a>
      </span>
      <a
        href="https://instagram.com/vetic.in?igshid=YmMyMTA2M2Y="
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <img
            src={Instagram}
            alt="instagram"
            style={{ width: 27, height: 27, marginLeft: 12 }}
          />
        </span>{" "}
      </a>
    </BoxView>
  );
};

const Footer = ({ margintop }) => {
  return (
    <MobileView margintop={margintop}>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={4}>
          <HeadingView color={COLORS.DARK_BLUE}>Join us</HeadingView>
          <SubHeadingView opacity=".6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
            posuere at.
          </SubHeadingView>
          {socialIcons()}
        </Grid>
        <GridItemView item xs={12} sm={4}>
          <HeadingView color={COLORS.DARK_BLUE} fontSize="30px">
            Address
          </HeadingView>
          <SubHeadingView opacity=".6">
            4th Floor, India Accelerator, Bptp Centra One,
          </SubHeadingView>
          <SubHeadingView opacity=".6" margintop="-5px">
            Sector-61, Gurgaon
          </SubHeadingView>
          <SubHeadingView fontSize="20px">+1 (234) 567-89-90</SubHeadingView>
          <SubHeadingView opacity=".6">info@collector.com</SubHeadingView>
        </GridItemView>
        <GridItemView
          item
          xs={12}
          sm={4}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="column"
        >
          <Suspense fallback={<div />}>
            <Map />
          </Suspense>
        </GridItemView>
      </Grid>
      <LineView>
        <HorizontalLine
          color="#5E7FB159"
          laptopwidth="95% !important"
          mobilemarginleft="10px"
        />
      </LineView>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grid container>
              <Grid item xs={12} sm={3} md={2} lg={2}>
                {redirectUrl(
                  <LinksView links="true">About us</LinksView>,
                  "/about-us",
                  true
                )}
              </Grid>
              <Grid item xs={12} sm={3} md={2} lg={2}>
                {redirectUrl(
                  <LinksView links="true">Careers</LinksView>,
                  "https://www.linkedin.com/company/veticin"
                )}
              </Grid>
            </Grid>
          </Grid>
          <GridView item xs={12} sm={6}>
            <LinksView fontSize="16px">
              © 2014 - 2019 Vetic pet care | All rights reserved
            </LinksView>
          </GridView>
        </Grid>
      </div>
    </MobileView>
  );
};

export default Footer;
