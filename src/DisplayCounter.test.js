import React from "react";
import { shallow, Enzyme, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { DisplayCounter } from "./DisplayCounter";

Enzyme.configure({ adapter: new Adapter() });

describe("<DisplayCounter />", () => {
  it("mounts", () => {
    const wrapper = shallow(<DisplayCounter count={10} />);

    expect(wrapper.contains("<p>O contador está em 10</p>")).toBe(true);
  });
});
