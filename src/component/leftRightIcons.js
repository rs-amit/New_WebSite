import { Grid, Button, Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LeftArrowLaptop from "./../arrowic-1 laptop.webp";
import RightArrowLaptop from "./../arrow icon-2 laptop.webp";
import RightArrowMobile from "./../arrow-2 mobile.webp";
import LeftArrowMobile from "./../arrow-1 mobile (1).webp";
import COLORS from "./../constants/colors";
import { styled } from "@mui/material/styles";

const GridItemView = styled(Grid)(({ theme }) => ({
  position: "absolute",

  [theme.breakpoints.between("sm", "md")]: {
    right: 75,
    marginTop: "-100px !important",
  },
  [theme.breakpoints.up("sm")]: {
    right: 85,
    marginTop: 590,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: -36,
    right: "30px",
  },
}));

const LeftRightIcons = ({ onLeftClick, onRightClick }) => {
  return (
    <div style={{ position: "abosulte" }}>
      <Box
        sx={{
          display: { xs: "flex", sm: "none", md: "none", lg: "none" },
        }}
      >
        <Grid container spacing={1}>
          <GridItemView
            item
            xs={12}
            sm={12}
            display="flex"
            justifyContent="center"
            style={{}}
          >
            <img
              src={LeftArrowMobile}
              width={23}
              onClick={onLeftClick}
              style={{
                width: 27,
                height: 27,
                cursor: "pointer",
                backgroundColor: "#fff",
              }}
            />
            <img
              src={RightArrowMobile}
              onClick={onRightClick}
              style={{
                width: 27,
                height: 27,
                cursor: "pointer",
              }}
            />
            {/* <ChevronRightIcon /> */}
            {/* </Button> */}
          </GridItemView>
        </Grid>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
        }}
      >
        <Grid container spacing={1}>
          <GridItemView
            item
            xs={12}
            sm={12}
            display="flex"
            justifyContent="center"
            style={{}}
          >
            <img
              src={LeftArrowLaptop}
              width={23}
              onClick={onLeftClick}
              style={{
                width: 59,
                height: 60,
                cursor: "pointer",
                backgroundColor: "#fff",
              }}
            />
            <img
              src={RightArrowLaptop}
              onClick={onRightClick}
              style={{
                width: 59,
                height: 60,
                cursor: "pointer",
              }}
            />
            {/* <ChevronRightIcon /> */}
            {/* </Button> */}
          </GridItemView>
        </Grid>
      </Box>
    </div>
  );
};

export default LeftRightIcons;
