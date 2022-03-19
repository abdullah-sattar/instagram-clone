import React from "react";
import "./UserStats.scss";

const UserStats = (props) => {
  const { posts, followers, following } = props;

  return <div className="stats">
    <div className="stats__wrapper">
      <p className="stats__stat">{posts}</p>
      <p>posts</p>
    </div>
    <div className="stats__wrapper">
      <p className="stats__stat">{followers}</p>
      <p>followers</p>
    </div>
    <div className="stats__wrapper">
      <p className="stats__stat">{following}</p>
      <p>following</p>
    </div>
  </div>;
};

export default UserStats;
