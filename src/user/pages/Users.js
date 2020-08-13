import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://images.pexels.com/photos/23876/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
      name: "John",
      placeCount: 5,
    },
    {
      id: "u2",
      image:
        "https://images.pexels.com/photos/5186/person-woman-coffee-cup.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
      name: "Lily",
      placeCount: 3,
    },
    {
      id: "u3",
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      name: "Tomek",
      placeCount: 11,
    },
  ];
  return (
    <div>
      <UsersList users={USERS} />
    </div>
  );
};

export default Users;
