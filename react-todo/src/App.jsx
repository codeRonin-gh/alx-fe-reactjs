// src/App.jsx
import React from "react";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto" }}>
      <TodoList />
    </div>
  );
}
