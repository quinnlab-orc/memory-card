import "./App.css";
import React from "react";
import bbishop from "./pieces/bbishop.png";
import bking from "./pieces/bking.png";
import bknight from "./pieces/bknight.png";
import bpawn from "./pieces/bpawn.png";
import bqueen from "./pieces/bqueen.png";
import brook from "./pieces/brook.png";
import wbishop from "./pieces/wbishop.png";
import wking from "./pieces/wking.png";
import wknight from "./pieces/wknight.png";
import wpawn from "./pieces/wpawn.png";
import wqueen from "./pieces/wqueen.png";
import wrook from "./pieces/wrook.png";
import github from "./GitHub-Mark-32px.png"

function App() {
  const imageArray = [
    wking,
    wqueen,
    wrook,
    wbishop,
    wknight,
    wpawn,
    bking,
    bqueen,
    brook,
    bbishop,
    bknight,
    bpawn,
  ];

  const [images, setImages] = React.useState(imageArray);
  const [score, setScore] = React.useState(0);
  const [highScore, setHighScore] = React.useState(0);
  const [selected, setSelected] = React.useState([]);

  const handleClick = (img) => {
    for (let i = 0; i < imageArray.length; i++) {
      if (img === imageArray[i]) {
        setSelected([...selected, img]);
        setScore(score + 1);
        isWinner();
        pickTracker(img);
      }
    }

    arrayScrambler();
  };

  const arrayScrambler = () => {
    for (let i = imageArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
      setImages(imageArray);
    }
  };

  const pickTracker = (img) => {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] === img) {
        setImages(imageArray);
        setSelected([]);

        if (score <= highScore) {
          setScore(0);
        } else if (score >= highScore) {
          setHighScore(score);
          setScore(0);
        }
      }
    }
  };

  const isWinner = () => {
    if (score === 11) {
      alert("You won! Congrats")
      setHighScore(12)
    }
  }

  return (
    <div className="App">
      <h1>Memory-Card Game</h1>
      <div> <h3 className="score">Score: {score}</h3><h3 className="score"> Best: {highScore}</h3></div> 
      <div className="pieces">
        {images.map((image) => {
          return (
            <img
              key={image}
              src={image}
              alt="pieces"
              onClick={() => handleClick(image)}
            ></img>
          );
        })}
      </div>
      <img className="github" src={github} alt="https://github.com/quinnlab-orc"></img>
    </div>
  );
}

export default App;
