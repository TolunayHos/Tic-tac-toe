import { useEffect, useState } from "react";
import "../styling/Box.scss";

const Box = (props) => {
  const [letter, setLetter] = useState("");

  const { getLastUsedLetter, lastUsedLetter, setKeyFunc, indexOfBlock } = props;

  const letterFunc = () => {
    //Setting the next letter while making sure letter can't be changed  once it set
    if (letter === "") {
      lastUsedLetter === "X" ? setLetter("O") : setLetter("X");
    } else {
      return;
    }
  };

  useEffect(() => {
    //Update LastUsedLatter in app everytime letter changes
    getLastUsedLetter(letter);
    setKeyFunc(indexOfBlock);
  }, [letter]);

  return (
    <div className="Wrapper">
      <div className="Box" onClick={() => letterFunc()}>
        <h1>{letter}</h1>
      </div>
    </div>
  );
};

export default Box;
