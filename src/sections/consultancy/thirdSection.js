import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  TextView: {
    "@media (max-width: 425px)": {
      height: "100px !important",
    },
  },
}));

const BoxView = styled("div")(({ theme }) => ({
  [theme.breakpoints.between("xs", "sm")]: {
    marginTop: "136px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "0px !important",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "0px !important",
  },
}));

const TypographyView = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 20,
  },
}));

const HeadingView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontWeight: "bold",
  letterSpacing: 1,
  color: "#ffffff",
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
    // paddingTop: "37px !important",
    // paddingLeft: "20px !important",
    // paddingLeft: "21px !important",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 35,
  },
}));

const GridItemView = styled(Grid)(({ theme }) => ({
  padding: 16,
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "37px !important",
    paddingLeft: "20px !important",
    paddingBottom: "0px !important",
  },
}));

const GridSecondItemView = styled(Grid)(({ theme }) => ({
  padding: 16,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "10px !important",
    paddingLeft: "20px !important",
  },
}));
// Free follow up
function FreeFollowUps() {
  const classes = useStyles();

  return (
    <div style={{ background: "rgb(27, 55, 107)", width: "100%" }}>
      <BoxView>
        <Box
          sx={{
            display: { xs: "flex", sm: "none", md: "none", lg: "none" },
          }}
        >
          <Grid
            container
            spacing={2}
            style={{ padding: "5%", paddingBottom: 0 }}
          >
            <GridItemView item xs={12} md={6}>
              <HeadingView component="div">Free follow-ups</HeadingView>
            </GridItemView>
            <GridSecondItemView item xs={12} md={6}>
              <TypographyView
                component="div"
                color="#ffffff"
                fontFamily="Work Sans"
                className={classes.TextView}
              >
                Your pet`s care is of the utmost importance including continuity
                of care to ensure the best treatment outcomes.
              </TypographyView>
            </GridSecondItemView>
          </Grid>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
          }}
        >
          <Grid container spacing={2} style={{ padding: "5%" }}>
            <Grid item xs={12} md={6}>
              <HeadingView component="div">Free follow-ups</HeadingView>
            </Grid>
            <Grid item xs={12} md={6}>
              {" "}
              <TypographyView
                component="div"
                color="#ffffff"
                fontFamily="Work Sans"
                className={classes.TextView}
              >
                Your pet`s care is of the utmost importance including continuity
                of care to ensure the best treatment outcomes.
              </TypographyView>
            </Grid>
          </Grid>
        </Box>
      </BoxView>
    </div>
  );
}

export default FreeFollowUps;
