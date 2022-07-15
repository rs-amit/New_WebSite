import { Grid, Box } from "@mui/material";
import firstImage from "../../guidance_dog3.webp";
import firstImageMobile from "../../guidance_dog1_mobile.webp";
import secondImageMobile from "../../guidance_dog2_mobile.webp";
import thirdImageMobile from "../../guidance_dog3_mobile.webp";
import forthImageMobile from "../../guidance_cat_mobile.webp";
import secondImage from "../../guidance_cat.webp";
import thirdImage from "../../guidance_dog.webp";
import forthImage from "../../guidance_dog2.webp";
import CardComponent from "../../component/card";
import Headings from "../../component/headings";
import { styled } from "@mui/material/styles";

const BoxView = styled(Box)(({ theme }) => ({
  padding: "5%",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
  },
}));

const Guidance = () => {
  const questions = [
    {
      heading: "Nutrition",
      content:
        "Your companions can’t express their pain and suffering, but you can notice those issues by keeping a regular watch on their health and sportiveness. You should also provide them with regular veterinary care.",
      image: secondImage,
    },
    {
      heading: "Wellness",
      content:
        "You have enough to worry about as a pet parent. Your pet`s health shouldn`t be one of them. Give your fur babies the best possible care and keep them wagging",
      image: forthImage,
    },
    {
      heading: "Illness",
      content:
        "Sometimes, internal injuries or any other sufferings might cause behavioural changes in your pet. If you observe any change in their behaviour, they need a proper evaluation by a veterinarian. Consult our experts and know about your pet’s behaviour.",
      image: thirdImage,
    },
    {
      heading: "Behavioral",
      content:
        "Are you struggling with behaviour issues and problems with your dog or cat that you just don’t know how to handle? An on-line behaviour consultation is exactly what you need to restore harmony to your home.",
      image: firstImage,
    },
  ];

  const guidanceDataMobile = [
    {
      heading: "Nutrition",
      content:
        "Your companions can’t express their pain and suffering, but you can notice those issues by keeping a regular watch on their health and sportiveness. You should also provide them with regular veterinary care.",
      image: firstImageMobile,
    },
    {
      heading: "Wellness",
      content:
        "You have enough to worry about as a pet parent. Your pet`s health shouldn`t be one of them. Give your fur babies the best possible care and keep them wagging",
      image: secondImageMobile,
    },
    {
      heading: "Illness",
      content:
        "Sometimes, internal injuries or any other sufferings might cause behavioural changes in your pet. If you observe any change in their behaviour, they need a proper evaluation by a veterinarian. Consult our experts and know about your pet’s behaviour.",
      image: thirdImageMobile,
    },
    {
      heading: "Behavioral",
      content:
        "Are you struggling with behaviour issues and problems with your dog or cat that you just don’t know how to handle? An on-line behaviour consultation is exactly what you need to restore harmony to your home.",
      image: forthImageMobile,
    },
  ];

  return (
    <div style={{ backgroundColor: "#FFF" }}>
      <BoxView>
        <div style={{ margin: "20px 0px" }}>
          {
            <Headings
              mainHeading="No Question is too big or small"
              subHeading="Reach out for all your pet related concerns, from nutrition to supplements, from guidance to emergency"
              letterSpacing="0px !important"
            />
          }
        </div>
        <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
          <Grid container spacing={2} display="flex" justifyContent="center">
            {guidanceDataMobile.map(({ heading, content, image }) => {
              return (
                <Grid item xs={12} sm={3} md={3} key={`${heading}_${content}`}>
                  <CardComponent
                    heading={heading}
                    content={content}
                    image={image}
                    paddingLeft={0}
                  />
                </Grid>
              );
            })}{" "}
          </Grid>{" "}
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
          <Grid container spacing={2} display="flex" justifyContent="center">
            {questions.map(({ heading, content, image }) => {
              return (
                <Grid item xs={12} sm={3} md={3} key={`${heading}_${content}`}>
                  <CardComponent
                    heading={heading}
                    content={content}
                    image={image}
                    paddingLeft={0}
                  />
                </Grid>
              );
            })}{" "}
          </Grid>
        </Box>
      </BoxView>
    </div>
  );
};

export default Guidance;
