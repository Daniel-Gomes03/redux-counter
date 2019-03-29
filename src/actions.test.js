import { increment, decrement } from "./actions";

test("Action: increment", () => {
  let incrementTest = increment(10);

  expect(incrementTest).toEqual({
    type: "INCREMENT",
    value: 10
  });
});

test("Action: decrement", () => {
  let decrementTest = decrement(20);

  expect(decrementTest).toEqual({
    type: "DECREMENT",
    value: 20
  });
});
