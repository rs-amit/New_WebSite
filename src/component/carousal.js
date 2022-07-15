import React, { memo } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CardWithAvatarComponent from "./cardWithAvatar";
import CardWithAvatarHomePageComp from "./../sections/homePage/cardWithAvatar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  dotActive: {
    backgroundColor: "#12376f !important",
    width: "13px !important",
    height: "13px !important",
  },
  dot: {
    width: "13px !important",
    height: "13px !important",
  },
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CarousalCards = React.memo(
  ({
    data,
    homePage,
    laptopcardheight,
    borderRadius,
    fontFamily,
    fontStyle,
    dividerNotNeeded,
  }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = data.length;

    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AutoPlaySwipeableViews
          style={{ boxShadow: "0px 3px 33px #0000001A" }}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {data.map((step, index) => (
            <div key={step.imageTitle}>
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  {homePage ? (
                    <CardWithAvatarHomePageComp
                      heading={step.heading}
                      content={step.content}
                      image={step.image}
                      imageTitle={step.imageTitle}
                      subHeading={step.subHeading}
                      imageSubTitle={step.imageSubTitle}
                      laptopcardheight={laptopcardheight}
                      borderRadius={borderRadius}
                      fontFamily={fontFamily}
                      fontStyle={fontStyle}
                      dividerNotNeeded={dividerNotNeeded}
                    />
                  ) : (
                    <CardWithAvatarComponent
                      heading={step.heading}
                      content={step.content}
                      image={step.image}
                      imageTitle={step.imageTitle}
                      imageSubTitle={step.imageSubTitle}
                    />
                  )}
                </>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          style={{
            background: "transparent",
            boxShadow: "none",
            display: "flex",
            justifyContent: "center",
            marginTop: 24,
          }}
          classes={{
            dotActive: classes.dotActive,
            dot: classes.dot,
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
    );
  }
);

export default CarousalCards;
