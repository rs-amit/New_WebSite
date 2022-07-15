import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const MobileView = styled("div")(
  ({ theme, margintop, homepage, laptopmarginleft }) => ({
    marginTop: margintop || 20,
    display: homepage === "true" && "flex",
    justifyContent: homepage === "true" && "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px !important",
      marginLeft: laptopmarginleft,
    },
  })
);

function ButtonComponent({
  heading,
  width,
  onClick,
  fontSize,
  height,
  margintop,
  homepage,
  fontweight,
  laptopmarginleft,
}) {
  return (
    <MobileView
      margintop={margintop}
      homepage={homepage}
      laptopmarginleft={laptopmarginleft}
    >
      <Button
        style={{
          textTransform: "none",
          borderRadius: 8,
          backgroundColor: "rgb(27, 55, 107)",
          width: width || "100%",
          fontWeight: fontweight || "bold",
          fontSize,
          height,
        }}
        variant="contained"
        onClick={onClick}
      >
        {heading}
      </Button>
    </MobileView>
  );
}

export default ButtonComponent;
