import reducer from "./reducer";

test("reducer increment", () => {
  const inicialState = {
    count: 0
  };

  const action = { type: "INCREMENT", value: 10 };

  const state = reducer(inicialState, action);
  expect(state).toEqual({ count: 10 });
});

test("reducer decrement", () => {
  const inicialState = {
    count: 0
  };

  const action = { type: "DECREMENT", value: 10 };

  const state = reducer(inicialState, action);
  expect(state).toEqual({ count: -10 });
});

test("reducer inicial state null", () => {
  const action = { type: "INCREMENT", value: 10 };

  const state = reducer(undefined, action);
  expect(state).toEqual({ count: 10 });
});
