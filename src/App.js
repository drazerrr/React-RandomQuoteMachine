import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
function App() {
  const [quote, setQuote] = useState("");
    const getQuote = () => {
       fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);    
        setQuote(data[randomNum]);
    })
    
  };
   useEffect(() =>{ 
   getQuote();},[]);
   let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
      let colorran = Math.floor(Math.random() * colorArray.length);
   
  
  return (
    <div className="container-fluid" style={{backgroundColor: colorArray[colorran]}}>
    <div id="quote-box">
        <p style={{color: colorArray[colorran]}} id="text">
        <i class="fa-solid fa-quote-left"></i> {quote.text}
        </p>
        <p style={{color: colorArray[colorran]}} id='author'>- {quote.author || "No author"}</p>
        <button style={{backgroundColor: colorArray[colorran]}} id='new-quote' onClick={() => getQuote()}>New quote</button>
        <a style={{backgroundColor: colorArray[colorran]}}  href={"http://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent(
          '"' + quote.text + '" ' + quote.author
  )} rel='noreferrer' id="tweet-quote" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
    </div>
    </div>
  );
}

export default App;
