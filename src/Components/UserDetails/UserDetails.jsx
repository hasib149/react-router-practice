import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  console.log(user);
  const { phone } = user;
  return (
    <div>
      <div className="border p-5 rounded-xl bg-orange-300 space-y-8">
        <h2 className="text-center text-xl">User details here</h2>
        <p>Phone Number:{phone}</p>
      </div>
    </div>
  );
};

export default UserDetails;
