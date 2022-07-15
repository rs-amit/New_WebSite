import { Grid, Typography, Box } from "@mui/material";
import Headings from "../../component/headings";
import { styled } from "@mui/material/styles";
import FB_IMAGE from "../../icon_fb.webp";
import LinkedIn from "../../icon_linkedin.webp";
import veticLogo from "../../logo.webp";
import Instagram from "../../icon_insta.webp";
import Youtube from "../../youtube-icon.webp";
import { redirectUrl } from "../../constants/constants";

const MobileView = styled("div")(({ theme }) => ({
  backgroundColor: "#FFF",
  [theme.breakpoints.down("sm")]: {
    marginTop: 220,
    padding: 10,
    fontSize: "10px !important",
    paddingLeft: "20px !important",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: 500,
    padding: "5%",
  },
}));

const BoxView = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "left",
    marginTop: 20,
  },
  [theme.breakpoints.up("sm")]: {
    justifyContent: "right",
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

const TopicsView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans, Bold",
  fontSize: 16,
  fontWeight: "bold",
  color: "rgb(27, 55, 107)",
}));

const Footer = () => {
  return (
    <MobileView>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img
            src={veticLogo}
            alt="vetic-logo"
            style={{ width: 102, height: 37, marginBottom: 20 }}
          />
          <Headings subHeading="4th Floor, India Accelerator, Bptp Centra One," />
          <Headings subHeading=" Sector-61, Gurgaon" />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        </Grid>
      </Grid>
      <Grid container spacing={0} style={{ marginTop: "30px" }}>
        <Grid item xs={12} sm={2} md={1} lg={1}>
          {redirectUrl(
            <TopicsView component="div">About us</TopicsView>,
            "/about-us",
            true
          )}
        </Grid>
        <Grid item xs={12} sm={2} md={1} lg={1}>
          {redirectUrl(
            <TopicsView component="div">Careers</TopicsView>,
            "https://www.linkedin.com/company/veticin"
          )}
        </Grid>{" "}
        <Grid item xs={12} sm={7} />
      </Grid>
      <Grid container style={{ marginTop: "50px" }}>
        <Grid item xs={12} sm={12} display="flex" justifyContent="center">
          <CopyrightView color="#595f6f" component="div">
            © 2014 - 2019 Vetic pet care | All rights reserved | Terms &
            Conditions | Privacy Policy All trademarks are property of their
            respective owners
          </CopyrightView>
        </Grid>
      </Grid>
    </MobileView>
  );
};

export default Footer;
