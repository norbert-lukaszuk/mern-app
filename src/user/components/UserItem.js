import React from "react";
import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";
import { Link } from "react-router-dom";
const UserItem = ({ user }) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <Link to={`${user.name}/places`}>
          <div className="user-item__image">
            <Avatar image={user.image} alt={user.name} />
          </div>
          <div className="user-item__info">
            <h2>{user.name}</h2>
            <h3>
              {user.placeCount} {user.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
