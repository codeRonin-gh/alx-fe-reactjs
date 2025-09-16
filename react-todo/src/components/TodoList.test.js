import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders todo list", () => {
  render(<TodoList />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
  expect(screen.getByText("Learn React")).toBeInTheDocument();
});
