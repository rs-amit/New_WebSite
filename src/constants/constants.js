import { Typography } from "@mui/material";

export const redirectUrl = (children, link, target) => {
  return (
    <a
      href={link}
      target={target ? "_self" : "_blank"}
      style={{ textDecoration: "none" }}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export const SubTextHomePage = (text, fontSize) => {
  return (
    <Typography
      fontSize={fontSize || "32px"}
      fontWeight="medium"
      fontFamily="Work Sans"
    >
      {text}
    </Typography>
  );
};

export const SubMiniTextHomePage = (text, fontSize, color) => {
  return (
    <Typography
      fontSize={fontSize || "25px"}
      // fontWeight="medium"
      fontFamily="Work Sans"
      color={color}
      fontStyle="normal"
    >
      {text}
    </Typography>
  );
};
