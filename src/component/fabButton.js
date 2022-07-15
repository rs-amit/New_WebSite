import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { styled } from "@mui/material/styles";
import Icon from "@mui/icons-material/Call";

const ButtonsView = styled("div")(() => ({
  position: "fixed",
  right: 15,
  bottom: 45,
  zIndex: 100,
}));

export default function FabButton() {
  return (
    <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
      <ButtonsView>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <a href="tel:123-456-7890">
            <Fab
              size="small"
              aria-label="add"
              style={{
                textDecoration: "none",
                backgroundColor: "#02c0d8",
                color: "#FFF",
              }}
            >
              <Icon style={{ fontSize: 20 }} />
            </Fab>
          </a>
        </Box>
      </ButtonsView>
    </Box>
  );
}
