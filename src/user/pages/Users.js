import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    { id: 1, image: "street.jpg", name: "John", placeCount: 5 },
    { id: 2, image: "church.jpg", name: "Edward", placeCount: 3 },
    { id: 3, image: "arena.jpg", name: "Tomek", placeCount: 11 },
  ];
  return (
    <div>
      <UsersList users={USERS} />
    </div>
  );
};

export default Users;
