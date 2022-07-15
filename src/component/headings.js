import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const SubHeadingView = styled(Typography)(({ theme, subheadingcolor }) => ({
  fontFamily: "Work Sans",
  color: subheadingcolor || "#595f6f",
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 18,
  },
}));

const HeadingView = styled(Typography)(({ theme }) => ({
  fontFamily: "Work Sans",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 35,
  },
}));

function Headings({
  mainHeading,
  subHeading,
  color,
  paddingLeft,
  letterSpacing,
  subheadingcolor,
}) {
  return (
    <>
      <HeadingView
        component="div"
        style={{
          color: color || "rgb(27, 55, 107)",
          paddingLeft,
          letterSpacing: letterSpacing || 1,
        }}
      >
        {mainHeading}
      </HeadingView>
      <SubHeadingView
        component="div"
        style={{
          paddingLeft,
          letterSpacing: letterSpacing || 1,
        }}
        subheadingcolor={subheadingcolor}
      >
        {subHeading}
      </SubHeadingView>
    </>
  );
}

export default Headings;
