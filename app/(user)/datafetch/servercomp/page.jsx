import React from "react";


import UserCard from "@/app/components/UserCard";
const DataFectchServer = async (props) => {
  const searchParam = await props.searchParams;

  const res = await fetch(
    `https://api.genderize.io/?name=${searchParam.name || "sachin"}`
  );
  const user = await res.json();

  console.log(user);
  

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <UserCard user={user}/>
    </div>
  );
};

export default DataFectchServer;

