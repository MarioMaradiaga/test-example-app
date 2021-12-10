import Home from "./Home";
import { shallow } from "enzyme";

import renderer from "react-test-renderer";

test("should render Home page", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render description on button click", () => {
  const mockCallBack = jest.fn();

  const HomePage = shallow(<Home />);
  HomePage.find("button").simulate("click");
  expect(HomePage.find("[className='description']").length).toEqual(1);
});
