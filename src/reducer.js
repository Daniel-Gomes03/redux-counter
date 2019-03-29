const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.value };
    case "DECREMENT":
      return { ...state, count: state.count - action.value };
    default:
      return state;
  }
};

export default counterReducer;

//Reducer, é uma função que recebe um estado e uma action e retorna um novo estado
