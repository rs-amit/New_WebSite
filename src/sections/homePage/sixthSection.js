import React, { useState } from "react";
import CardWithAvatarComponent from "./cardWithAvatar";
import Headings from "./../../component/headings";
import CustomerProfile1 from "./../../customer_review_1.webp";
import CustomerProfile2 from "./../../customer_review_2.webp";
import CustomerProfile3 from "./../../customer_review_3.webp";
import CarousalCards from "./../../component/carousal";
import { styled } from "@mui/material/styles";
import { Grid, Box, Typography, Button } from "@mui/material";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import COLORS from "./../../constants/colors";
import LeftRightIcons from "./../../component/leftRightIcons";

const MobileView = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: 10,
    fontSize: "10px !important",
    paddingLeft: "20px !important",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "0px 5% 5% 5%",
  },
}));

const GridItemView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0px !important",
  },
}));

const DivView = styled("div")(({ theme }) => ({
  marginTop: 10,
  [theme.breakpoints.down("sm")]: {},
}));

const SubHeadingView = styled(Typography)(
  ({ theme, fontWeight, display, color, ismargintop }) => ({
    fontFamily: "Work Sans",
    color: color || "black",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontWeight: fontWeight || "400",
      fontSize: fontWeight === "700" ? "35px" : "30px",
    },
    [theme.breakpoints.up("sm")]: {
      display: display || "block",
      fontWeight: fontWeight || "400",
      fontSize: fontWeight === "700" ? "65px" : "60px",
      marginTop: ismargintop && -30,
    },
  })
);

const MarginView = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 40,
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    marginBottom: 0,
  },
  [theme.breakpoints.up("sm")]: {
    marginBottom: 40,
  },
}));

function SixthSection() {
  const [data, setData] = useState([
    {
      image: CustomerProfile1,
      content: `${"I am extremely happy & satisfied with Vetic. When we got our Golden Pup home, we had a lot of questions as we were new pup parents. Dr. Abhishek Chaudhary answered all our questions and guided us at every step. I strongly recommend Vetic as I found them to be the best."}`,
      imageTitle: "Monika Malhotra",
      imageSubTitle: "15, JUNE 2022",
      subHeading: "Google • Dog Parent",
    },
    {
      image: CustomerProfile2,
      imageTitle: "Animesh Tiwari",
      content:
        "My dog Tiger was extremely sick and it being my first pet, I had no idea how to go about it. A friend suggested Vetic and they  made him feel better within a single day. Tiger and my family loved vetic.",
      imageSubTitle: "15, JUNE 2022",
      subHeading: "Google • Dog Parent",
    },
    {
      image: CustomerProfile3,
      imageTitle: "Vasin Tadavi",
      content:
        "Very good experience here. My pet dog(bushi) was not eating properly for a week so I took him and after treatment bushi is eating properly again. Thanks a lot for the help.",
      imageSubTitle: "15, JUNE 2022",
      subHeading: "Google • Dog Parent",
    },
  ]);

  // const onClick = (val) => {
  //   const newData = [...data];

  //   if (val === "next") {
  //     newData[1] = data[2];
  //     newData[0] = data[1];
  //     newData[data.length - 1] = data[0];
  //     setData(newData);
  //   } else if (val === "back") {
  //     newData[1] = data[0];
  //     newData[0] = data[2];
  //     newData[data.length - 1] = data[1];
  //     setData(newData);
  //   }
  // };

  return (
    <DivView style={{}}>
      <MobileView>
        {/* <Headings mainHeading="Customer Reviews" /> */}
        <MarginView style={{}}>
          <SubHeadingView display="block" component="div">
            Happy{" "}
            <SubHeadingView
              component="span"
              fontWeight="700"
              display="inline"
              color={COLORS.DARK_BLUE}
            >
              Pets
            </SubHeadingView>
          </SubHeadingView>
          <SubHeadingView display="block" ismargintop="true" component="div">
            {" "}
            Happy Pet{" "}
            <SubHeadingView
              component="span"
              fontWeight="700"
              display="inline"
              color={COLORS.DARK_BLUE}
            >
              Parents
            </SubHeadingView>
          </SubHeadingView>
        </MarginView>
        <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
          <Grid
            container
            spacing={1}
            display="flex"
            justifyContent="center"
            style={{ marginTop: 20, paddingLeft: 8, paddingRight: 8 }}
          >
            <GridItemView item xs={12} style={{}}>
              <CarousalCards
                data={data}
                homePage
                laptopcardheight={360}
                borderRadius="50%"
                fontFamily="Work Sans"
                fontStyle="normal"
                dividerNotNeeded={true}
              />
            </GridItemView>
          </Grid>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
          <Grid
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            style={{ marginTop: 20 }}
          >
            {data.map(
              (
                {
                  heading,
                  content,
                  image,
                  imageTitle,
                  imageSubTitle,
                  subHeading,
                },
                id
              ) => {
                return (
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    key={`${heading}_${content}`}
                  >
                    <CardWithAvatarComponent
                      heading={heading}
                      content={content}
                      image={image}
                      imageTitle={imageTitle}
                      imageSubTitle={imageSubTitle}
                      subHeading={subHeading}
                      laptopcardheight={360}
                      borderRadius="50%"
                      fontFamily="Work Sans"
                      fontStyle="normal"
                      dividerNotNeeded={true}
                      // avatarSize="100px"
                      //   laptopmargintop={(id === 0 || id === 2) && "40px"}
                    />
                  </Grid>
                );
              }
            )}
          </Grid>{" "}
        </Box>
      </MobileView>
      {/* <LeftRightIcons
        onRightClick={() => onClick("next")}
        onLeftClick={() => onClick("back")}
      /> */}
    </DivView>
  );
}

export default SixthSection;
