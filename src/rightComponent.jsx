import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import GridLayout from "react-grid-layout";

export default class RightComponent extends React.Component {
  render() {
    const layout = [
      { i: "a", x: 1, y: 0, w: 5, h: 2, static: false },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 1, y: 0, w: 3, h: 2 },
    ];
    return (
      <div style={{ height: "100vh" }}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={100}
        >
          <div key="a">aaaaaaaaaaaaaaaaaaaaaaaa</div>
          <div key="b">bbbbbbbbbbbbbbbbbbbbbbbb</div>
          <div key="c">cccccccccccccccccccccccc</div>
        </GridLayout>
      </div>
    );
  }
}
