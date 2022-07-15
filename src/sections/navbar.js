import * as React from "react";
import { Link as ReactLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Box, Grid } from "@mui/material";
import { Toolbar, IconButton, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useMatch, useResolvedPath } from "react-router-dom";
import MenuIcon from "./../menu icon.webp";
// import homePageMenuIcon from "./../Hamburger Icon Background.svg";
import { Link } from "react-scroll";
import ButtonComponent from "../component/button";
import veticLogo from "./../logo.webp";
import homePageMenuIcon from "./../homePageMenuIcon.jpg";
import { redirectUrl } from "../constants/constants";
import COLORS from "../constants/colors";
import { useLocation } from "react-router-dom";

const MobileView = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "104px !important",
    height: "37px !important",
  },
  [theme.breakpoints.up("sm")]: {
    width: 121,
    height: 43,
  },
}));

const TypographyView = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
}));

const AppbarView = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: "#F6FCFC",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "#FFF",
  },
  [theme.breakpoints.up("sm")]: {
    height: 84,
    display: "flex",
    justifyContent: "center",
  },
}));

const ToolbarView = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "84px !important",
    paddingRight: "84px !important",
  },
  [theme.breakpoints.down("sm")]: {
    boxShadow: "0px 2px 3px #00000019",
    height: 71,
  },
}));

const Navbar = ({ isScroll, setScroll }) => {
  const { pathname } = useLocation();

  const homePageLink = pathname.replace("/", "") === "home-page";

  function CustomLink({ children, to, fontSize, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <div>
        <ReactLink style={{ textDecoration: "none" }} to={to} {...props}>
          <TypographyView
            component={"span"}
            color={COLORS.HOMEPAGE_LINKS_COLOR }
            fontWeight='400'

            // fontWeight={homePageLink ? "400" : "700"}
            // color={
            //   homePageLink ? COLORS.HOMEPAGE_LINKS_COLOR : "rgb(27, 55, 107)"
            // }

            fontSize={fontSize}
          >
            {children}
            {match && (
              <div
                style={{
                  height: 4,
                  // width: "fit-content",
                  backgroundColor: "rgb(27, 55, 107)",
                }}
              />
            )}
          </TypographyView>
        </ReactLink>
      </div>
    );
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const onClick = () => {
    setScroll(!isScroll);
  };

  const menuId = "primary-search-account-menu";
  const menuItms = [
    {
      value: "Careers",
    },
    { value: "About Us" },
  ];

  // const isMobile = true;
  // const topicData = [{ text: "a", path: "a" }];

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {menuItms.forEach(({ value }) => {
        if (value === "Careers") {
          return (
            <MenuItem onClick={handleMenuClose}>
              {redirectUrl(
                <Typography
                  component={"span"}
                  fontWeight="bold"
                  color="rgb(27, 55, 107)"
                >
                  {value}
                </Typography>,
                "https://www.linkedin.com/company/veticin"
              )}
            </MenuItem>
          );
        }
        return (
          <MenuItem onClick={handleMenuClose}>
            <CustomLink to="/about-us">{value}</CustomLink>
          </MenuItem>
        );
      })}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const homePageMenuItems = ["Clinics", "Consult a Vet", "Blog"];
  const homePageOtherMenuItems = [
    { value: "About Us" },
    {value: "Careers",  },
  ];
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {homePageMenuItems.forEach((value) => {
        return (
          homePageLink && (
            <div key={`${value}`}>
              <MenuItem>
                <CustomLink to="/#" fontSize="16px">
                  {value}
                </CustomLink>
              </MenuItem>
            </div>
          )
        );
      })}
      {homePageOtherMenuItems.forEach(({ value }) => {
        if (value === "About Us") {
          return (
            <MenuItem>
              <CustomLink to="/about-us" fontSize="16px">
                About Us
              </CustomLink>
            </MenuItem>
          );
        }
        if (value === "Careers") {
          return (
            <MenuItem>
              {redirectUrl(
                <Typography
                  component={"span"}
                  fontWeight='400'
                  color={homePageLink ? "#4C4C4C" : "rgb(27, 55, 107)"}
                  fontSize="16px"
                  // fontWeight={homePageLink ? "400" : "700"}
                >
                  Careers
                </Typography>,
                "https://www.linkedin.com/company/veticin"
              )}
            </MenuItem>
          );
        }

        return (
          <MenuItem>
            <span style={{ marginTop: -10 }}>
              <Link
                activeClass="active"
                to="consultation_form"
                spy={isScroll}
                smooth={true}
              >
                <ButtonComponent
                  onClick={() => {
                    onClick();
                    handleMenuClose();
                  }}
                  heading="Consult now"
                  width="158px"
                  fontSize="18px"
                />
              </Link>
            </span>
          </MenuItem>
        );
      })}
      {/* <MenuItem>
        <CustomLink to="/about-us" fontSize="16px">
          About Us
        </CustomLink>
      </MenuItem> */}
    </Menu>
  );



  return (
    <Box sx={{ flexGrow: 1, boxShadow: "0px 2px 3px #00000019" }}>
      <AppbarView elevation={1}>
        <ToolbarView>
          {redirectUrl(
            <MobileView
              src={veticLogo}
              alt="navbar-logo"
              style={{ width: 121, height: 43, marginBottom: 5 }}
            />,
            "/",
            true
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {homePageLink && (
              <>
                {
                  ["Clinics", "Consult a vet", "Blog"].map((value, index) => (
                    <span
                      style={{
                        marginRight: 40,
                        marginTop: 2,
                        display: "flex",
                        alignItems: "center",
                      }}
                      key={value}
                    >
                      <CustomLink to="/#"> {value} </CustomLink>
                    </span>

                  ))
                }
              </>
            )}
            <span
              style={{
                marginRight: 40,
                marginTop: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <CustomLink to="/privacy-policy">Privacy Policy</CustomLink>
            </span>
            <span
              style={{
                marginRight: 40,
                marginTop: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <CustomLink to="/about-us">About Us</CustomLink>
            </span>
            <span
              style={{ marginRight: 40, display: "flex", alignItems: "center" }}
            >
              {redirectUrl(
                <TypographyView
                  component={"span"}
                  color="#4C4C4C"
                  fontweight='400'
                  // fontWeight={homePageLink ? "400" : "700"}
                  // color={homePageLink ? "#4C4C4C" : "rgb(27, 55, 107)"}
                >
                  Careers
                </TypographyView>,
                "https://www.linkedin.com/company/veticin"
              )}
            </span>
            <span style={{ marginTop: "-17px" }}>
              <Link
                component="button"
                activeClass="active"
                to="consultation_form"
                spy={isScroll}
                smooth={true}
              >
                <TypographyView component={"span"}>
                  <ButtonComponent
                    onClick={onClick}
                    heading={homePageLink ? "Book now" : "Consult now"}
                    width={homePageLink ? "158px" : "175px"}
                    fontSize={homePageLink ? "20px" : "16px"}
                    fontweight={homePageLink && "400"}
                  />
                </TypographyView>
              </Link>
            </span>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              style={{ color: "rgb(27, 55, 107)" }}
            >
              <Grid container>
                <Grid item xs={12}>
                  {homePageLink ? (
                    <img
                      src={homePageMenuIcon}
                    // style={{ marginRight: "18px" }}
                    />
                  ) : (
                    <>
                      <img
                        src={MenuIcon}
                        alt="menu-icon"
                        style={{ width: 24, height: 11 }}
                      />
                      <Typography
                        component={"div"}
                        style={{
                          fontSize: 9,
                          color: "#313131",
                          fontFamily: "Work Sans, Medium",
                          marginTop: -2,
                        }}
                      >
                        Menu
                      </Typography>
                    </>
                  )}
                </Grid>
              </Grid>
            </IconButton>
          </Box>
        </ToolbarView>
      </AppbarView>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;
