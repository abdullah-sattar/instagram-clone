import React from 'react'
import "./UserImages.scss";

const UserImages = (props) => {
  const {images} = props;

  const displayImgs = Object.values(images).map(img => {
    return <img src={img} alt=""/>
  })
  return (
    <div className="imgs">{displayImgs}</div>
  )
}

export default UserImages