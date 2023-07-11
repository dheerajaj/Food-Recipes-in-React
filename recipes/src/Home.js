
import Main from './Component/Main';
import React, { useState } from 'react';
import './Home.css'

function Home() {
  const [showMain, setShowMain] = useState(false);

  const handleClick = () => {
    setShowMain(true);
  };
  return (
    <div>
    
      <div className='logo'>
        <h1><span>F</span>ood <span>R</span>ecipe <span>F</span>inder</h1>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <div className='discription'>
      <div  className='about'>
       <p>&emsp;&#8227; &emsp;Hi ! Welcome to Recipe Finder.</p>
       <p>&emsp;&#8227; &emsp;Here you can find delicious recipes...healthier recipes.</p>
       <p>&emsp;&#8227; &emsp;<b></b>So, what are you waiting for just <u>Hit on the search button</u> to begain the search.</p>
       </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {!showMain &&
          <button  className='search' onClick={handleClick}>Search</button>}
        {showMain && <Main></Main>}
       </div>

       <div className='search-bar'>
       

     
       </div>
       </div>

    </div>
  )
}

export default Home
