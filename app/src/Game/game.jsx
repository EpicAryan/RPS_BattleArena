import { useState } from "react";
function Game() {
  const choices = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("");
  const [computerChoice, setCpmputerChoice] = useState(null);
  const [finalResult, setFinalResult] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handlePlayerChoice = (playerChoice) => {
    setPlayerChoice(playerChoice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setCpmputerChoice(computerChoice);
    let result = "";
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else {
      switch (playerChoice) {
        case "rock":
          result = computerChoice === "scissors" ? "You win!" : "You lose!";
          break;
        case "paper":
          result = computerChoice === "rock" ? "You win!" : "You lose!";
          break;
        case "scissors":
          result = computerChoice === "paper" ? "You win!" : "You lose!";
          break;
      }
    }
    setResult(result);
    switch (result) {
      case "You win!":
        setPlayerScore(playerScore + 1);
        break;
      case "You lose!":
        setComputerScore(computerScore + 1);
        break;
      case "It's a tie!":
        break;
    }
  };

  const handleClick = () => {
    let finalResult = "";
    if (playerScore === computerScore) {
      finalResult = "Draw";
    } else if (playerScore > computerScore) {
      finalResult = "Victory";
    } else {
      finalResult = "Defeat";
    }
    setFinalResult(finalResult);
    setShowResult(true);
  };

  return (
    <>
      <div className="min-h-screen bg-neutral-800">
        <div className="md:container md:mx-auto py-10 min-h-screen flex flex-col items-center justify-center gap-3">
          <h1 className="text-yellow-500 font-bold text-4xl md:text-5xl xl:text-7xl">
            RPS_BATTLEARENA
          </h1>
          <h2 className="text-yellow-200 text-3xl md:text-4xl xl:text-6xl">
            Rock - Paper - Scissors
          </h2>

          <div className="flex gap-4 md:gap-6 xl:gap-8 my-6 md:my-10">
            <button
              onClick={() => handlePlayerChoice("rock")}
              className="border-2 border-white rounded-full text-5xl md:text-8xl xl:text-9xl py-2 md:py-4 xl:py-5 bg-red-700 hover:bg-red-500"
            >
              👊
            </button>
            <button
              onClick={() => handlePlayerChoice("paper")}
              className="border-2 border-white rounded-full text-5xl md:text-8xl xl:text-9xl py-2 md:py-4 xl:py-5 bg-red-700 hover:bg-red-500"
            >
              ✋
            </button>
            <button
              onClick={() => handlePlayerChoice("scissors")}
              className="border-2 border-white rounded-full text-5xl md:text-8xl xl:text-9xl py-2 md:py-4 xl:py-5 bg-red-700 hover:bg-red-500"
            >
              ✌️
            </button>
          </div>
          <div className="text-orange-500 text-3xl md:text-4xl xl:text-5xl flex flex-col items-center gap-2 xl:gap-3 ">
            <div>PLAYER: {playerChoice}</div>
            <div>COMPUTER: {computerChoice}</div>
            <div
              className="uppercase pt-6 text-4xl md-text-5xl xl:text-6xl font-bold"
              style={{ color: result === "You win!" ? "green" : "red" }}
            >
              {result}
            </div>
          </div>
          <div className="text-yellow-500 text-2xl md:text-3xl xl:text-4xl flex flex-col items-center gap-2 xl:gap-3 mt-16">
            <div>
              PlayerScore:
              <span className="text-green-500 ml-2 ">{playerScore}</span>
            </div>
            <div>
              ComputerScore:
              <span className="text-slate-400 ml-2">{computerScore}</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={handleClick}
              className="border-2 rounded-lg xl p-1 border-yellow-600 text-orange-700 bg-yellow-200 text-xl xl:text-3xl font-semibold"
            >
              Final Result
            </button>
            {showResult && (
              <span
                className="text-lg xl:text-2xl uppercase tracking-wide font-bold"
                style={{
                  color:
                    finalResult === "Draw"
                      ? "slategray"
                      : finalResult === "Victory"
                      ? "green"
                      : "red",
                }}
              >
                {finalResult}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
