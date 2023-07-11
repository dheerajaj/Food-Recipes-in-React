import React, { useState } from "react";
import Details from "./Details";

function Card({ recipe }) {
  const [show, setShow] = useState(false);
  const [recipeItem, setItem] = useState(null);

  const handleCardClick = (item) => {
    setShow(true);
    setItem(item);
  };

  const handleClose = () => {
    setShow(false);
  };

  if (recipe && recipe.length > 0) {
    return (
      <div>
        {recipe.map((item) => (
          <div
            className="card"
            key={item.recipe.label}
            onClick={() => handleCardClick(item)}
          >
            <img src={item.recipe.image} alt="" />
            <div className="details">
              <h3 className="title">Name: {item.recipe.label}</h3>
              <h4 className="diet">Diet Label: {item.recipe.dietLabels}</h4>
            </div>
          </div>
        ))}
        {show && (
          <Details show={show} item={recipeItem} onClose={handleClose} />
        )}
      </div>
    );
  }

  return null;
}

export default Card;
