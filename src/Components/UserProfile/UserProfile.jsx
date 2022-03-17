import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import UserBio from "../UserBio/UserBio";
import UserStats from "../UserStats/UserStats";
import UserImages from "../UserImages/UserImages";

const UserProfile = (props) => {
  const { users } = props;
  const { name } = useParams;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(
      users.filter((user) => {
        return user.name === name;
      })
    );
  }, [name, users]);

  return (
    <div>
      {userData.map((data) => {
        return (
          <div>
            <UserBio
              bio={data.bio}
              name={data.name}
              pic={data.profile_pic}
            />
            <UserStats
              posts={data.posts}
              followers={data.followers}
              following={data.following}
            />
            <UserImages images={data.images} />
          </div>
        );
      })}
    </div>
  );
};

export default UserProfile;
