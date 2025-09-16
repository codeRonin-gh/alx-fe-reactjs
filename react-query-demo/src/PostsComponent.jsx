// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    
    refetchOnWindowFocus: true,
    keepPreviousData: true,
    staleTime: 60_000,
    cacheTime: 300_000,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        disabled={isFetching}
        style={{
          marginBottom: 12,
          padding: "8px 12px",
          borderRadius: 6,
          border: "1px solid #ccc",
          cursor: isFetching ? "not-allowed" : "pointer",
        }}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: 12 }}>
            <strong>{post.title}</strong>
            <p style={{ marginTop: 6 }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
