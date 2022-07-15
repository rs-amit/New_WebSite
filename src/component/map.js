import React from "react";
import GoogleMapReact from "google-map-react";
import { styled } from "@mui/material/styles";

const View = styled("div")(({ theme, marginTop }) => ({
  borderRadius: 12,
  [theme.breakpoints.down("sm")]: {
    height: 124,
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    height: "260px",
    width: "100%",
  },
}));

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <View style={{}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBH2yIFRXysa2Kx_BjiPLXnQrLYOhhS0yw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </View>
  );
}
