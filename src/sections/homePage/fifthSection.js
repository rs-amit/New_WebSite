import { Grid, Box, Typography } from "@mui/material";
import firstImage from "./../../PAS-1.webp";
import firstMobileImage from "./../../PAS 2 MOBILE (1).webp";
import secondImage from "./../../PAS-3.webp";
import secondMobileImage from "./../../PAS 3 MOBILE (1).webp";
import thirdImage from "./../../PAS-2.webp";
import thirdMobileImage from "./../../PAS 1 MOBILE.webp";
import forthImage from "./../../Artboard 1.webp";
import forthMobileImage from "./../../PAS4 MOBILE (2).webp";
import HomePageCard from "./card";
import BlurredComponent from "./../../component/blurredComponent";
import ButtonComponent from "./../../component/button";
import Headings from "./../../component/headings";
import { styled } from "@mui/material/styles";

const BoxView = styled(Box)(({ theme }) => ({
  padding: "5%",
  paddingTop: "0px !important",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
  },
}));

const TextView = styled(Typography)(({ theme, fontWeight }) => ({
  color: "#013773",
  fontWeight: "bold",
  display: "inline",
  fontWeight: fontWeight,
  letterSpacing: "0px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    lineHeight: "35px",
    width: 150,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "65px", // fontWeight === "700" ? "80px" : "65px",
  },
}));

const DivView = styled("div")(({ theme }) => ({
  margin: "20px 0px",
  marginBottom: 10,
  display: "flex",
  justifyContent: "flex-start",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

// const InnerDivView = styled("div")(({ theme }) => ({
//   [theme.breakpoints.down("sm")]: {
//     width: 204,
//   },
// }));

const Line = styled("div")(({ theme }) => ({
  height: 1,
  backgroundColor: "black",
  width: 350,
  marginRight: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    marginLeft: 25,
    marginTop: 15,
    marginBottom: 10,
  },
}));

const View = styled("div")(({ theme }) => ({
  marginLeft: "auto",
  display: "flex",
  justifyContent: "flex-start",
  marginBottom: 40,
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
    textAlign: "center",
    marginBottom: 20,
  },
}));

const TypographyView = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  opacity: ".5",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    width: "97%",
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    width: 403,
  },
}));

const InnerDivView = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 204,
    textAlign: "center",
    marginTop: "45px",
  },
}));

const MainDivView = styled("div")(({ theme }) => ({
  backgroundColor: "#FFF",
  [theme.breakpoints.down("sm")]: {
    marginTop: 154,
  },
}));

const heading = () => {
  return (
    <>
      <DivView style={{}}>
        <InnerDivView>
          <TextView fontWeight="400" component="div">
            Problems we are{" "}
            <TextView fontWeight="700" component="span">
              Solving
            </TextView>
          </TextView>
          <Line />{" "}
        </InnerDivView>
      </DivView>
      <View style={{}}>
        <TypographyView color="#000000" component="div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
          posuere at dignissim ultrices ut.
        </TypographyView>
      </View>
    </>
  );
};

const rightSectionMobileView = (questions) => {
  return (
    <div style={{ display: "block" }}>
      {questions.map(({ heading, content, image }, id) => {
        return (
          <div
            style={{ borderRadius: 12, marginBottom: 10 }}
            key={`${id}_${content}_${heading}`}
          >
            <img
              src={image}
              width="100%" // "380px"
              height="272px"
              style={{
                borderRadius: 10,
                position: "relative",
                objectFit: "cover",
              }}
            />
            <BlurredComponent
              children={
                <div style={{ padding: "20px 0px 0px 0px" }}>
                  <Typography
                    component="div"
                    size="32px"
                    color="#fff"
                    fontSize="20px"
                    fontWeight="700"
                    textAlign="center"
                    letterSpacing="-1px"
                    style={{ paddingBottom: 10 }}
                  >
                    {heading}
                  </Typography>
                  <Typography
                    component="div"
                    size="32px"
                    color="#fff"
                    fontSize="14px"
                    fontWeight="500"
                    textAlign="center"
                    letterSpacing="0px"
                    style={{ padding: "0px 8px 0px 8px", lineHeight: "18px" }}
                  >
                    {content}
                  </Typography>
                </div>
              }
              margintop="-184px"
              mobileviewheight="272px"
              margintopmobile="-276px"
              mobileviewwidth="45%"
              borderradius="12px"
              right={id % 2 !== 0 ? "20px" : "false"} // check
            />
          </div>
        );
      })}
    </div>
  );
};

const FifthSection = () => {
  const laptopData = [
    {
      heading: "Knowledge Gap",
      content:
        "Your companions can’t express their pain and suffering, but you can notice those issues by keeping a regular watch on their health and sportiveness. You should also provide them with regular veterinary care.",
      image: secondImage,
    },
    {
      heading: "Convenience",
      content:
        "You have enough to worry about as a pet parent. Your pet`s health shouldn`t be one of them. Give your fur babies the best possible care and keep them wagging",
      image: forthImage,
    },
    {
      heading: "Medical and Clinical Infra",
      content:
        "Sometimes, internal injuries or any other sufferings might cause behavioural changes in your pet. If you observe any change in their behaviour, they need a proper evaluation by a veterinarian. Consult our experts and know about your pet’s behaviour.",
      image: thirdImage,
    },
    {
      heading: "Personalization",
      content:
        "Are you struggling with behaviour issues and problems with your dog or cat that you just don’t know how to handle? An on-line behaviour consultation is exactly what you need to restore harmony to your home.",
      image: firstImage,
    },
  ];

  const mobileViewData = [
    {
      heading: "Knowledge Gap",
      content:
        "Your companions can’t express their pain and suffering, but you can notice those issues by keeping a regular watch on their health and sportiveness. You should also provide them with regular veterinary care.",
      image: secondMobileImage,
    },
    {
      heading: "Convenience",
      content:
        "You have enough to worry about as a pet parent. Your pet`s health shouldn`t be one of them. Give your fur babies the best possible care and keep them wagging",
      image: forthMobileImage,
    },
    {
      heading: "Medical and Clinical Infra",
      content:
        "Sometimes, internal injuries or any other sufferings might cause behavioural changes in your pet. If you observe any change in their behaviour, they need a proper evaluation by a veterinarian. Consult our experts and know about your pet’s behaviour.",
      image: thirdMobileImage,
    },
    {
      heading: "Personalization",
      content:
        "Are you struggling with behaviour issues and problems with your dog or cat that you just don’t know how to handle? An on-line behaviour consultation is exactly what you need to restore harmony to your home.",
      image: firstMobileImage,
    },
  ];

  return (
    <MainDivView>
      <BoxView>
        {heading()}
        <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
          <Grid container spacing={2} display="flex" justifyContent="center">
            {laptopData.map(({ heading, content, image }) => {
              return (
                <Grid item xs={12} sm={3} md={3} key={`${heading}_${content}`}>
                  <HomePageCard
                    heading={heading}
                    content={content}
                    image={image}
                    paddingLeft={0}
                    cardcontentmargintop="-220px"
                  />
                </Grid>
              );
            })}{" "}
          </Grid>
        </Box>
        <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
          {rightSectionMobileView(mobileViewData)}
        </Box>
      </BoxView>
    </MainDivView>
  );
};

export default FifthSection;
