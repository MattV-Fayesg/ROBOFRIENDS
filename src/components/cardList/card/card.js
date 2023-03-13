import React from "react";

const Card = (props) => {
  const { name, email } = props;
  return (
    <div className="tc dib br3 pa3 ma2 grow shadow-3 ">
      <img
        className="grow bg-orange br3 ma2 grow shadow-1"
        alt="robot"
        src={`https://robohash.org/${props.id}?180x180`}
      />
      <div className=" br3 pa3 ma2 grow shadow-4">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
