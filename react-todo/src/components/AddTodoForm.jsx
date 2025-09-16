import React, { useState } from "react";

export default function AddTodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="add-todo-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a new todo"
        data-testid="todo-input"
      />
      <button type="submit" data-testid="add-button">Add</button>
    </form>
  );
}
