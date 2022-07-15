import { styled } from "@mui/material/styles";

const Line = styled("div")(
  ({
    theme,
    color,
    laptopwidth,
    mobilemargintop,
    mobilemarginleft,
    mobilewidth,
    opacity,
  }) => ({
    height: 1,
    backgroundColor: color || "black",
    width: laptopwidth || 250,
    marginRight: "auto",
    opacity: opacity && opacity,
    [theme.breakpoints.down("sm")]: {
      width: mobilewidth || "150px",
      marginLeft: mobilemarginleft || 25,
      marginTop: mobilemargintop || 10,
      marginBottom: 10,
    },
  })
);

const HorizontalLine = ({
  width,
  color,
  laptopwidth,
  mobilemargintop,
  mobilemarginleft,
  mobilewidth,
  opacity,
}) => {
  return (
    <Line
      width={width}
      color={color}
      laptopwidth={laptopwidth}
      mobilemargintop={mobilemargintop}
      mobilemarginleft={mobilemarginleft}
      mobilewidth={mobilewidth}
      opacity={opacity}
    />
  );
};

export default HorizontalLine;
