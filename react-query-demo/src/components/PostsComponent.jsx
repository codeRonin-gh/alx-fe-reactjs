// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 30_000,   // 30 seconds
    cacheTime: 300_000,  // 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching} style={{ marginBottom: 12 }}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.map(post => (
          <li key={post.id} style={{ marginBottom: 12 }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
