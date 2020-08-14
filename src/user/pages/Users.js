import React from "react";
import UsersList from "../components/UsersList";
import { v4 as uuid } from "uuid";

const Users = () => {
  const USERS = [
    {
      id: uuid(),
      image:
        "https://images.pexels.com/photos/23876/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
      name: "John",
      placeCount: 5,
    },
    {
      id: uuid(),
      image:
        "https://images.pexels.com/photos/5186/person-woman-coffee-cup.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
      name: "Lily",
      placeCount: 3,
    },
    {
      id: uuid(),
      image:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      name: "Tomek",
      placeCount: 11,
    },
    {
      id: uuid(),
      image:
        "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "Adrian",
      placeCount: 8,
    },
  ];
  return (
    <div>
      <UsersList users={USERS} />
    </div>
  );
};

export default Users;
