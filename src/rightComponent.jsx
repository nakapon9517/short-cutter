import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const classes = makeStyles((theme, Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: "#388e3c",
      backgroundColor: "#81c784",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

// const RightComponent = () => (
//   <div>
//     <h1>RightComponent</h1>
//     <h1>RightComponent</h1>
//   </div>
// );

// export default RightComponent;
import GridLayout from "react-grid-layout";

export default class RightComponent extends React.Component {
  render() {
    const layout = [
      { i: "a", x: 1, y: 5, w: 3, h: 2, static: true },
      { i: "b", x: 2, y: 6, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 3, y: 7, w: 3, h: 2 },
    ];
    return (
      <Container>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={100}
        >
          <div key="a">
            a
            <Grid container item xs={12} spacing={3}>
              <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="right" />
              </form>
            </Grid>
          </div>
          <div key="b">
            b
            <Grid container item xs={12} spacing={3}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="right" />
              </form>
            </Grid>
          </div>
          <div key="c">
            c
            <Grid container item xs={12} spacing={3}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="right" />
              </form>
            </Grid>
          </div>
        </GridLayout>
      </Container>
    );
  }
}
