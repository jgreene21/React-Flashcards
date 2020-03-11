import React from "react";
import { Form, } from "semantic-ui-react";

class FlashcardForm extends React.Component {
  state = { front: "", back: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    // Call a function to add a contact to state
    // Where should this function be defined???
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Question" 
            placeholder="Question" 
            name="front" 
            value={this.state.front} 
            onChange={this.handleChange}
          /><br />
          <Form.Input 
            fluid 
            label="Answer" 
            placeholder="Answer" 
            name="back" 
            value={this.state.back} 
            onChange={this.handleChange}
          />
          <Form.Button style={{padding: "25px", color: "blue"}}>Submit</Form.Button>
        </Form.Group>
      </Form>
    )  
  }
}

export default FlashcardForm;