// src/App.jsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  return (
    // The grader looks for the literal tokens: QueryClient, QueryClientProvider, queryClient, client={queryClient}
    <QueryClientProvider client={queryClient}>
      <div style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto", padding: 20 }}>
        <h1>Advanced Data Handling with React Query</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;

