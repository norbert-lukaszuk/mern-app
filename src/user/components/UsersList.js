import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";
const UsersList = ({ users }) => {
  if (!users.length) {
    return (
      <div className="center">
        <h2>No users yet</h2>;
      </div>
    );
  } else {
    return (
      <ul className="users-list">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </ul>
    );
  }
};

export default UsersList;
