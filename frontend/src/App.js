import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import Image from './components/Image'
import React from 'react';

function App() {
  /**
   * Adding state to the search component 
   * updates word anything there's a change in the input
   */
  let [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    // prevent reload of page when search button is clicked
    e.preventDefault();
    console.log(word);
  };

  // const picture = {
  //   '1': "./Images/Image1"
  // }

  return (
    <div className="App">
      <Header />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
      <Image />
    </div>
  );
}

export default App;