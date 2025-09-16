import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders heading", () => {
  render(<TodoList />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
});

test("adds a todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Enter todo"), {
    target: { value: "Buy milk" },
  });
  fireEvent.click(screen.getByText("Add"));
  expect(screen.getByText("Buy milk")).toBeInTheDocument();
});

test("deletes a todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText("Enter todo"), {
    target: { value: "Buy milk" },
  });
  fireEvent.click(screen.getByText("Add"));
  fireEvent.click(screen.getByText("Delete"));
  expect(screen.queryByText("Buy milk")).not.toBeInTheDocument();
});
