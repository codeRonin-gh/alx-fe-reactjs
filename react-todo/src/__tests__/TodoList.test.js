import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders TodoList heading", () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test("adds a todo item", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Enter todo/i), {
    target: { value: "Buy milk" },
  });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText(/Buy milk/i)).toBeInTheDocument();
});

test("deletes a todo item", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Enter todo/i), {
    target: { value: "Buy milk" },
  });
  fireEvent.click(screen.getByText(/Add/i));
  fireEvent.click(screen.getByText(/Delete/i));
  expect(screen.queryByText(/Buy milk/i)).not.toBeInTheDocument();
});
