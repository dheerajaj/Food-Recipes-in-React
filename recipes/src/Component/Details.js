import React from 'react';

const Details = ({ show, item, onClose }) => {
  if (!show) {
    
    return null;
  }

  return (
    <div>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            X
          </button>
          <div className="inner-box">
            <img src={item.recipe.image} alt="" />
            <div className="info">
              <h1 className='label'>Name: <u> {item.recipe.label}  </u></h1>
              <h3>Diet Label: {item.recipe.dietLabels}</h3>
              
              <h4>Cuisine Type:-{item.recipe.cuisineType}</h4>
              <h4>Dish Type:-{item.recipe.dishType}</h4>
              <h4>Meal Type:-{item.recipe.mealType}</h4>
              <p>Total Time:-{item.recipe.totalTime}</p>

              <br />
              <a href={item.recipe.url}>
                <button>More</button>
              </a>
            </div>
          </div>
          <ul className="ingredient">Ingredients Required :-
          <br></br>
            {item.recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
              
              &emsp;&emsp;{ingredient.text}
              &emsp;&emsp;Quantity:-{ingredient.quantity}
              <span>{ingredient.measure}</span><br></br>
              </li>
            
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
