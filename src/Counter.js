import React, { Component } from "react";
import { connect } from "react-redux"; //Conecta o componente com o store

import { increment, decrement } from "./actions";

//stateless functional Component, são componentes que não mantém o estado
const Counter = ({ count, increment, decrement }) => {
  return (
    <p>
      Contador: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </p>
  );
};

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
