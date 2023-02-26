import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";
import { color } from "@mui/system";

export default function CircularIndeterminate() {
  return (
    <CircularProgress size="10rem"
      style={{ marginTop: "300px", marginLeft: "700px", }}
    />
  );
}
