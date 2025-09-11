"use client";

import { use } from "react";

const SingleUser = (props) => {
  const user = use(props.params);

  return <h1>Hello, {user.username}... This is your Profile page......</h1>;
};

export default SingleUser;
