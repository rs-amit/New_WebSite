import React from "react";
import Headings from "../../component/headings";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Box } from "@mui/material";
import googlePlayBtn from "../../play Store.webp";
import iosBtn from "../../app Store.webp";
import Toast from "../../component/toast";
import Fade from "@mui/material/Fade";

const HeadingView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 30,
    letterSpacing: 1,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "35px !important",
    letterSpacing: 1,
  },
}));

const ButtonsView = styled("div")(({ theme }) => ({
  fontFamily: "Work Sans",
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
    marginBottom: 40,
    marginTop: 30,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 30,
    letterSpacing: 1,
    marginTop: 40,
  },
}));

const QuestionMobileView = styled("div")(({ theme }) => ({
  background: "#F6FCFC",
  fontFamily: "Work Sans",
  [theme.breakpoints.down("sm")]: {
    padding: "0px 0px 0px 10px",
    fontSize: "10px !important",
    width: "100%",
    minHeight: 290,
  },
  [theme.breakpoints.between("xs", "sm")]: {
    width: "97%",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "5%",
    marginBottom: 40,
  },
}));

const ButtonView = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 135,
    height: 63,
  },
  [theme.breakpoints.up("sm")]: {
    width: 200,
    height: 63,
  },
}));

const GridFirstItemView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0px !important",
  },
}));

const ButtonsGridView = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingTop: "30px !important",
    paddingLeft: "50px !important",
  },
}));

function ConnectWithUs() {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const subHeading = "Stay updated as your security needs to be.";

  const handleToast = (value) => {
    setState({
      ...state,
      open: value,
    });
  };

  return (
    <>
      <Toast
        state={state}
        handleClosee={() => handleToast(false)}
        message="Coming soon..."
      />
      <QuestionMobileView style={{ marginTop: 5 }}>
        <Box
          sx={{
            display: { xs: "flex", sm: "none", md: "none" },
            width: "100%",
          }}
        >
          <Grid container spacing={2}>
            <GridFirstItemView item xs={12} sm={6} md={6}>
              {["Download our App to stay", "connected with us"].map(
                (heading, id) => {
                  return (
                    <HeadingView
                      component="div"
                      key={heading}
                      style={{
                        display: "block",
                        fontFamily: "Work Sans",
                        color: "rgb(27, 55, 107)",
                        fontWeight: 600,
                        paddingLeft: 28,
                        paddingTop: id === 0 ? 42 : 0,
                      }}
                    >
                      {heading}
                    </HeadingView>
                  );
                }
              )}
              <div style={{ paddingLeft: 28 }}>
                <Headings subHeading={subHeading} />
              </div>
            </GridFirstItemView>
            <Grid
              item
              xs={12}
              md={6}
              style={{ paddingLeft: "20px !important" }}
            >
              <ButtonsGridView
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "rgb(27, 55, 107)",
                  fontWeight: 600,
                  letterSpacing: 1,
                  cursor: "pointer",
                }}
              >
                <span onClick={() => handleToast(true)}>
                  {" "}
                  <ButtonView
                    src={googlePlayBtn}
                    alt="android-image"
                    style={{ marginRight: 0 }}
                  />
                </span>
                <span onClick={() => handleToast(true)}>
                  {" "}
                  <ButtonView src={iosBtn} alt="ios-image" />
                </span>
              </ButtonsGridView>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex", md: "flex" },
            width: "100%",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              {["Download our App to stay", "connected with us"].map(
                (heading) => {
                  return (
                    <HeadingView
                      component="div"
                      key={heading}
                      style={{
                        display: "block",
                        fontFamily: "Work Sans",
                        color: "rgb(27, 55, 107)",
                        fontWeight: 600,
                      }}
                    >
                      {heading}
                    </HeadingView>
                  );
                }
              )}
              <Headings subHeading={subHeading} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ButtonsView
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "rgb(27, 55, 107)",
                  fontWeight: 600,
                  letterSpacing: 1,
                  cursor: "pointer",
                }}
              >
                <span onClick={() => handleToast(true)}>
                  {" "}
                  <ButtonView
                    alt="android"
                    src={googlePlayBtn}
                    style={{ marginRight: 10 }}
                  />
                </span>
                <span onClick={() => handleToast(true)}>
                  {" "}
                  <ButtonView alt="ios" src={iosBtn} style={{}} />
                </span>
              </ButtonsView>
            </Grid>
          </Grid>
        </Box>
      </QuestionMobileView>
    </>
  );
}

export default ConnectWithUs;
