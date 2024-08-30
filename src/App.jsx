import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [quote, setQuote] = useState('');
  // const [author, setAuthor] = useState('');

  // Function to fetch a random quote  
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      // setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  // Function to generate a random background image URL
  const getRandomBackgroundImage = () => {
    // Replace this array with your own image URLs
    const backgrounds = [
      "https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/37728/pexels-photo-37728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/19869248/pexels-photo-19869248/free-photo-of-sun-on-yellow-sky-over-calm-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/20408466/pexels-photo-20408466/free-photo-of-admiring-the-peak-district.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3255761/pexels-photo-3255761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5618007/pexels-photo-5618007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2909083/pexels-photo-2909083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1212601/pexels-photo-1212601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1631065/pexels-photo-1631065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/464391/pexels-photo-464391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3694711/pexels-photo-3694711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8784465/pexels-photo-8784465.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/12277196/pexels-photo-12277196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1486902/pexels-photo-1486902.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/65322/pexels-photo-65322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2236703/pexels-photo-2236703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1454794/pexels-photo-1454794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/20518610/pexels-photo-20518610/free-photo-of-pink-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/15440282/pexels-photo-15440282/free-photo-of-mountains-above-clouds.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    
    ];
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomIndex];
  };

  // Load a random background image and fetch a quote on initial render
  useEffect(() => {
    setBackgroundImage(getRandomBackgroundImage());
    fetchQuote();
  }, []);

  // Function to handle generating a new quote and background image
  const generateNewQuote = () => {
    setBackgroundImage(getRandomBackgroundImage());
    fetchQuote();
  };

   
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="quote-container"> 
        <div className="quote">{quote}</div>
         {/* <div className="author">- {author}</div>  */}
        <button onClick={generateNewQuote}> Next </button>
      </div>
     </div>
  );
}

export default App;
