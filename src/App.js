import React from 'react';
import {Container, Row, Col, Modal, Form, Button, Navbar} from 'react-bootstrap'
import CharacterBar from './components/character-bar';
import Comparison from './components/comparison';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCharacterModal: false,
      charModalName: '',
      characters: [],
      nextID: 0
    }
  } 
  
  handleCreateCharacter = (e) => { 
    e.preventDefault();
    let charsCopy = JSON.parse(JSON.stringify(this.state.characters));
    charsCopy.push({
      name: this.state.charModalName,
      attacks: [],
      id: this.state.nextID
    })
    this.setState({
      showCharacterModal: false,
      charModalName: '',
      characters: charsCopy,
      nextID: ++this.state.nextID
    }, ()=> {
      // console.log(this.state)
    })
  }

  handleAddAttack = (e) => {
    e.preventDefault();
    // console.log(e.formData);
    // Need to find the character this weapon belongs to

    var {charId, attackName, firstAttackModifier, firstAttackDamage, secondAttackModifier, secondAttackDamage, thirdAttackModifier, thirdAttackDamage, fourthAttackModifier, fourthAttackDamage} = e.formData;

    let characters = JSON.parse(JSON.stringify(this.state.characters));
    let character = characters.find(c => c.id===charId);

    let attackId=this.state.nextID;

    character.attacks.push({
      attackName, 
      attackId, 
      firstAttackModifier, 
      firstAttackDamage, 
      secondAttackModifier, 
      secondAttackDamage, 
      thirdAttackModifier, 
      thirdAttackDamage, 
      fourthAttackModifier, 
      fourthAttackDamage,
      compare: false
    })

    this.setState({
      characters,
      nextID: ++this.state.nextID
    })
  }


  changeComparison = (attackId, checked) => {
    let characters = JSON.parse(JSON.stringify(this.state.characters));

    for (let character of characters) {
      for (let attack of character.attacks) {
        if (attack.attackId === attackId) {
          attack.compare = checked;
          this.setState({characters})
        }
      }
    }
  }
  

  render() {
    // console.log((new Date()).toLocaleTimeString());
    
    let characters = this.state.characters.map(char => {
      return (
        <CharacterBar 
          char={char} 
          key={char.id} 
          handleAddAttack={this.handleAddAttack}
          changeComparison={this.changeComparison}
        />
      )
    })
    
    let attacks = [];
    for (let char of this.state.characters) {
      for (let attack of char.attacks) {
        if (attack.compare) {
          let attackOut = Object.assign({}, attack, {
            characterName: char.name
          })
          attacks.push(attackOut);
        }
      }
    }


    return (
      <div className="app">
        <TitleBar>
          Attack Comparison
        </TitleBar>
        <div className="add-character-button-div text-center">
          <button 
            className="btn btn-outline-dark add-character-button"
            // data-toggle="modal"
            // data-target="#exampleModal"
            onClick={() => {
              // console.log("shown");
              this.setState({showCharacterModal: true})
            }}
          >
            <h4>+ Add Character +</h4>
          </button>
          <Modal 
            show={this.state.showCharacterModal}
            onHide={()=>{
              // console.log("hidden")
              this.setState({showCharacterModal: false})
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                Create a Character
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                
              </Row>
              
              <Form 
                onSubmit={this.handleCreateCharacter}
              >
                <Form.Group 
                  controlId="CharacterName" 
                  as={Row}
                >
                  <Form.Label 
                    column sm="4"
                    >
                    Character Name
                  </Form.Label>
                  <Col sm="6">
                    <Form.Control
                      type="text"
                      name="CharacterName"
                      required
                      autoComplete="off"
                      placeholder="Character Name"
                      onChange={(e)=>{
                        this.setState({charModalName: e.target.value})
                        // console.log(e.target.value)
                      }}
                      value={this.state.charModalName}
                      />
                  </Col>

                </Form.Group>

                <Button type="submit">
                  Submit
                </Button>
                
              </Form>
            </Modal.Body>
            
          </Modal>
        </div>
        {characters}
        <Comparison 
          characters={this.state.characters} 
          attacks={attacks} 
        />
      </div>
    )
  }
}


function TitleBar(props) {
  return (
    <Navbar className="titlebar">
      <h2>{props.children}</h2>
    </Navbar>
  )
}

export default App;
