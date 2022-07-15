import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Typography } from "@mui/material";
import HorizontalLine from "../../component/horizontalLine";
import FormComponent from "../../component/form";

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

const BoxView = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    marginTop: "120px !important",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: -116,
  },
  [theme.breakpoints.up("md")]: {
    marginTop: -90,
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginTop: 0,
  },
}));

const QuestionMobileView = styled("div")(({ theme }) => ({
  fontFamily: "Work Sans",
  backgroundColor: "#02C0D8",
  color: "#FFF !important",
  [theme.breakpoints.down("sm")]: {
    height: 400,
    padding: 10,
    fontSize: "10px !important",
    paddingLeft: 16,
    paddingTop: 40,
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "5% 0px 5% 5%",
  },
  [theme.breakpoints.up("md")]: {
    padding: "5% 0px 5% 5%",
    height: 280,
    paddingLeft: "100px !important",
  },
  [theme.breakpoints.between("md", "lg")]: {
    padding: "5% 0px 5% 5%",
    height: "248px !important",
  },
}));

const GridItemView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "10px !important",
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "0px !important",
  },
}));

const HeadingText = styled(Typography)(({ theme, weight, inline }) => ({
  fontFamily: "Work Sans",
  fontWeight: weight || "500",
  [theme.breakpoints.down("sm")]: {
    fontSize: 32,
    lineHeight: weight === "700" ? "44px" : "20px",
    paddingLeft: !inline && 28,
    display: inline && "inline",
  },
  [theme.breakpoints.up("sm")]: {
    lineHeight: "60px",
    fontSize: weight === "700" ? 65 : 65,
  },
}));

const SubHeadingText = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontWeight: "400",
  lineHeight: "24px",
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    paddingLeft: 28,
    paddingRight: 28,
  },
  [theme.breakpoints.up("sm")]: {
    lineHeight: "32px",
    fontSize: 24,
  },
}));

const DivWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#FFF",
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: "-94px !important",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 80,
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: 30,
  },
}));

const LineWrapper = styled("div")(({ theme }) => ({
  margin: "20px 0px",
  [theme.breakpoints.down("sm")]: {
    margin: "10px 0px",
    marginLeft: 80,
  },
}));

function ForthSection() {
  const classes = useStyles();
  const [values, setValues] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState({ fullname: null, phoneNumber: null });

  useEffect(() => {}, [isSubmitted, showError]);

  const content = () => {
    return (
      <QuestionMobileView className={classes.subSection}>
        <Grid container spacing={2}>
          <GridItemView item xs={12} sm={12} md={7} lg={7}>
            <HeadingText component="div">
              Make vet approved decisions
              <HeadingText weight="700" component="span" inline="true">
                {" "}
                everyday
              </HeadingText>
            </HeadingText>

            <LineWrapper>
              <HorizontalLine
                color="#fff"
                laptopwidth="160px"
                mobilemarginleft="5px"
                mobilewidth="200px"
              />
            </LineWrapper>
            <SubHeadingText component="div">
              Take better care of your pet and skip the costs and waits
              associated within-person care. Talk to our vet team24/7 for urgent
              car personalised treatment, product recommendationsand so much
              more.
            </SubHeadingText>
          </GridItemView>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            style={{ display: "none" }}
          />
        </Grid>
      </QuestionMobileView>
    );
  };

  return (
    <DivWrapper id="consultation_form">
      <BoxView>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <FormComponent />
            {content()}
          </Grid>
        </Grid>
      </BoxView>
    </DivWrapper>
  );
}

export default ForthSection;
