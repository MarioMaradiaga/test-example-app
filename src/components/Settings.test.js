import Settings from "./Settings";
import renderer from "react-test-renderer";

test("should render Settings page", () => {
  const tree = renderer.create(<Settings />).toJSON();
  expect(tree).toMatchSnapshot();
});
