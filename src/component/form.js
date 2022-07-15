import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Box, Typography, Paper, TextField, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import DoctorImg from "./../doctor_on_success.webp";
import DoctorMobileImage from "./../doctor_mobile.webp";

const useStyles = makeStyles(() => ({
  input: {
    borderRadius: "5px !important",
    border: "1px solid #1D1D1D !important",
    color: "#343A3F !important",
    fontSize: "20px !important",
    "@media (max-width: 425px)": {
      height: "10px !important",
      fontSize: "12px !important",  
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
    marginTop: 40,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 25,
  },
}));

const TextFieldView = styled(TextField)(({ theme, marginbottom }) => ({
  fontFamily: "Work Sans",
  // border: "1px solid #1D1D1D",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 16,
    marginTop: 9,
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    marginTop: 0,
    marginBottom: marginbottom,
  },
}));

const FormView = styled(Paper)(({ theme }) => ({
  borderRadius: 8,
  [theme.breakpoints.down("sm")]: {
    padding: 20,
  },
  [theme.breakpoints.up("sm")]: {
    padding: 20,
    paddingRight: "5%",
    paddingBottom: "43px",
  },
}));

const PaperView = styled("div")(({ theme }) => ({
  // [theme.breakpoints.down("sm")]: {
  //   // boxShadow: "none",
  // },
}));

const DivView = styled("div")(({ theme }) => ({
  boxShadow: "0px 40px 80px #00000029",
  border: "3px solid #E8E8E8",
  height: 300,
  borderRadius: 12,
  fontFamily: "Work Sans",
  [theme.breakpoints.down("sm")]: {
    width: "90% !important",
    top: "330px !important",
    /// right: "20px",
    height: 240,
  },
  [theme.breakpoints.between("xs", "sm")]: {
    position: "absolute",
    top: 251,
    width: 440,
  },
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    top: 200,
    right: 80,
    width: 440,
  },
  "@media (max-width: 599px)": {
    height: "270px !important",
  },
}));

const TextMobileView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0px !important",
    marginTop: 13,
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

const BookYourConsultationText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
    marginBottom: 21,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "32px",
  },
}));

const ButtonGridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    paddingTop: "0px !important",
  },
}));

const LabelText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
}));

const ButtonWrapper = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 55,
    fontSize: "15px",
  },
  [theme.breakpoints.up("sm")]: {
    width: 347,
    height: "80px",
    fontSize: "25px",
  },
}));

const FormControlWrapper = styled(FormControl)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 72,
  },
  [theme.breakpoints.up("sm")]: {
    width: 90,
  },
}));

const successfullMsg =
  "We`ve received your consultation request! You should be receiving a call from us within 15 minutes.";

function FormComponent() {
  const classes = useStyles();
  const [values, setValues] = useState({ countryCode: "+91" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState({
    fullname: null,
    phoneNumber: null,
  });
  // const [countryCode, setCountryCode] = React.useState("");

  // const handleChange = (event) => {
  //   setCountryCode(event.target.value);
  // };

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
          country_code: values.countryCode,
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

  console.log("values.countryCode", values.countryCode);
  return (
    <DivView>
      <FormView>
        {isSubmitted ? (
          thankyouMessage()
        ) : (
          <>
            {" "}
            <BookYourConsultationText
              component="div"
              fontFamily="Work Sans"
              style={{ color: "rgb(27, 55, 107)", fontWeight: "bold" }}
            >
              Book Your Consultation.
            </BookYourConsultationText>
            <Grid container spacing={2}>
              <TextMobileView item xs={12} md={12}>
                <LabelText component="div" color="#343A3F">
                  Name
                </LabelText>
                <TextFieldView
                  marginbottom="8px !important"
                  margin="normal"
                  required
                  value={values.fullname}
                  id="fullname"
                  name="fullname"
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleInputValue}
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
                  <Typography color="red" fontSize={8}>
                    {"Incorrect Name Format"}
                  </Typography>{" "}
                </ErrorNameTextView>
              )}
              <TextMobilePhoneView item xs={12} md={12}>
                <LabelText component="div" fontSize="16px" color="#343A3F">
                  Phone Number
                </LabelText>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <FormControlWrapper
                      style={{ diplay: "inline" }}
                      size="small"
                    >
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.countryCode}
                        label="+91"
                        onChange={handleInputValue}
                        inputProps={{
                          className: classes.input,
                        }}
                      >
                        <MenuItem value={"+91"}>+91</MenuItem>
                        {/* <MenuItem value={"+91"}>+91</MenuItem> */}
                      </Select>
                    </FormControlWrapper>
                  </Grid>
                  <Grid item xs={9}>
                    <TextFieldView
                      marginbottom="0px !important"
                      margin="normal"
                      required
                      value={values.phoneNumber}
                      id="phoneNumber"
                      type="number"
                      placeholder="Enter your mobile number"
                      inputProps={{
                        className: classes.input,
                      }}
                      name="phoneNumber"
                      onChange={handleInputValue}
                    />
                  </Grid>
                </Grid>

                {showError && error.phoneNumber && (
                  <ErrorTextView
                    item
                    xs={12}
                    display="flex"
                    justifyContent="left"
                  >
                    <Typography color="red" fontSize={8}>
                      {"Incorrect Phone Format"}
                    </Typography>{" "}
                  </ErrorTextView>
                )}
              </TextMobilePhoneView>
            </Grid>
            <GridButtonView container spacing={2}>
              <ButtonGridItem item xs={12} md={12}>
                <ButtonWrapper
                  style={{
                    borderRadius: 8,
                    backgroundColor: "rgb(27, 55, 107)",
                    width: "100%",
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                  variant="contained"
                  onClick={() => onsubmit()}
                >
                  Book Now
                </ButtonWrapper>
              </ButtonGridItem>
            </GridButtonView>
          </>
        )}
      </FormView>
    </DivView>
  );
}

export default FormComponent;
