import React, { Component } from 'react';
// import PictureContainer from "./components/PictureContainer";
import { Container} from "./components/Grid";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import './App.css';
import pictures from "./photos.json"
import PictureContainer from './components/PictureContainer';
import Picture from "./components/Picture";


class App extends Component {
  state = {
    pictures,
    seenPictures: [],
    start: false,
    correct: false,
    score: 0,
    topScore: 0

  };


  shuffle = () => {
    // Shuffle pictures
    this.state.pictures.sort(() => Math.random() - 0.5);
  }

  update = () => {
    // Increase Score
    this.setState({score: this.state.score + 1});
    // Check Top Score
    this.checkTopScore();
    // Shuffle board
    this.shuffle();
  }

  checkTopScore = () => {
    // If high score beat
    if (this.state.score > this.state.topScore) {
      // Update high score
      this.setState({topScore: this.state.score});
    }
  }

  reset = () => {
    // Shuffle cards
    this.shuffle();
    // Start -> false
    this.setState( { start: false });
    // Reset score
    this.setState({score: 0});
    // Reset pictureIds
    this.setState({seenPictures: []})

  }

  handleOnClick = (id) => {
    // Start game 
    if (this.state.seenPictures.length === 0) {
      this.setState({ start: true });
    }
    // Check picture previously clicked
    if (this.state.seenPictures.includes(id)) {
      // Set correct to false
      this.setState({ correct: false });
      // Reset
      this.reset();
    } else {
      // Clicked new picture
      let pics = this.state.seenPictures;
      pics.push(id);
      this.setState({ seenPictures: pics});
      this.setState({ correct: true });
      // Update score and board
      this.update();
    }
  }

  render() {
    return (
      <Container>
        <Nav
          start={this.state.start}
          correct={this.state.correct}
          score={this.state.score}
          topScore={this.state.topScore}
        />

        <PictureContainer>

          {this.state.pictures.map(picture => (
            <Picture
              id={picture.id}
              key={picture.key}
              image={picture.image}
              onClick={this.handleOnClick}
            />
          ))}
        </PictureContainer>

      </Container>
    )
  }
}

export default App;
