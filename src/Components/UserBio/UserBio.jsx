import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./UserBio.scss";

const UserBio = (props) => {
  const { bio, name, pic } = props;

  const showTitle = () => {
    return bio.title !== "" ? "visible" : "hidden";
  };

  const showSubTitle = () => {
    return bio.subtitle !== "" ? "visible" : "hidden";
  };

  const showText = () => {
    return bio.text !== "" ? "visible" : "hidden";
  };

  const showLink = () => {
    return bio.link !== "" ? "visible" : "hidden";
  };

  const textLines = Object.values(bio.text).map((text) => {
    return <p className={`bio__info--${showText(bio)}`}>{ text }</p>;
  });

  return (
    <div>
      <div className="profile-container">
        <img src={pic} alt="profile-pic" />
        <div className="btn-container">
          <h1>{name}</h1>
          <button>Follow</button>
          <button>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
      <div className="bio-container">
        <p className={`bio__info--${showTitle(bio)}`}>{bio.title}</p>
        <p className={`bio__info--${showSubTitle(bio)}`}>{bio.subtitle}</p>
        {textLines}
        <a href={bio.href}>
          <p className={`bio__info--${showLink(bio)}`}>{bio.link}</p>
        </a>
      </div>
    </div>
  );
};

export default UserBio;
