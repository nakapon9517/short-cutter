import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const left_component = { height: "100vh", padding: "0px 10px" };

const LeftComponent = () => (
  <div style={left_component}>
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
    </form>
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
    </form>
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
    </form>
  </div>
);

export default LeftComponent;
