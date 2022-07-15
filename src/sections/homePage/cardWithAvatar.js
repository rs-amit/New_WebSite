import React, { memo } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import HorizontalLine from "./../../component/horizontalLine";

const ContentView = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "12px !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 20,
  },
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: 20,
  },

  [theme.breakpoints.up("md")]: {
    fontSize: 20,
  },
}));

const CardView = styled(Typography)(
  ({ theme, laptopcardheight, laptopmargintop }) => ({
    [theme.breakpoints.down("sm")]: {
      height: 400,
    },
    [theme.breakpoints.up("sm")]: {
      height: laptopcardheight || 390,
      marginTop: laptopmargintop && laptopmargintop,
    },
  })
);

const View = styled("div")(
  ({ theme, laptopcardheight, laptopmargintop, isTransparent }) => ({
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
    [theme.breakpoints.up("sm")]: {
      height: 332,
      marginTop: laptopmargintop && laptopmargintop,
      boxShadow: "none",
      border: "3px solid #E8E8E8",
      borderRadius: 12,
    },
  })
);

const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "20px !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "28px",
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "14px !important",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "22px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: 55,
    height: 55,
  },
  [theme.breakpoints.up("sm")]: {
    width: "100%",
    height: "100%",
  },
}));

const AvatarImage = styled(Avatar)(({ theme }) => ({
  [theme.breakpoints.between("sm", "md")]: {
    width: "50px !important",
    height: "50px !important",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: 100,
    height: 100,
  },
}));

const divider = (dividerNotNeeded) => {
  if (dividerNotNeeded) {
    return null;
  }

  return <HorizontalLine height={1} color="#55BED4" opacity={0.1} />;
};

function CardWithAvatarComponent({
  heading,
  content,
  image,
  imageTitle,
  imageSubTitle,
  subHeading,
  borderRadius,
  laptopcardheight,
  laptopmargintop,
  isTransparent,
  fontStyle,
  fontFamily,
  dividerNotNeeded,
  avatarSize,
}) {
  // if (isTransparent) {
  //   return (
  //     <View
  //       laptopcardheight={laptopcardheight}
  //       laptopmargintop={laptopmargintop}
  //       isTransparent={isTransparent}
  //       sx={{
  //         borderRadius: 4,
  //         boxShadow: "0px 3px 33px #0000001A",
  //         overflowY: "hidden",
  //       }}
  //     >
  //       <CardHeader
  //         style={{ paddingBottom: 0 }}
  //         avatar={
  //           image && (
  //             <Avatar
  //               sx={{ borderRadius: borderRadius || "10px" }}
  //               aria-label="recipe"
  //             >
  //               <img
  //                 src={image}
  //                 alt={imageTitle}
  //                 style={{
  //                   width: avatarSize || "100%",
  //                   height: avatarSize || "100%",
  //                 }}
  //               />
  //             </Avatar>
  //           )
  //         }
  //         title={
  //           <Typography
  //             fontFamily="Work Sans"
  //             fontWeight="700"
  //             fontSize="24px"
  //             style={{ color: "#030303" }}
  //           >
  //             {imageTitle}
  //           </Typography>
  //         }
  //         subheader={
  //           <Grid container>
  //             <Grid item xs={12} sm={12}>
  //               <Typography
  //                 fontFamily="Work Sans"
  //                 fontWeight="bold"
  //                 fontSize="12px"
  //                 color="#000000"
  //                 style={{ display: "inline", paddingRight: 5 }}
  //               >
  //                 {subHeading}
  //               </Typography>
  //             </Grid>
  //           </Grid>
  //         }
  //       />
  //       <CardContent style={{ padding: 16 }}>
  //         <ContentView
  //           variant="body2"
  //           style={{
  //             fontFamily: "Work Sans",
  //             letterSpacing: 1,
  //             color: "#000000",
  //             opacity: 0.5,
  //             fontSize: 20,
  //             letterSpacing: "0px",
  //             // lineHeight: "24px", // for small
  //           }}
  //         >
  //           {`"${content}"`}
  //         </ContentView>
  //       </CardContent>
  //       <CardActions disableSpacing />
  //     </View>
  //   );
  // }

  return (
    <CardView
      component="div"
      laptopcardheight={laptopcardheight}
      laptopmargintop={laptopmargintop}
      sx={{
        borderRadius: 4,
        boxShadow: "0px 40px 80px #00000029",
        overflowY: "hidden",
      }}
    >
      <CardHeader
        avatar={
          image && (
            <AvatarImage
              sx={{
                borderRadius: borderRadius || "10px",
              }}
              aria-label="recipe"
            >
              <Image src={image} alt={imageTitle} style={{}} />
            </AvatarImage>
          )
        }
        title={
          <Title
            component="div"
            fontFamily="Work Sans"
            fontWeight="700"
            style={{ color: "#030303" }}
          >
            {imageTitle}
          </Title>
        }
        subheader={
          <Grid container>
            <Grid item xs={12}>
              <SubTitle
                component="div"
                fontFamily="Work Sans"
                color="#000000"
                style={{ display: "inline", paddingRight: 5, opacity: 0.6 }}
              >
                {subHeading}
              </SubTitle>
            </Grid>
          </Grid>
        }
      />
      {divider(dividerNotNeeded)}
      <CardContent style={{ paddingTop: 0 }}>
        <Typography
          component="div"
          fontFamily="Work Sans, Bold"
          fontWeight="bold"
          color="#595f6f"
          fontSize="12px"
        >
          {heading}
        </Typography>
        <ContentView
          component="div"
          variant="body2"
          color="#000000"
          style={{
            fontFamily: fontFamily || "Work Sans, Italic",
            letterSpacing: 1,
            fontStyle: fontStyle || "italic",
          }}
        >
          {`"${content}"`}
        </ContentView>
      </CardContent>
      <CardActions disableSpacing />
    </CardView>
  );
}

export default memo(CardWithAvatarComponent);
