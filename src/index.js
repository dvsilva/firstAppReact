import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    //return <a href="">{this.props.title}</a>;
    return (
      <button onClick={this.props.onClick} style={{ background: "#F00" }}>
        {this.props.children}
      </button>
    );
  }
}

class App extends Component {
  state = {
    counter: 0
  };

  // sobrepondo variaveis no estado
  handleClick = () => {
    //alert("Botão clicado");
    this.state.counter += 1;
    this.setState({ counter: this.state.counter + 1 });
  };

  // quando altera estado/propriedade do component ele executa
  render() {
    console.log("render");

    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <h2>{this.state.counter}</h2>
        <Button
          onClick={() => {
            alert("Botão");
          }}
          title="Enviar"
        />
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
