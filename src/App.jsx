import React from "react";
import LeftComponent from "./leftComponent";
import RightComponent from "./rightComponent";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SplitPane, { Pane } from "react-split-pane";

export default class App extends React.Component {
  constructor() {
    super();
    this.toggleBtmHeight = this.toggleBtmHeight.bind(this);
  }
  toggleBtmHeight(newSize) {
    this.setState({ btmHeight: newSize + "px" });
  }

  render() {
    return (
      <Container style={root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              style={menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={title}>
              ShortCutter
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
        <SplitPane
          split="vertical"
          minSize={50}
          defaultSize="500px"
          style={main}
          onChange={(size) => this.toggleBtmHeight(size)}
        >
          <Paper>
            <LeftComponent />
          </Paper>
          <Paper>
            <RightComponent />
          </Paper>
        </SplitPane>
      </Container>
    );
  }
}

const menuButton = {
  // marginRight: theme.spacing(2),
};
const root = {
  flexGrow: 1,
  color: "#388e3c",
};

const title = {
  flexGrow: 1,
  textAlign: "left",
};

const main = {
  padding: "10px 32px 15px",
  // width: "calc((100% - 32px) / 2)",
};
