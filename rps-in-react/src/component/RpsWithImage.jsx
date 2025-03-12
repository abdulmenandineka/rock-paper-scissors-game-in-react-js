import React, { useState } from "react";
import "./style/rps.css";
import rock from "./img/rock.jpg";
import paper from "./img/paper.jpg";
import scissors from "./img/scissors.jpg";

function RpsWithImg() {
  let [playerMove, setplayerMove] = useState(""),
    [computerMove, setComputerMove] = useState(""),
    [result, setResult] = useState(""),
    [score, setScore] = useState({ win: 0, tie: 0, lose: 0 }),
    moveImages = {
      rock: rock,
      paper: paper,
      scissors: scissors,
    };

  function playGame(playerMoveP) {
    let random = ["rock", "paper", "scissors"],
      compMove = random[Math.floor(Math.random() * 3)];
    setplayerMove(playerMoveP);
    setComputerMove(compMove);

    if (playerMoveP === compMove) {
      setResult("tie");

      setScore((prevScore) => {
        return { ...prevScore, tie: prevScore.tie + 1 };
      });
    } else if (
      (playerMoveP === "rock" && compMove === "scissors") ||
      (playerMoveP === "paper" && compMove === "rock") ||
      (playerMoveP === "scissors" && compMove === "paper")
    ) {
      setResult("you win");
      setScore((prevScore) => ({ ...prevScore, win: prevScore.win + 1 }));
    } else {
      setResult("you lose");
      setScore((prevScore) => ({ ...prevScore, lose: prevScore.lose + 1 }));
    }

    // console.log(playerMove, computerMove,result);
  }
  return (
    <>
      <div className="container">
        <h1>rock paper scissors game</h1>

        <div className="btnDiv">
          <button
            onClick={() => {
              playGame("rock");
            }}
          >
            {" "}
            <img src={rock} />{" "}
          </button>
          <button
            onClick={() => {
              playGame("paper");
            }}
          >
            <img src={paper} />
          </button>
          <button
            onClick={() => {
              playGame("scissors");
            }}
          >
            <img src={scissors} />
          </button>
        </div>

        <section>
          <div className="resultDiv">
            <div id="result-img">
              <p>
                <span>player :</span>{" "}
                <img src={moveImages[playerMove]} alt={playerMove} />
              </p>
              <p>
                <span>computer :</span>{" "}
                <img src={moveImages[computerMove]} alt="" />
              </p>
            </div>
            <p className="result">
              result : <span className="resultspan">{result}</span>
            </p>
          </div>

          <div className="scoreDiv">
            <p>
              win : <span>{score.win}</span>
            </p>
            <p>
              tie : <span>{score.tie}</span>
            </p>
            <p>
              lose : <span>{score.lose}</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default RpsWithImg;
