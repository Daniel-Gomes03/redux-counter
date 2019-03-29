import React, { Component } from "react";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import DisplayCounter from "./DisplayCounter";
import counterReducer from "./reducer";
import Counter from "./Counter";

let store = createStore(
  counterReducer,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
          <DisplayCounter />
        </div>
      </Provider>
    );
  }
}

export default App;
