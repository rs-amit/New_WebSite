import CardWithAvatarComponent from "../../component/cardWithAvatar";
import Headings from "../../component/headings";
import CustomerProfile1 from "../../customer_reviewgirl1.webp";
import CustomerProfile2 from "../../2.webp";
import CustomerProfile3 from "../../3.webp";
import CarousalCards from "../../component/carousal";
import { styled } from "@mui/material/styles";
import { Grid, Box, Typography } from "@mui/material";

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
}));

const SubHeadingView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  color: "#595f6f",
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 18,
  },
}));

function ForthSection() {
  const questions = [
    {
      image: CustomerProfile1,
      content: `${"I am extremely happy & satisfied with Vetic. When we got our Golden Pup home, we had a lot of questions as we were new pup parents. Dr. Abhishek Chaudhary answered all our questions and guided us at every step. I strongly recommend Vetic as I found them to be the best."}`,
      imageTitle: "Monika Malhotra",
      imageSubTitle: "15, JUNE 2022",
      heading: "Dog Owner",
    },
    {
      image: CustomerProfile2,
      imageTitle: "Animesh Tiwari",
      content:
        "My dog Tiger was extremely sick and it being my first pet, I had no idea how to go about it. A friend suggested Vetic and they  made him feel better within a single day. Tiger and my family loved vetic.",
      imageSubTitle: "15, JUNE 2022",
      heading: "Dog Owner",
    },
    {
      image: CustomerProfile3,
      imageTitle: "Vasin Tadavi",
      content:
        "Very good experience here. My pet dog(bushi) was not eating properly for a week so I took him and after treatment bushi is eating properly again. Thanks a lot for the help.",
      imageSubTitle: "15, JUNE 2022",
      heading: "Dog Owner",
    },
  ];

  return (
    <DivView>
      <MobileView>
        <Headings mainHeading="Customer Reviews" />
        <SubHeadingView component="div">
          Happy Pets, Happy Pet Parents
        </SubHeadingView>
        <Box
          sx={{
            display: { xs: "flex", sm: "none", md: "none" },
            width: "100%",
          }}
        >
          <Grid
            container
            spacing={1}
            display="flex"
            justifyContent="center"
            style={{ marginTop: 20, paddingLeft: 8, paddingRight: 8 }}
          >
            <GridItemView item xs={12}>
              <CarousalCards data={questions} />
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
            {questions.map(
              ({ heading, content, image, imageTitle, imageSubTitle }) => {
                return (
                  <Grid
                    item
                    xs={12}
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
                    />
                  </Grid>
                );
              }
            )}
          </Grid>{" "}
        </Box>
      </MobileView>
    </DivView>
  );
}

export default ForthSection;
