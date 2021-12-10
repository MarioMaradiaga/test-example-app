import App from "./App";
import renderer from "react-test-renderer";

test("should render Settings page", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
