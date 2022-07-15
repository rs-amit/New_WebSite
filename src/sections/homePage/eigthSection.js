import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const View = styled("div")(({ theme }) => ({
  background: "#02C0D8",
  display: "flex",
  [theme.breakpoints.down("sm")]: { height: 156, marginTop: 48 },
  [theme.breakpoints.up("sm")]: {
    height: 372,
  },
}));

const TypographyView = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { fontSize: "20px", textAlign: "center" },
  [theme.breakpoints.up("sm")]: {
    fontSize: "50px",
  },
}));

const SubTypographyView = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    textAlign: "center",
    margin: "0px 54px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "25px",
  },
}));

const EightSection = () => {
  return (
    <View>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <TypographyView color="#fff" component="div">
            Brand Tag Line
          </TypographyView>
          <SubTypographyView color="#fff" component="div">
            Stay updated as your security needs to be.
          </SubTypographyView>
        </Grid>
      </Grid>
    </View>
  );
};
export default EightSection;
