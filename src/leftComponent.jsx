import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const classes = makeStyles((theme, Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: "#388e3c",
      backgroundColor: "#81c784",
    },
  })
);

const LeftComponent = () => (
  <Container>
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
    </form>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
    </form>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
    </form>
  </Container>
);

export default LeftComponent;
