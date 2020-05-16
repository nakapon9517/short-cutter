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
import SplitPane, { Pane } from "react-split-pane";

const menuButton = {
  // marginRight: theme.spacing(2),
};
const root = {
  flexGrow: 1,
  color: "#388e3c",
  maxWidth: "1500px",
};

const title = {
  flexGrow: 1,
  textAlign: "left",
};

const component = {
  border: "3px solid gray",
};
const main = {
  padding: "10px 32px 15px",
};

const App = () => (
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
        <Typography variant="h7" style={title}>
          ShortCutter
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
    <SplitPane split="vertical" minSize={300} defaultSize={300} style={main}>
      <div style={component}>
        <LeftComponent />
      </div>
      <div style={component}>
        <RightComponent />
      </div>
    </SplitPane>
  </Container>
);

export default App;
