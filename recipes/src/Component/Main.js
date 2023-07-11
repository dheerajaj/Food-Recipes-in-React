import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Pagination from './Pagination';


function Main() {
  const [search, setSearch] = useState('');
  const [recipeData, setRecipeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); 

  const searchRecipe = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${search}&app_id=03772fa2&app_key=be3af6637cd3e810e74391368e218459`
      )
      .then((res) => {
        setRecipeData(res.data.hits);
        console.log(res.data.hits);
      })
      .catch((err) => console.log(err));
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipes = recipeData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchRecipe();
    }
  };

  return (
    <div>
      <div className='input-field'>
        <input 
          type='text'
          placeholder='Find Your Recipe..'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        /><br></br>
        <button className='search' onClick={searchRecipe}>Search</button>
      </div>
      <div className='container'>
        <Card recipe={currentRecipes} />
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={recipeData.length}
        paginate={paginate}
      />
    
    </div>
  );
}

export default Main;
