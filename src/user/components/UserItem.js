import React from "react";

const UserItem = ({ user }) => {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Photo: {user.photo}</p>
      <p>Places: {user.placeCount}</p>
      <hr />
    </div>
  );
};

export default UserItem;
