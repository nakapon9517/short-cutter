import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
// import GridLayout from "react-grid-layout";
// import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
// import styles from "../public/css/style.sass";

import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
export default class RightComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      data: [
        {
          index: "1",
          text: "aaaaa",
          w: 2,
          h: 3,
          x: 0,
          y: 0,
          minW: 2,
          minH: 3,
        },
        {
          index: "2",
          text: "bbbbb",
          w: 2,
          h: 3,
          x: 2,
          y: 0,
          minW: 2,
          minH: 3,
        },
        {
          index: "3",
          text: "ccccc",
          w: 2,
          h: 3,
          x: 4,
          y: 0,
          minW: 2,
          minH: 3,
        },
        {
          index: "4",
          text: "ddddd",
          w: 2,
          h: 3,
          x: 6,
          y: 0,
          minW: 2,
          minH: 3,
        },
      ],
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  render() {
    return (
      <div style={right_component}>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => this.resetLayout()}
        >
          Reset
        </Button>
        <ResponsiveReactGridLayout
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={50}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
          style={grid}
        >
          {this.state.data.map((item) => {
            return (
              <div
                key={item.index}
                data-grid={{
                  w: item.w,
                  h: item.h,
                  x: item.x,
                  y: item.y,
                  minW: item.minW,
                  minH: item.minH,
                }}
                style={Panel}
              >
                <span className="text">{item.text}</span>
              </div>
            );
          })}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}

const right_component = {
  height: "100vh",
};

const grid = {
  display: "block",
  // justifyContent: "flex-start",
};

const Panel = {
  // width: "100%",
  color: "#fff",
  fontWeight: "bold",
  margin: "10px",
  borderRadius: "10px",
  background: "#B0C4DE",
  padding: "0.2em 0.5em",
  display: "inline-block",
  border: "solid 3px #B0C4DE",
  boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.32)",
};
