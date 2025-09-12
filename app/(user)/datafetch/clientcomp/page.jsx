"use client";

import UserCard from "@/app/components/UserCard";
import { useSearchParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import Loader from "../loading";
const DataFectchClient = (props) => {
  // const searchQuery = use(props.searchParams);
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  
  
  const [user, setUser] = useState({});
  console.log(user);
  

  const fetchUser = async() => {
    const res = await fetch(`https://api.genderize.io/?name=${searchParams.get("name") || "sachin"}`);
    const data = await res.json()
    setUser(data)
  };

  useEffect(() => {
    fetchUser();
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, []);

  if(isLoading) return <Loader />;

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <UserCard user={user}/>
    </div>
  );
};

export default DataFectchClient;
