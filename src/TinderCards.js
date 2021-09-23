import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import Axios from "./axios.js";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get("/tinder/cards");
      setPeople(response.data);
    }
    fetchData();
  }, []);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_container">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              onSwipe={(dir) => onSwipe(dir)}
              onCardLeftScreen={() => onCardLeftScreen(person.name)}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
