// src/components/AddTodoForm.jsx
import React from "react";

export default function AddTodoForm({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={value}
        onChange={onChange}
        aria-label="todo-input"
      />
      <button type="submit">Add</button>
    </form>
  );
}
