import { styled } from "@mui/material/styles";

const View = styled("div")(
  ({
    theme,
    margintop,
    margintopmobile,
    mobileviewheight,
    width,
    mobileviewwidth,
    borderradius,
    right,
    cardcontentmargintop,
    laptopleft,
    laptopbottom,
    laptopheight,
    // bigsizelaptopleft,
    mobilemarginleft,
  }) => ({
    position: "absolute",
    width: 315,
    opacity: "100%",
    backdropFilter: "blur(30px)",
    background: "border-box",
    [theme.breakpoints.down("sm")]: {
      marginTop: cardcontentmargintop || margintopmobile,
      height: mobileviewheight,
      width: mobileviewwidth,
      borderRadius: borderradius || 0,
      right: right !== "false" && right,
      marginLeft: mobilemarginleft && mobilemarginleft,
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: margintop,
      height: laptopheight || 180,
      width: width,
      left: laptopleft && laptopleft,
      bottom: laptopbottom && laptopbottom,
      borderRadius: borderradius || 0,
    },
    // big laptop pending
    // [theme.breakpoints.up("md")]: {
    //   left: bigsizelaptopleft && bigsizelaptopleft,
    // },
    // [theme.breakpoints.only("md")]: {
    //   left: bigsizelaptopleft && bigsizelaptopleft,
    // },
    // [theme.breakpoints.up("lg")]: {
    //   left: bigsizelaptopleft && bigsizelaptopleft,
    // },
    // "@media (min-width: 823px)": {
    //   left: bigsizelaptopleft && bigsizelaptopleft,
    // },
  })
);

const BlurredComp = ({
  children,
  margintop,
  margintopmobile,
  mobileviewheight,
  width,
  mobileviewwidth,
  borderradius,
  right,
  cardcontentmargintop,
  laptopleft,
  laptopbottom,
  laptopheight,
  // bigsizelaptopleft,
  mobilemarginleft,
}) => {
  return (
    <View
      margintop={margintop}
      margintopmobile={margintopmobile}
      mobileviewheight={mobileviewheight}
      width={width}
      mobileviewwidth={mobileviewwidth}
      borderradius={borderradius}
      right={right}
      cardcontentmargintop={cardcontentmargintop}
      laptopleft={laptopleft}
      laptopbottom={laptopbottom}
      laptopheight={laptopheight}
      // bigsizelaptopleft
      mobilemarginleft={mobilemarginleft}
    >
      {children}
    </View>
  );
};

export default BlurredComp;
