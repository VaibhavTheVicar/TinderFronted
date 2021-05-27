import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
    },
    {
        name: "Elon",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
      },
      {
        name: "Elon",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
      }
  ]);
  function swiped(direction, nameToDelete) {
    console.log(`bye ${nameToDelete}`);
  }

  function outOfFrame(nameToDelete) {
    console.log(`They have left, ${nameToDelete}`);
  }

  return (
    <div className="tinderCards">

      <div className="tinderCards__cardContainer">
          
        {people.map((person) => {
            
          return  <>
          <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up","down"]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
        >
            <div className="card" style = {{backgroundImage: `url(${person.url})`}}>
                <h3>{person.name}</h3>
                </div>       
            
        </TinderCard>

        </>
        })}

        
      </div>
    </div>
  );
}

export default TinderCards;
