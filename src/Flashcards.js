import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import image from './math.jpg'

const Flashcards = ({ flashcard }) => (
  <Card >
    <Card.Content>
    <Image
          floated='right'
          size='mini'
          src={image}
        />
      <Card.Header textAlign="center">{flashcard.front}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <div className= 'ui two buttons'>
        <Button basic color= 'black'>See Answer</Button> 
        <Button basic color='black'>Delete</Button>
      </div>
    </Card.Content>
    <Card.Content>
    <Image
          floated='right'
          size='mini'
          src={image}
        />
      <Card.Header textAlign="center" class="card-body hide">{flashcard.back}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <div className= 'ui two buttons'>
        <Button basic color= 'black'>See Answer</Button> 
        <Button basic color='black'>Delete</Button>
      </div>
    </Card.Content>
  </Card>
);

export default Flashcards;
