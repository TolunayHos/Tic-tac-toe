import { useEffect, useState } from "react";
import "./App.scss";
import Box from "./components/Box";
import Confetti from "react-confetti";

function App() {
  const [lastUsedLetter, setLastUsedLetter] = useState("");
  const [key, setKey] = useState(); //Which index does the letter have?
  const [trackOfLetters, setTrackOfLetters] = useState(
    Array.from(Array(9).keys())
  ); //array with 9 items so we can replace items with letters according to their index
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const getLastUsedLetter = (letter) => {
    //Helps us use the next word
    setLastUsedLetter(letter);
  };

  const setKeyFunc = (key) => {
    setKey(key);
  };

  const winningIndexOrders = [
    //If any letters match in this order, that latter wins
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //Checking if X or O satisfying winningIndexOrders - if so we declare win, if not we say no winner
  const checkWinner = (trackOfLetters) => {
    const winnerFound = winningIndexOrders.some((order) => {
      if (
        trackOfLetters[order[0]] === trackOfLetters[order[1]] &&
        trackOfLetters[order[1]] === trackOfLetters[order[2]]
      ) {
        setWinner(trackOfLetters[order[0]]);
        return true;
      }
    });
    setGameOver(winnerFound);

    // check if end of the game and no winner is found
    if (!winnerFound) {
      setGameOver(
        trackOfLetters.every((letter) => letter === "X" || letter === "O")
      );
    }
  };

  useEffect(() => {
    if (lastUsedLetter !== "" || key !== undefined) {
      //Replacing the array item with the letter in accordance with it's index
      let copyOfTrackOfLetters = [...trackOfLetters];
      copyOfTrackOfLetters[key] = lastUsedLetter;
      setTrackOfLetters(copyOfTrackOfLetters);
      //Checking if there's any winner after every input
      checkWinner(copyOfTrackOfLetters);
    }
  }, [lastUsedLetter]);

  //Restart the game after someone wins
  const restartGame = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div>
          <h2>Tic Tac Toe</h2>
        </div>
        <div className={gameOver === true ? "overlay" : null}>
          {gameOver === true && (
            <div className="game--result">
              <h4>{winner !== "" ? `${winner} WON THE GAME` : "NO WINNER"}</h4>
              <i className="redo icon huge" onClick={() => restartGame()} />
              {winner !== "" && <Confetti width={1800} height={700} />}
            </div>
          )}
        </div>
        <div className="vertical--line">
          <Box
            getLastUsedLetter={getLastUsedLetter}
            lastUsedLetter={lastUsedLetter}
            indexOfBlock={"0"}
            setKeyFunc={setKeyFunc}
          />
          <Box
            getLastUsedLetter={getLastUsedLetter}
            lastUsedLetter={lastUsedLetter}
            indexOfBlock={"1"}
            setKeyFunc={setKeyFunc}
          />
          <Box
            getLastUsedLetter={getLastUsedLetter}
            lastUsedLetter={lastUsedLetter}
            indexOfBlock={"2"}
            setKeyFunc={setKeyFunc}
          />
        </div>
        <div className="vertical--line">
          <Box
            getLastUsedLetter={getLastUsedLetter}
            lastUsedLetter={lastUsedLetter}
            indexOfBlock={"3"}
            setKeyFunc={setKeyFunc}
          />
          <Box
            getLastUsedLetter={getLastUsedLetter}
            lastUsedLetter={lastUsedLetter}
            indexOfBlock={"4"}
            setKeyFunc={setKeyFunc}
          />
          <Box
            getLastUsedLetter={getLastUsedLetter}
            lastUsedLetter={lastUsedLetter}
            indexOfBlock={"5"}
            setKeyFunc={setKeyFunc}
          />
        </div>
        <div className="vertical--line">
          <Box
            getLastUsedLetter={getLastUsedLetter}
            lastUsedLetter={lastUsedLetter}
            indexOfBlock={"6"}
            setKeyFunc={setKeyFunc}
          />
          <Box
            getLastUsedLetter={getLastUsedLetter}
            lastUsedLetter={lastUsedLetter}
            indexOfBlock={"7"}
            setKeyFunc={setKeyFunc}
          />
          <Box
            getLastUsedLetter={getLastUsedLetter}
            lastUsedLetter={lastUsedLetter}
            indexOfBlock={"8"}
            setKeyFunc={setKeyFunc}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
