import React from "react";

export default class Hover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false,
    };

    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
  }

  mouseOver() {
    this.setState({
      hovering: true,
    });
  }

  mouseOut() {
    this.setState({
      hovering: false,
    });
  }
  render() {
    const { hovering } = this.state;
    //   console.log("mee");

    return (
      <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
        {this.props.children(hovering)}
      </div>
    );
  }
}
