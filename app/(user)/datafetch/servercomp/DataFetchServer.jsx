import React from "react";


import UserCard from "@/app/components/UserCard";
const DataFectchServer = async ({searchParam}) => {  

  const res = await fetch(
    `https://api.genderize.io/?name=${searchParam.name || "sachin"}`
  );
  const user = await res.json();
  

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000);
  })
  
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <UserCard user={user}/>
    </div>
  );
};

export default DataFectchServer;

