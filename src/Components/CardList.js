import React, { Fragment } from "react";
import Card from "./Card.js";

// Destructuring of props = { robots }
const CardList = ({ robots }) => {
  // Card Component List
  return (
    <Fragment>
      <div>
        {robots.map(user => {
          return (
            <Card
              id={user.id}
              name={user.name}
              email={user.email}
              username={user.username}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default CardList;
