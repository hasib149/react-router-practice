import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  console.log(user);
  const { id, name, username, website, email } = user;
  return (
    <div className="bg-zinc-300 p-7 rounded-2xl mt-24 space-y-5 shadow-xl">
      <h1 className="text-5xl">Name:{name}</h1>
      <h2 className="text-4xl">Username:{username}</h2>
      <h3 className="text-3xl">Website:{website}</h3>
      <h4 className="text-2xl">E-mail:{email}</h4>
      <Link className="bg-blue-300 p-2 rounded-md" to={`/users/${id}`}>
        Show Details
      </Link>
    </div>
  );
};

export default User;
