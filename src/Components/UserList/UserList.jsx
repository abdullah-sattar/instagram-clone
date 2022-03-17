import React from "react";
import UserLink from "../UserLink/UserLink";

const UserList = (props) => {
  const { user } = props;

 
  return <div> {user.map((user) => {
    return <UserLink name={user.name} title={user.title} />
  })}
</div>;
};

export default UserList;
