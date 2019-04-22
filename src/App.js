import React, { Component } from 'react';
import './App.css';
import Container from "./components/container";
import Jumbotron from "./components/jumbotron";
import Score from "./components/score";
import Picture from "./components/pictures";
import characters from "./characters.json";


class App extends Component {

  state = {
    score: 0,
    message: "Click an image to begin!",
    guessedArr: [],
    characters
  }

  // Shuffle Characters
  shuffleCharacters(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleShuffle = () => {
    this.setState({ characters: this.shuffleCharacters(this.state.characters) });
  };

  // Onclick function
  handleClick = id => {
    console.log(id);
    if (this.state.guessedArr.indexOf(id) === -1) {
      this.setState({ guessedArr: this.state.guessedArr.concat(id) })
      this.keepPlaying()
    }
    else {
      this.gameLost()
    }
  };

  // Game not lost!
  keepPlaying () {
    // Won
    if (this.state.guessedArr.length === 11) {
      this.gameWon()
    }
    // Keep guessing
    else {
    this.setState({
      message: "Correct! Guess again.",
      score: this.state.score + 1
    })
    this.handleShuffle()
  }
  }

  // Win function
  gameWon() {
    this.setState({
      score: 0,
      message: "You won!! Click to play again!",
      guessedArr: []
    });
  }

  // Reset function
  gameLost() {
    this.setState({
      score: 0,
      message: "You lost. Click to play again!",
      guessedArr: []
    });
  }

  render() {
    return (
      <Container>
        <Score score={this.state.score} message={this.state.message}></Score>
        <Jumbotron></Jumbotron>
        <div className = "container">
          <div className = "row">
            {this.state.characters.map(character => (
              <Picture
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                handleClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </Container>
    
    )
  }
}

export default App;