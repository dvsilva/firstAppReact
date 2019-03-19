import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

// statefull component
class App extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    // veda execução do render
    return nextState.counter <= 10;
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillMount() {}

  // sobrepondo variaveis no estado
  handleClick = () => {
    //alert("Botão clicado");
    //this.state.counter += 1;

    // não é estantâneo
    // assíncrono / executa através de uma fila de alterações de estado
    this.setState({ counter: this.state.counter + 1 }),
      () => {
        console.log(this.state.counter);
      };

    this.setState(state => {
      counter: this.state.counter + 1;
    });
    this.setState(state => {
      counter: this.state.counter + 1;
    });
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
