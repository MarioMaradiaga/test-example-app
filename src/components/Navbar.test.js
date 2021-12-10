import Navbar from "./Navbar";
import renderer from "react-test-renderer";

jest.mock("react-router-dom", () => {
  return { Link: () => "Link" };
});
test("should render Navbar", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render admin link for admins", () => {
  const tree = renderer.create(<Navbar isAdmin />).toJSON();
  expect(tree).toMatchSnapshot();
});
