import React from "react";
import { use } from "react";

const Users2 = ({ userpromise }) => {
  const users = use(userpromise);
  console.log("user2 suspance data loade", users);
  return (
    <div>
      <h2>user2 is ready for work</h2>
    </div>
  );
};

export default Users2;
