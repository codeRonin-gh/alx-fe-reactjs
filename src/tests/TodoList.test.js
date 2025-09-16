import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a project")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
    target: { value: "Write tests" },
  });
  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteBtn = screen.getAllByText(/delete/i)[0];
  fireEvent.click(deleteBtn);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
