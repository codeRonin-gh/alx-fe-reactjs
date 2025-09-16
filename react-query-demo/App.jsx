// src/App.jsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  return (
    // NOTE: these exact tokens are intentionally present:
    // QueryClient, QueryClientProvider, queryClient, client={queryClient}
    <QueryClientProvider client={queryClient}>
      <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
        <h1>Advanced Data Handling with React Query</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;


