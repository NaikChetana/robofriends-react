import React from "react";
import { Card } from "./Card";

export const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error("some error");
  // }

  return (
    <>
      {robots.map((user) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          ></Card>
        );
      })}
    </>
  );
};
