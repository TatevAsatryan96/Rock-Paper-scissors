import React from "react";

import GameOption from "../../components/GameOptions/GameOptions";
import Header from "../Header/Header";
import Button from "../../components/Button/Button";
import getGameResult from "../../getGameResults";
import PaperIcon from "../../Icon/PaperIcon";
import ScissorsIcon from "../../Icon/ScisorsIcon";
import RockIcon from "../../Icon/RockIcon";

import "./Game.scss";

const choice = {
  paper: "paper",
  scissors: "scissors",
  rock: "rock",
};

const optionsMap = {
  paper: {
    icon: PaperIcon,
    color: "#5671f5",
  },
  scissors: {
    icon: ScissorsIcon,
    color: "#eca922",
  },
  rock: {
    icon: RockIcon,
    color: "#dd405d",
  },
};

const initialState = {
  userSelection: null,
  randomSelection: null,
  isTimerOn: false,
  timer: 3,
  winnerText: "",
};

class Game extends React.Component {
  state = {
    ...initialState,
    currentScore: 0,
  };

  restart = () => {
    this.setState({
      ...initialState,
      currentScore: this.state.currentScore,
    });
  };

  randomChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomChoice = Object.keys(choice)[randomIndex];
    return randomChoice;
  };

  play = (selection) => {
    this.setState({
      userSelection: selection,
      isTimerOn: true,
    });
    const randomChoice = this.randomChoice();
    const winnerText = getGameResult(selection, randomChoice);

    this.setState({
      randomSelection: randomChoice,
      winnerText,
    });
  };

  componentDidUpdate() {
    if (this.state.timer === 3 && this.state.userSelection) {
      this.intervalId = setInterval(() => {
        if (this.state.timer === 1) {
          let score = this.state.currentScore;
          if (this.state.winnerText === "You Win") {
            score += 1;
          } else if (this.state.winnerText === "You Loose") {
            score -= 1;
          }
          clearInterval(this.intervalId);
          this.setState({
            isTimerOn: false,
            currentScore: score,
          });
        }
        this.setState({
          timer: this.state.timer - 1,
        });
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const {
      currentScore,
      userSelection,
      randomSelection,
      isTimerOn,
      timer,
      winnerText,
    } = this.state;
    return (
      <div className="app-game">
        <Header currentScore={currentScore} />
        {!userSelection ? (
          <div className="app-game__content">
            <GameOption
              Icon={optionsMap[choice.paper].icon}
              color={optionsMap[choice.paper].color}
              onClick={() => {
                this.play(choice.paper);
              }}
            />
            <GameOption
              Icon={optionsMap[choice.scissors].icon}
              color={optionsMap[choice.scissors].color}
              onClick={() => {
                this.play(choice.scissors);
              }}
            />
            <GameOption
              Icon={optionsMap[choice.rock].icon}
              color={optionsMap[choice.rock].color}
              onClick={() => {
                this.play(choice.rock);
              }}
            />
          </div>
        ) : (
          <div>
            <GameOption
              Icon={optionsMap[userSelection].icon}
              color={optionsMap[userSelection].color}
              onClick={() => {}}
            />
            {isTimerOn ? (
              <div className="app-game__timer">{timer}</div>
            ) : (
              <div>
                <span className="app-game__winnerText">{winnerText}</span>
                <Button onClick={this.restart}>Play Again</Button>
                <GameOption
                  Icon={optionsMap[randomSelection].icon}
                  color={optionsMap[randomSelection].color}
                  onClick={() => {}}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Game;