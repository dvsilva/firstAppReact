import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Button extends Component {
  render() {
    //return <a href="">{this.props.title}</a>;
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

class App extends Component {
  handleClick() {
    alert("Botão clicado");
  }

  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <Button title="Enviar 1" />
        <Button onClick={this.handleClick}>Enviar 2</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
