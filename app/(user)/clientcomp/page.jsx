"use client";

import Counter from "@/app/components/Counter";
import { useEffect, useState } from "react";

const ClientComponent = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="bg-yellow-400 text-2xl text-center">This is Client Component</h1>
      <Counter />

      <ul className="grid grid-cols-3 gap-5">
        {posts.map((item) => (
          <li key={item.id}>{item.body}</li>
        ))}
      </ul>
    </>
  );
};

export default ClientComponent;
