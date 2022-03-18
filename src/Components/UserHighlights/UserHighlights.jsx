import React from "react";
import "./UserHighlights.scss";

const UserHighlights = (props) => {
  const { highlights } = props;

  const displayHighlights = Object.values(highlights).map((highlight) => {
    return (
      <>
        <div className="highlights__wrapper">
            <img src={highlight.img} alt="" />
            <p>{highlight.title}</p>
        </div>
      </>
    );
  });
  return (
    <div className="highlights">
      {displayHighlights}
    </div>
  );
};

export default UserHighlights;
