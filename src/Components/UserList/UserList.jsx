import React from "react";
import UserLink from "../UserLink/UserLink";

const UserList = (props) => {
  const { user } = props;

  console.log(user);
  return <div> {user.map((user) => {
    return <UserLink pic={user.profile_pic} name={user.name} title={user.bio.title} />
  })}
</div>;
};

export default UserList;
