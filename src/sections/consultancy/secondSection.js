import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Headings from "../../component/headings";
import { Grid, Box, Typography, Paper, TextField, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import GreyBoy from "../../Expert Vet.webp";
import GreyHospital from "../../hospital.webp";
import GreyCat from "../../happy pets.webp";
import PawImage from "../../PawBackground.webp";
import DoctorImg from "../../doctor_on_success.webp";
import DoctorMobileImage from "../../doctor_mobile.webp";

const useStyles = makeStyles(() => ({
  input: {
    "@media (max-width: 425px)": {
      height: "10px !important",
    },
  },
  subSection: {
    "@media (max-width: 768px)": {
      marginTop: 20,
    },
  },
}));

const GridButtonView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginTop: 5,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 25,
  },
  "@media (max-width: 599px)": {
    marginTop: 30,
  },
}));

const BoxView = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: -84,
  },
  [theme.breakpoints.up("md")]: {
    marginTop: -90,
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginTop: 0,
  },
}));

const MobileView = styled("div")(({ theme }) => ({
  [theme.breakpoints.only("xs")]: {
    padding: "5%",
  },
  [theme.breakpoints.only("sm")]: {
    padding: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px !important",
    padding: 0,
  },
  [theme.breakpoints.between("xs", "sm")]: {
    padding: "5%",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "5%",
  },
}));

const TypographyView = styled(Typography)(({ theme }) => ({
  fontSize: "25px !important",
  fontFamily: "Work Sans",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px !important",
    color: "#ffffff",
    paddingTop: 8,
    letterSpacing: 1,
    paddingLeft: 20,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "25px !important",
    color: "#1b376b",
    fontWeight: "bold",
  },
}));

const SubHeadingView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px !important",
    color: "#ffffff",
    paddingLeft: 20,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "20px !important",
    color: "#55bed4",
  },
}));

const DivView = styled("div")(({ theme }) => ({
  fontFamily: "Work Sans",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    top: "62px!important",
    right: "0px",
  },
  [theme.breakpoints.between("xs", "sm")]: {
    position: "absolute",
    top: 251,
    width: 440,
  },
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    top: 135,
    right: 30,
    width: 440,
  },
}));

const TextFieldView = styled(TextField)(({ theme }) => ({
  fontFamily: "Work Sans",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 16,
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
}));

const GridView = styled(Grid)(({ theme }) => ({
  fontFamily: "Work Sans",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "rgb(27, 55, 107)",
    height: 65,
    padding: "0px 5px 0px 5px",
    marginTop: -20,
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
}));

const QuestionMobileView = styled("div")(({ theme }) => ({
  fontFamily: "Work Sans",
  backgroundColor: "#F7F7F7",
  [theme.breakpoints.down("sm")]: {
    padding: 10,
    fontSize: "10px !important",
    paddingLeft: 16,
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "5% 0px 5% 5%",
  },
  [theme.breakpoints.up("md")]: {
    padding: "5% 0px 5% 5%",
    height: 150,
  },
  [theme.breakpoints.between("md", "lg")]: {
    padding: "5% 0px 5% 5%",
    height: "248px !important",
  },
}));

const ImageView = styled("img")(({ theme }) => ({
  width: 50,
  height: 50,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const PaperView = styled(Paper)(({ theme }) => ({
  height: 300,
  boxShadow: "0px 0px 40px #00000014",
  borderRadius: 20,
  [theme.breakpoints.down("sm")]: {
    boxShadow: "none",
    height: 240,
    borderRadius: 0,
  },
  "@media (max-width: 599px)": {
    height: "270px !important",
  },
  [theme.breakpoints.up("md")]: {
    height: 322,
  },
}));

const SmallScreenView = styled(Box)(({ theme }) => ({
  "@media (min-width: 393px) and (max-width: 896px)": {
    marginTop: "55px !important",
  },
}));

const TextMobileView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0px !important",
    marginTop: 13,
  },
  [theme.breakpoints.up("sm")]: {
    // marginTop: 10,
  },
}));

const TextMobilePhoneView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0px !important",
    marginTop: 33,
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: -10,
  },
}));

const ErrorTextView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 30,
    marginBottom: -40,
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: -8,
  },
}));

const ErrorNameTextView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 2,
    marginBottom: -30,
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: -25,
  },
}));

const PawImageView = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.between("sm", "md")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    width: 220,
    height: 260,
    marginTop: -54,
  },
}));

const ThankYouSubText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans, Regular",
  letterSpacing: 1,
  marginTop: 20,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 20,
  },
}));

const GridItemView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px !important",
    paddingTop: "34px !important",
  },
}));

const successfullMsg =
  "We`ve received your consultation request! You should be receiving a call from us within 15 minutes.";

function SecondSection() {
  const classes = useStyles();
  const [values, setValues] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState({ fullname: null, phoneNumber: null });

  useEffect(() => {}, [isSubmitted, showError]);

  const handleInputValue = (event) => {
    const { name, value } = event.target;
    if (showError) {
      setShowError(false);
    }

    if (name === "fullname") {
      const reg = /^[a-zA-Z ]{2,30}$/;

      setError({
        ...error,
        [name]: !reg.test(value),
        phoneNumber: !values.phoneNumber,
      });
    }
    if (name === "phoneNumber") {
      const phoneReg = /^(\+91|\+91\-|0)?[6789]\d{9}$/;

      setError({
        ...error,
        [name]: !phoneReg.test(value),
        fullname: !values.fullname,
      });
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  const veticConsultations = () => {
    return (
      <MobileView>
        <Grid container>
          <Box component="button" sx={{ display: { xs: "none" } }}>
            <Headings mainHeading="No. 1 choice for online vet consultations" />
          </Box>
        </Grid>
        <GridView container>
          <Grid item xs={12} sm={12} md={8}>
            <Grid container>
              <Grid item md={3} xs={4} sm={4}>
                <ImageView alt="hospital" src={GreyHospital} />
                <TypographyView component="div" fontWeight="bold">
                  3000+
                </TypographyView>
                <SubHeadingView component="div" color="#55bed4">
                  Consultations
                </SubHeadingView>
              </Grid>
              <Grid item md={3} xs={4} sm={4}>
                <ImageView alt="cat" src={GreyCat} />
                <TypographyView component="div" fontWeight="bold">
                  2000+
                </TypographyView>
                <SubHeadingView component="div" color="#55bed4">
                  Happy Pets
                </SubHeadingView>
              </Grid>
              <Grid item md={5} xs={4} sm={4}>
                <ImageView alt="boy" src={GreyBoy} />
                <TypographyView component="div" fontWeight="bold">
                  10+
                </TypographyView>
                <SubHeadingView component="div" color="#55bed4">
                  Expert vets
                </SubHeadingView>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={4} />
        </GridView>
      </MobileView>
    );
  };

  const noQuestionBigorSmall = () => {
    return (
      <QuestionMobileView className={classes.subSection}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Headings
              mainHeading="Make vet approved decisions everyday"
              subHeading="Take better care of your pet and skip the costs and waits associated with in-person care. Talk to our vet team 24/7 for urgent care, personalised treatment, product recommendations and so much more."
              subHeadingSize="12px"
            />
            <div></div>
          </Grid>
          <Grid item md={2} lg={2}>
            <PawImageView alt="paw_image" src={PawImage} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            style={{ display: "none" }}
          />
        </Grid>
      </QuestionMobileView>
    );
  };

  const noQuestionBigorSmallMobileView = () => {
    return (
      <QuestionMobileView className={classes.subSection}>
        <Grid container spacing={2}>
          <GridItemView item xs={12} sm={12} md={6} lg={6}>
            <Headings
              mainHeading="Make vet approved decisions everyday"
              subHeading="Take better care of your pet and skip the costs and waits associated with in-person care. Talk to our vet team 24/7 for urgent care, personalised treatment, product recommendations and so much more."
              subHeadingSize="12px"
            />
          </GridItemView>
          <Grid item md={2} lg={2}>
            <PawImageView src={PawImage} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            style={{ display: "none" }}
          />
        </Grid>
      </QuestionMobileView>
    );
  };

  const onsubmit = async () => {
    if (error.phoneNumber || error.fullname) {
      setShowError((prevState) => true);
      return;
    }

    await axios
      .post(
        "https://api.vetic.in/lead/create",
        {
          name: values.fullname,
          mobile: values.phoneNumber,
          country_code: "+91",
          utm_source: "abc",
          utm_campaign: "abc",
          type: "CONSULTATION",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        }
      )
      .then(() => {
        setShowError(false);
        setIsSubmitted((prevState) => !prevState);
      });
  };

  const thankyouMessage = () => {
    return (
      <>
        <div>
          <Typography
            component="div"
            color="#55bed4"
            fontSize={24}
            fontFamily="Work Sans, Bold"
            fontWeight="bold"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Thank You!
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
              <img
                src={DoctorMobileImage}
                alt="doctor-laptop-view"
                width="89px"
                height="108px"
              />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
              <img
                src={DoctorImg}
                alt="doctor-mobile-view"
                width="112px"
                height="135px"
              />
            </Box>
          </div>
          <ThankYouSubText color="#595f6f">{successfullMsg}</ThankYouSubText>
        </div>
      </>
    );
  };

  const FormComponent = () => {
    return (
      <div style={{ padding: 20 }}>
        {isSubmitted ? (
          thankyouMessage()
        ) : (
          <>
            {" "}
            <Typography
              component="div"
              fontFamily="Work Sans"
              fontSize="20px"
              style={{ color: "rgb(27, 55, 107)", fontWeight: "bold" }}
            >
              Book Your Consultation.
            </Typography>
            <Grid container spacing={2}>
              <TextMobileView item xs={12} md={12}>
                <TextFieldView
                  margin="normal"
                  required
                  value={values.fullname}
                  id="fullname"
                  label="Name"
                  name="fullname"
                  type="text"
                  onChange={handleInputValue}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  inputProps={{
                    className: classes.input,
                  }}
                />
              </TextMobileView>
              {showError && error.fullname && (
                <ErrorNameTextView
                  item
                  xs={12}
                  display="flex"
                  justifyContent="left"
                >
                  <Typography component="div" color="red" fontSize={8}>
                    {"Incorrect Name Format"}
                  </Typography>{" "}
                </ErrorNameTextView>
              )}
              <TextMobilePhoneView item xs={12} md={12}>
                <TextFieldView
                  margin="normal"
                  required
                  value={values.phoneNumber}
                  id="phoneNumber"
                  label="Phone Number"
                  type="number"
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                  inputProps={{
                    className: classes.input,
                  }}
                  name="phoneNumber"
                  onChange={handleInputValue}
                />
                {showError && error.phoneNumber && (
                  <ErrorTextView
                    item
                    xs={12}
                    display="flex"
                    justifyContent="left"
                  >
                    <Typography component="div" color="red" fontSize={8}>
                      {"Incorrect Phone Format"}
                    </Typography>{" "}
                  </ErrorTextView>
                )}
              </TextMobilePhoneView>
            </Grid>
            <GridButtonView container spacing={2}>
              <Grid item xs={12} md={12}>
                <Button
                  style={{
                    borderRadius: 8,
                    backgroundColor: "rgb(27, 55, 107)",
                    width: "100%",
                    fontWeight: "bold",
                    fontSize: "18px",
                    height: "44px",
                    textTransform: "none",
                  }}
                  variant="contained"
                  onClick={() => onsubmit()}
                >
                  Book Now
                </Button>
              </Grid>
            </GridButtonView>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <div
        style={{ position: "relative", backgroundColor: "#FFF" }}
        id="consultation_form"
      >
        <BoxView>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              {veticConsultations()}
              <DivView>
                <PaperView>{FormComponent()}</PaperView>
              </DivView>
              {noQuestionBigorSmall()}
            </Grid>
          </Grid>
          <SmallScreenView
            sx={{ display: { xs: "flex", sm: "none", md: "none" } }}
          >
            {noQuestionBigorSmallMobileView()}
          </SmallScreenView>
        </BoxView>
      </div>
    </>
  );
}

export default SecondSection;
