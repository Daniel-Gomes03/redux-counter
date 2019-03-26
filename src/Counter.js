import React, { Component } from "react";
import { connect } from "react-redux"; //Conecta o componente com o store

import { increment, decrement } from "./actions";

class Counter extends Component {
  render() {
    return (
      <p>
        Contador: {this.props.count}
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </p>
    );
  }
}

const mapStateToProps = state => {
  // Recebe o store inteiro aqui(state)
  return {
    count: state.count //Extrai só o que é importante para o componente
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
