import Counter from "@/components/Counter";

const ServerComponent = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <>
      <h1 className="bg-yellow-400 text-2xl text-center">This is Server Component</h1>
      <Counter />
      <ul className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </>
  );
};

export default ServerComponent;
