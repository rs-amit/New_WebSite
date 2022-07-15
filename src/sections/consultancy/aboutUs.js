import React from "react";
import TarunImage1 from "../../tarun.webp";
import Teams_Image2 from "../../R.webp";
import Teams_Image3 from "../../dron.webp";
import Teams_Image4 from "../../gaurav.webp";
import Teams_Image5 from "../../kundan.webp";
import CardComponent from "../../component/card";
import { Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Headings from "../../component/headings";
import TopBannerImage from "./topBannerImage";
import SixthSection from "./sixthSection";
import Footer from "./footer";
import "../../App.css";

const FooterView = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginLeft: "16px !important",
  },
}));

const AboutUsView = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    margin: "0px 80px",
    marginBottom: 44,
    marginTop: 89,
  },
}));

const PaperView = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    margin: "19px 0px 50px 0px",
  },
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 194,
  },
  [theme.breakpoints.up("sm")]: {
    padding: "38px 73px",
  },
}));

const HeadingView = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: 20,
    marginRight: 20,
  },
}));

const TeamSectionView = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: 20,
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: 51,
  },
}));

function AboutUs({ setScroll, isScroll }) {
  const teamSection = () => {
    const teamsProfile1 = [
      {
        heading: "Jake Ryan",
        content:
          "Consectetur adipiscing elit, sed doconsectetur adipiscing elit, sed do",
        image: TarunImage1,
      },
      {
        heading: "Cara Lansen",
        content:
          "Consectetur adipiscing elit, sed doconsectetur adipiscing elit, sed do",
        image: Teams_Image2,
      },
      {
        heading: "Cara Lansen",
        content:
          "Consectetur adipiscing elit, sed doconsectetur adipiscing elit, sed do",
        image: Teams_Image3,
      },
    ];

    const teamsProfile2 = [
      {
        heading: "Cara Lansen",
        content:
          "Consectetur adipiscing elit, sed doconsectetur adipiscing elit, sed do",
        image: Teams_Image4,
      },
      {
        heading: "Cara Lansen",
        content:
          "Consectetur adipiscing elit, sed doconsectetur adipiscing elit, sed do",
        image: Teams_Image5,
      },
    ];

    return (
      <>
        <TeamSectionView>
          <Headings
            mainHeading="Teams"
            subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
          />
        </TeamSectionView>
        <Grid
          container
          spacing={4}
          display="flex"
          justifyContent="space-evenly"
          style={{ marginLeft: -35 }}
        >
          {teamsProfile1.map(({ heading, content, image }, id) => {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                key={`${heading}_${content}`}
                style={{ paddingLeft: 0 }}
              >
                <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
                  <CardComponent
                    heading={heading}
                    content={content}
                    image={image}
                    cardmediawidth="381px !important"
                    cardmediaheight="100% !important"
                    mediaContent="30px"
                    mediamargintop="38px"
                    contentMainHeadingFont="16px"
                    cardcontentwidth="381px !important"
                    isaboutuspage={true}
                  />
                </Box>
                <Box
                  sx={{
                    display: { xs: "flex", sm: "none", md: "none" },
                    marginTop: 4,
                  }}
                >
                  <CardComponent
                    heading={heading}
                    content={content}
                    image={image}
                    paddingleft={0}
                    isaboutuspage={true}
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Grid
          container
          spacing={4}
          display="flex"
          justifyContent="flex-start"
          style={{ marginLeft: -35 }}
        >
          {teamsProfile2.map(({ heading, content, image }, id) => {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={4}
                key={`${heading}_${content}`}
                style={{ paddingLeft: 0 }}
              >
                <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
                  <CardComponent
                    heading={heading}
                    content={content}
                    image={image}
                    cardmediawidth="381px !important"
                    cardmediaheight="100% !important"
                    mediaContent="30px"
                    mediamargintop="38px"
                    contentMainHeadingFont="16px"
                    cardcontentwidth="381px !important"
                    isaboutuspage={true}
                  />
                </Box>
                <Box
                  sx={{
                    display: { xs: "flex", sm: "none", md: "none" },
                    marginTop: 4,
                  }}
                >
                  <CardComponent
                    heading={heading}
                    content={content}
                    image={image}
                    paddingleft={0}
                    isaboutuspage={true}
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  };

  return (
    <>
      <TopBannerImage
        aboutUsPage={true}
        laptopbannerimgheight={518}
        mobilebannerimgheight={212}
        isaboutuspage={true}
      />
      <AboutUsView>
        <HeadingView style={{ height: 140 }}>
          <Headings
            mainHeading="About us"
            subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Quis commodo odio aenean sed adipiscing. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Ultrices tincidunt arcu non sodales. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Purus in massa tempor nec feugiat."
          />
        </HeadingView>
        <PaperView elevation={2} style={{}}>
          <GridContainer container style={{}}>
            <Grid item xs={12} sm={6} style={{ padding: 20 }}>
              <Headings
                mainHeading="Wellness"
                subHeading="Reach out for all your pet related concern, from nutrition and supplements to emergency Guidance."
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ padding: 20 }}>
              <Headings
                mainHeading="Wellness"
                subHeading="Reach out for all your pet related concern, from nutrition and supplements to emergency Guidance."
              />
            </Grid>
          </GridContainer>
        </PaperView>
        <HeadingView style={{ paddingBottom: 20, marginTop: 15 }}>
          <Headings subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Quis commodo odio aenean sed adipiscing. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Ultrices tincidunt arcu non sodales. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Purus in massa tempor nec feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit. Quis commodo odio aenean sed adipiscing. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Ultrices tincidunt arcu non sodales. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor." />
        </HeadingView>
        {teamSection()}
      </AboutUsView>
      <FooterView>
        <SixthSection marginLeft="0px" laptopmarginleft="70px" />
      </FooterView>
      <Footer />
    </>
  );
}

export default AboutUs;
