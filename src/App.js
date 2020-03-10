import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Header, Grid, } from 'semantic-ui-react';
import Flashcards from './Flashcards';


class App extends React.Component {
  state = {
    flashcards: [
      {id:1, front:"What is 10 * 2?", back:"20"},
      {id:2, front:"What is 400 - 100?", back:"300"},
      {id:3, front:"What is 75 + 25?", back:"100"},
      {id:4, front:"What is 16 / 2?", back:"8"},
      {id:5, front:"What is 4 ^ 2?", back:"16"},
      {id:6, front:"What is 2 * 3 + 5?", back:"11"},
    ]
  };

mapFlashcards = () => {
  return(
    this.state.flashcards.map(flashcard => (
      <Flashcards key={flashcard.id} flashcard={{...flashcard}} />
    ))
  )
}

removeFlashcard = (id) => {
  const flashcards = this.state.flashcards.filter( flashcard => {
    if (flashcard.id !== id)
      return flashcard 
  });
  this.setState({ flashcards: [...flashcards], })
};




  render() {
  return (
    <Container>
      <div>
      <Header textAlign= "center" as='h1'>Math Flashcards</Header>
      <hr />
      </div>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              {this.mapFlashcards()} 
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Container>
   
  );
 }
}

export default App;
