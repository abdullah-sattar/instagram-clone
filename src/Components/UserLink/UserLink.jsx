import React from 'react';
import "./UserLink.scss";
import { Link } from 'react-router-dom';

const UserLink = (props) => {
    const {name, title, pic} = props;
    console.log(pic);
  return (
    <Link to={`/${name}`}>
        <div className='userLink'>
            <img src={pic} alt="" />
            <div className="userLink__info">
                <p>{name}</p>
                <p>{title}</p>
            </div>
        </div>
    </Link>
  )
}

export default UserLink