import { Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import firstImage from "./../../blog left side .webp";
import firstMobileImage from "./../../blog image 1 mobile.webp";
import BlackDog from "./../../blog image 3 laptop.webp";
import mobileDogImage from "./../../blog image 3 mobile.webp";
import mobileCatImage from "./../../blog image 2 mobile.webp";
import Cat from "./../../blog image 2 laptop (1).webp";
import { SubTextHomePage } from "../../constants/constants";
import BlurredComp from "../../component/blurredComponent";
import ButtonComponent from "../../component/button";

const View = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.up("sm")]: {
    marginTop: 30,
    marginLeft: 80,
    marginRight: 80,
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "660px",
  height: "584px",
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "660px",
    objectFit: "cover",
  },
}));

const TypographyView = styled(Typography)(({ theme }) => ({
  color: "#013773",
  fontFamily: "Work Sans",
  fontWeight: "500",
  [theme.breakpoints.down("sm")]: {
    fontSize: 32,
    marginBottom: 20,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 60,
    marginBottom: 40,
  },
}));

const leftSection = () => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={6} sm={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={BlackDog}
            width="398px"
            height="260px"
            style={{ borderRadius: 10, marginBottom: 60 }}
            alt="black-dog"
          />
          <img
            src={Cat}
            width="398px"
            height="260px"
            style={{ borderRadius: 10 }}
            alt="cat"
          />
        </div>
      </Grid>
      <Grid item xs={6} sm={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          {[1, 2].map((value, id) => {
            return (
              <div style={{ height: 320 }} key={`${value}_${id}`}>
                <Typography fontSize="16px" fontWeight="300" component="div">
                  Content
                </Typography>
                {SubTextHomePage(`Header style Collector`)}
                <Typography
                  component="div"
                  fontSize="20px"
                  style={{ height: 180, marginBottom: 60 }}
                  fontFamily="Work Sans"
                  fontWeight="400"
                >
                  Content
                </Typography>
              </div>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

const leftSectionMobileView = () => {
  return (
    <Grid
      container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-140px",
        marginLeft: 16,
        marginRight: 16,
      }}
    >
      <Grid item xs={6} style={{ padding: 0, paddingRight: 8 }}>
        <img
          src={mobileDogImage}
          width="100%"
          height="100%"
          style={{ borderRadius: 4 }}
          alt="dog"
        />
        <div style={{ height: 90 }}>
          <Typography fontSize="10px" fontWeight="300" component="div">
            Content
          </Typography>
          {SubTextHomePage(`Header`, "20px")}
          <Typography
            fontSize="12px"
            fontWeight="300"
            color="#7F7F7F"
            component="div"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing
            elit.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={6} style={{ padding: 0, paddingLeft: 8 }}>
        <img
          src={mobileCatImage}
          width="100%"
          height="100%"
          style={{ borderRadius: 4 }}
          alt="cat"
        />
        <div style={{ height: 90 }}>
          <Typography fontSize="12px" fontWeight="300" component="div">
            Content
          </Typography>
          {SubTextHomePage(`Header`, "20px")}
          <Typography
            fontSize="12px"
            fontWeight="300"
            color="#7F7F7F"
            component="div"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing
            elit.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

const rightSection = () => {
  return (
    <Grid container>
      <Grid item sm={6} md={6}>
        <Image
          src={firstImage}
          style={{ borderRadius: 10, position: "relative" }}
          alt="image"
        />
        <BlurredComp
          children={
            <div style={{ padding: "18px 0px 0px 18px" }}>
              <Typography
                size="32px"
                color="#fff"
                fontSize="20px"
                fontWeight="700"
                component="div"
              >
                Header style Collector for your Blog
              </Typography>
              <Typography
                size="32px"
                color="#fff"
                fontSize="14px"
                fontWeight="500"
                component="div"
              >
                26 October 2022
              </Typography>
              <div
                style={{
                  backgroundColor: "#fff",
                  height: 2,
                  width: 150,
                  marginTop: 10,
                }}
              />
              <ButtonComponent
                heading="Read More"
                width="130px"
                fontSize="16px"
                height="40px"
                margintop="10px"
              />
            </div>
          }
          margintop="-184px"
          mobileviewheight="584px"
          margintopmobile="-587px"
          borderradius="0px 12px"
        />
      </Grid>
    </Grid>
  );
};

const rightSectionMobileView = () => {
  return (
    <div style={{ marginLeft: 16, marginRight: 16 }}>
      <img
        src={firstMobileImage}
        width="100%"
        // height="290px"
        // height="100%"
        style={{
          borderRadius: 10,
          position: "relative",
          objectFit: "cover",
          height: "272px",
        }}
        alt="img"
      />
      <BlurredComp
        children={
          <div
            style={{
              padding: "50px 0px 0px 0px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="div"
              size="32px"
              color="#fff"
              fontSize="20px"
              // fontWeight="700"
              textAlign="center"
              letterSpacing="-1px"
              style={{ width: 112, letterSpacing: -1, lineHeight: "22px" }}
            >
              Header style Collector for your Blog
            </Typography>
            <Typography
              component="div"
              size="32px"
              color="#fff"
              fontSize="14px"
              fontWeight="500"
              textAlign="center"
              letterSpacing="0px"
              style={{ lineHeight: "40px" }}
            >
              26 October 2022
            </Typography>
            <div
              style={{
                backgroundColor: "#fff",
                height: 2,
                width: "80%",
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <ButtonComponent
              heading="Read More"
              width="130px"
              fontSize="16px"
              height="40px"
              homepage={"true"}
            />
          </div>
        }
        marginTop="-184px"
        mobileviewheight="272px"
        margintopmobile="-278px"
        mobileviewwidth="45%"
        borderradius="10px"

        // mobilemarginleft="15px"
      />
    </div>
  );
};

const BlogSection = () => {
  return (
    <View>
      {" "}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TypographyView component="div">Blog</TypographyView>
      </div>
      <Grid container spacing={20}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
            {rightSectionMobileView()}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
            {rightSection()}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: { xs: "flex", sm: "none", md: "none" },
            }}
          >
            {leftSectionMobileView()}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
            <div style={{ marginLeft: 40 }}>{leftSection()}</div>
          </Box>
        </Grid>
      </Grid>
    </View>
  );
};

export default BlogSection;
