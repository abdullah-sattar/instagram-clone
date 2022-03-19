import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import UserBio from "../UserBio/UserBio";
import UserStats from "../UserStats/UserStats";
import UserImages from "../UserImages/UserImages";
import UserHighlights from "../UserHighlights/UserHighlights";
import ImgMenu from "../ImgMenu/ImgMenu";

const UserProfile = (props) => {
  const { users } = props;
  const { name } = useParams();
  const [userData, setUserData] = useState([]);

  console.log(name)

  useEffect(() => {
    setUserData(
      users.filter((user) => {
        return user.name === name;
      })
    );
  }, [name, users]);

  console.log(userData)

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
            <UserHighlights highlights={data.highlights}/>
            <ImgMenu name={name}/>
            <UserImages images={data.images} />
          </div>
        );
      })}
    </div>
  );
};

export default UserProfile;
