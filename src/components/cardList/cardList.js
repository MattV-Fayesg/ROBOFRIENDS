import React from "react";
import Card from "./card/card";

const CardList = ({ robots }) => {
  //looping through robots to generate cards
  const cardComponent = robots.map((robot, i) => {
    return (
      <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
