# Clicky Game

This is a react memory game. The goal of the game is to click all the images rendered to the page without clicking on the same image, twice. The application keeps track of the user's score. The user's score should increments when clicking an image for the first time. The user's score is reset to 0 if they click the same image more than once. Every time an image is clicked, the images rendered to the page shuffle themselves in a random order. Once the user's score is reset after an incorrect guess, the game restarts.

## Technologies:

- React
- Javascript


### Demo of app:

![Demo](./public/images/ClickyGame.gif)

### Button Click
```
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
```
### Installation:

```
npm install
```

### Usage:

```
node server.js
```

## Author

### Nadine Bundschuh

- Github: nadineb1160
- [GitHub URL](https://github.com/nadineb1160)
- [LinkedIn](https://www.linkedin.com/in/nadine-bundschuh-731233b9)
