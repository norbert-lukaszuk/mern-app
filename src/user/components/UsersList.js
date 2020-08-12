import React from "react";
import UserItem from "./UserItem";

const UsersList = ({ users }) => {
  if (!users.length) {
    return <h2>No users yet</h2>;
  } else {
    return (
      <div>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

export default UsersList;
