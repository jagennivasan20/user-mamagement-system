import React from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../components/User/User";
import {deleteUser} from "../../store/actions/user"
import "./Users.css";
const Users = () => {
  const users = useSelector((state) => state.userData.users);
  const dispatch = useDispatch();
  return (
    <div className="users">
      {users.map((user, index) => {
        return (
          <User
            key={index}
            user={user}
            deleteUser={() => dispatch(deleteUser(index))}
          />
        );
      })}
    </div>
  );
};

export default Users;
