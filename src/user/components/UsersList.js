import React from "react";

const UsersList = ({ users }) => {
  if (!users) {
    return <h2>No users yet</h2>;
  } else {
    return (
      <div>
        {users.map((user) => {
          return <h2>user.name</h2>;
        })}
      </div>
    );
  }
};

export default UsersList;
