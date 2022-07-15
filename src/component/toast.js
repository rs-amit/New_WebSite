import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({ state, handleClosee, message }) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={state.open}
        onClose={handleClosee}
        TransitionComponent={state.Transition}
        message={message}
        key={state.Transition.name}
      >
        <Alert onClose={handleClosee} severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
