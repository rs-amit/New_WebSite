import CareerImageMobile from "../../career_mobile.webp";
import CareerImageLaptop from "../../career_laptop.webp";
import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MobileView = styled("div")(({ theme }) => ({
  backgroundColor: "#FFF",
  background: "#FFF",
}));

const ImageView = styled("img")(({ theme, laptopmarginleft }) => ({
  [theme.breakpoints.down("sm")]: {
    height: 179,
    marginTop: 40,
    width: laptopmarginleft ? "calc(100% - 145px)" : "calc(100% - 40px)",
    paddingLeft: "20px !important",
    paddingRight: "20px !important",
  },
  [theme.breakpoints.up("sm")]: {
    height: 450,
    marginLeft: laptopmarginleft || "5%",
  },
}));

const DivView = styled("div")(({ theme }) => ({
  fontFamily: "Work Sans",
  position: "absolute",
  padding: "0px 40px",
  textShadow: "0 0 black !important",
  [theme.breakpoints.down("sm")]: {
    top: 82,
    left: -12,
  },
  [theme.breakpoints.up("sm")]: {
    top: 300,
    padding: "0px 110px !important",
  },
}));

const HeadingView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 25,
  },
}));

const ButtonTextView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 20,
  },
}));

// const ButtonTextView = styled()(({ theme }) => ({

// }))

const SixthSection = (props) => {
  const { width, laptopmarginleft } = props;
  const onCareerBtnClick = () => {
    window.open("https://www.linkedin.com/company/veticin");
  };

  return (
    <MobileView style={{ position: "relative" }}>
      <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
        <ImageView
          alt="business-women"
          src={CareerImageMobile}
          style={{
            width: width || "90%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
          }}
          laptopmarginleft={laptopmarginleft}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
        }}
      >
        <ImageView
          alt="business-women"
          src={CareerImageLaptop}
          style={{
            width: width || "90%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
          }}
          laptopmarginleft={laptopmarginleft}
        />
      </Box>

      <DivView>
        <HeadingView fontWeight="bold" color="#FFFFFF" fontSize="25px">
          Career
        </HeadingView>
        <ButtonTextView color="#FFFFFF">Come work with us.</ButtonTextView>
        <Button
          variant="outlined"
          style={{
            borderRadius: "23px",
            color: "#FFF",
            border: "1px solid #FFF",
            marginTop: 20,
          }}
        >
          <ButtonTextView onClick={() => onCareerBtnClick()}>
            Start Here
          </ButtonTextView>
        </Button>
      </DivView>
    </MobileView>
  );
};

export default SixthSection;
