import React, { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

import PlusIcon from "./../../plus icon .webp";
import PlusMobileIcon from "./../../plus icon mobile (1).webp";
import MinusIcon from "./../../MINUS LAPTOP.webp";
import MinusMobileIcon from "./../../MINUS MOBILE.webp";
import "./ThirdSection.css";

const BoxView = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 12,
  },
  [theme.breakpoints.up("sm")]: {},
}));

const InnerDivView = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const Content = styled("div")(({ theme, expandedTrue }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: expandedTrue && 14,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: expandedTrue && 14,
  },
}));

const TextView = styled(Typography)(({ theme, fontWeight }) => ({
  color: "#013773",
  display: "inline",
  [theme.breakpoints.down("sm")]: {
    fontSize: fontWeight === "700" ? "40px" : "34px",
    lineHeight: "25px",
    width: 150,
  },
  [theme.breakpoints.up("sm")]: {
    fontWeight: fontWeight,
    fontSize: fontWeight === "400" ? "65px" : "80px",
  },
}));

const DivView = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    margin: "30px 0px",
  },
  [theme.breakpoints.up("sm")]: {},
}));

const ExpandView = styled("div")(({ theme, togglestate }) => ({
  [theme.breakpoints.up("sm")]: {
    marginBottom: togglestate === "true" && "3.13rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: togglestate === "true" && "2.75rem",
  },
}));

function ThirdsSection() {
  const [toggleState, setToggleState] = useState(null);

  const ToggleExpand = (index) => {
    if (toggleState === index) {
      return setToggleState(null);
    }
    setToggleState(index);
  };

  const heading = () => {
    return (
      <>
        <DivView style={{}}>
          <InnerDivView>
            <TextView component={"span"} fontWeight="400">
              What we{" "}
              <TextView component={"span"} fontWeight="700">
                offer
              </TextView>
            </TextView>
          </InnerDivView>
        </DivView>
      </>
    );
  };

  const questions = [
    {
      heading: "Lorem Ipsu44m",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum",
    },
    {
      heading: "Lorem Ipsum56",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Nutrition",
    },
    {
      heading: "Lorem Ipsum96",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum",
    },
    {
      heading: "Lorem Ipsum22",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum",
    },
    {
      heading: "Lorem Ipsum4",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum",
    },
    {
      heading: "Lorem Ipsum9",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum",
    },
    {
      heading: "Lorem Ipsum8",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      heading: "Lorem Ipsum2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum",
    },
    {
      heading: "Lorem Ipsum74",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make Lorem Ipsum",
    },
  ];

  return (
    <BoxView className="thirdSection">
      <div className="wrapper-thirdSection">
        {heading()}
        <div className="main-accordion">
          {questions.map((data, index) => (
            <div
              className={
                toggleState === index
                  ? "accordion-item active"
                  : "accordion-item"
              }
              key={`${index}_${data.heading}`}
            >
              <div
                className={
                  toggleState === index
                    ? "acordion-title active"
                    : "acordion-title"
                }
                onClick={() => ToggleExpand(index)}
              >
                <ExpandView
                  className={
                    toggleState === index ? "main-title active" : "main-title"
                  }
                  togglestate={toggleState === index ? "true" : "false"}
                >
                  {data.heading}
                </ExpandView>
                {toggleState === index ? (
                  <>
                    <Box
                      sx={{
                        display: {
                          xs: "none",
                          sm: "flex",
                          md: "flex",
                        },
                        marginBottom: "2.75rem",
                      }}
                    >
                      <img src={MinusIcon} width={"auto"} height={"auto"} />
                    </Box>
                    <Box
                      sx={{
                        display: {
                          xs: "flex",
                          sm: "none",
                          md: "none",
                        },
                        marginBottom: "2.75rem",
                      }}
                    >
                      <img
                        src={MinusMobileIcon}
                        width={"auto"}
                        height={"auto"}
                      />
                    </Box>
                  </>
                ) : (
                  <>
                    <Box
                      sx={{
                        display: {
                          xs: "none",
                          sm: "flex",
                          md: "flex",
                        },
                      }}
                    >
                      <img src={PlusIcon} width={"auto"} height={"auto"} />
                    </Box>
                    <Box
                      sx={{
                        display: {
                          xs: "flex",
                          sm: "none",
                          md: "none",
                        },
                      }}
                    >
                      <img
                        src={PlusMobileIcon}
                        width={"auto"}
                        height={"auto"}
                      />
                    </Box>
                  </>
                )}
              </div>
              <Content
                className={
                  toggleState === index
                    ? "acordion-content show"
                    : "acordion-content"
                }
                style={{
                  marginBottom: toggleState === index && "1.875rem",
                }}
                expandedTrue={toggleState === index}
              >
                {data.content}
              </Content>
            </div>
          ))}
        </div>
      </div>
    </BoxView>
  );
}

export default ThirdsSection;
