import React from "react";

function TapeItem(props) {
  return (
    <div>
      <img src="props.picture_url" alt="" />
      <p>{`${props.country}→${props.city}`}</p>
      <p>{`${props.description}`}</p>
      <p>{`$ ${props.price}/month`}</p>
    </div>
  );
}

export default TapeItem;
