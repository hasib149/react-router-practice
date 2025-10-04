import React from "react";

const User = ({ user }) => {
  console.log(user);
  const { name, username, website, email } = user;
  return (
    <div className="bg-zinc-300 p-7 rounded-2xl mt-24">
      <h1 className="text-5xl">{name}</h1>
      <h2 className="text-4xl">{username}</h2>
      <h3 className="text-3xl">{website}</h3>
      <h4 className="text-2xl">{email}</h4>
    </div>
  );
};

export default User;
