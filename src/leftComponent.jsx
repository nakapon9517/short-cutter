import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const TextLine = ({ index, name, url }) => (
  <div style={line_style}>
    <TextField
      id={"standard-basic" + index}
      variant="outlined"
      label="Name"
      style={text_name}
      value={name}
      size="small"
      autoComplete={"false"}
    />
    <TextField
      id={"filled-basic" + index}
      variant="outlined"
      label="URL"
      style={text_url}
      placeholder="http://"
      value={url}
      size="small"
      autoComplete={"false"}
    />
  </div>
);

export default class LeftComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { key: "1", name: "aaaaaaa", url: "http://a" },
        { key: "2", name: "bbbbbbb", url: "http://b" },
        { key: "3", name: "", url: "" },
      ],
    };
  }
  render() {
    return (
      <div style={left_component}>
        {this.state.data.map((item) => {
          return (
            <TextLine
              key={item.key}
              index={item.key}
              name={item.name}
              url={item.url}
            />
          );
        })}
      </div>
    );
  }
}

const left_component = {
  height: "calc(100vh - 10px)",
  padding: "10px 0px 0px 10px",
};

const line_style = {
  padding: "10px 0px 0px 10px",
};

const text_name = {
  display: "inline-block",
  boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.32)",
};

const text_url = {
  width: "150px",
  marginLeft: "10px",
  display: "inline-block",
  boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.32)",
};
