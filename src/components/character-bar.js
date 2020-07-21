import React, {useState, useRef} from 'react';
import {Container, Row, Col, Modal, Form, Overlay, Tooltip, Button, Navbar, InputGroup} from 'react-bootstrap'

var totalRoll = new RegExp(/^(\d{1,2}d\d{1,2})(\+\d{1,2}d\d{1,2})*([-+]\d{1,2})*$/)

function CharacterBar(props) {
  var [expanded, setExpanded] = useState(false);
  
  return (
    <Container className="character-bar" >
      <Row 
        className="character-bar-heading"
        // as={Row}
      >
        <Col className="ml-0 character-name">
          {props.char.name}
        </Col>
        {/* <Col md="auto"/> */}
        <Col
          // as={Col}
          sm="1"
          className="expand-toggle ml-auto mr-0"  
          // onClick={() => {setExpanded(!expanded)}};
          onClick={()=>{
            setExpanded(!expanded);
          }}
        >
          <h3>
            {expanded ? "-" : "+"}
          </h3>
        </Col>
      </Row>
      {expanded ? <h5 style={{textAlign: 'center'}}> ―Attacks― </h5> : ''}
      {expanded ? props.char.attacks.map(at => {
        return (
          <Attack 
            attack={at} 
            key={at.attackId} 
            changeComparison={props.changeComparison}
          />
        )
      }) : ""}
      {expanded ? <AddAttack 
        handleAddAttack={props.handleAddAttack} 
        char={props.char}
        setExpanded={setExpanded}
      /> : ""}
    </Container>
  )
}

class AddAttack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAttackModal: false,
      attackName: '',
      firstAttackModifier: '',
      firstAttackDamage: '',
      secondAttackModifier: '',
      secondAttackDamage: '',
      thirdAttackModifier: '',
      thirdAttackDamage: '',
      fourthAttackModifier: '',
      fourthAttackDamage: '',
      errors: []
    }
  }

  updateDamage = (key, value) => {
    let updatedErrors = JSON.parse(
      JSON.stringify(this.state.errors)
    );

    let newValue = value.replace(/ /g, '');
    let error;
    
    (newValue.length > 0) ? error = !Boolean(newValue.match(totalRoll)) : error = false

    if (error) {
      if (!updatedErrors.includes(key)) {
        updatedErrors.push(key);
      }
    } else {
      updatedErrors = updatedErrors.filter(e => {
        if (e===key) return false;
        else return true;
      })
    }

    this.setState({
      [key]: value,
      errors: updatedErrors
    })
  }

  clearForm = () => {
    this.setState({
      attackName: '',
      firstAttackModifier: '',
      firstAttackDamage: '',
      secondAttackModifier: '',
      secondAttackDamage: '',
      thirdAttackModifier: '',
      thirdAttackDamage: '',
      fourthAttackModifier: '',
      fourthAttackDamage: '',
      errors: []
    })
  }


  render() {
    return (
      <Container className="add-attack">
        <div className="add-attack-button-div text-center">
          <button 
            className="btn btn-outline-dark add-attack-button"
            // data-toggle="modal"
            // data-target="#exampleModal"
            onClick={() => {
              // console.log("attack modal shown");
              this.setState({showAttackModal: true})
            }}
          >
            <h5>+ Add Attack +</h5>
          </button>
          <br/>
        </div>

        <Modal
          show={this.state.showAttackModal}
          centered
          size="lg"
          // className="modal-lg"
          onHide={()=>{
            // console.log("hidden");
            this.clearForm();
            this.setState({showAttackModal: false})
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Add Attack - {this.props.char.name}
            </Modal.Title>
          </Modal.Header>
          <br/>
          <Container>
            <Form>
              <Form.Group 
                controlId="CharacterName" 
                as={Container}
              >
                <Row>
                  <Form.Label as={Col}>
                    Attack Name
                  </Form.Label>
                  <Col>
                    <Form.Control
                      // sm="6"
                      type="text"
                      name="AttackName"
                      required
                      autoComplete="off"
                      placeholder="Attack Name"
                      value={this.state.attackName}
                      onChange={(e)=>{this.setState({
                        attackName: e.target.value
                      })}}
                      
                    />
                  </Col>
                </Row>
                <Row>
                  First Attack
                </Row>
                <Row>
                  <Form.Label as={AddAttackCol} >
                    Attack Modifier
                  </Form.Label>
                  <AddAttackCol>
                    <Form.Control
                      type="number"
                      name="FirstAttackModifier"
                      autoComplete="off"
                      placeholder="Ex: 3"
                      value={this.state.firstAttackModifier}
                      onChange={(e)=>{this.setState({
                        firstAttackModifier: e.target.value
                      })}}
                    />
                  </AddAttackCol>
                  <Form.Label as={AddAttackCol}>
                    Damage Dice
                  </Form.Label>
                  <AddAttackCol>
                    <Form.Control
                      type="text"
                      name="FirstAttackDamage"
                      autoComplete="off"
                      placeholder="Ex: 2d8 + 1d4 + 5"
                      value={this.state.firstAttackDamage}
                      onChange={(e)=>{this.updateDamage("firstAttackDamage", e.target.value)}}
                    />
                  </AddAttackCol>
                </Row>


                {/* Second Attack */}
                <Row>
                  Second Attack
                </Row>
                <Row>
                  <Form.Label as={AddAttackCol} >
                    Attack Modifier
                  </Form.Label>
                  <AddAttackCol>
                    <Form.Control
                      type="number"
                      name="SecondAttackModifier"
                      autoComplete="off"
                      placeholder="Ex: 3"
                      value={this.state.secondAttackModifier}
                      onChange={(e)=>{this.setState({
                        secondAttackModifier: e.target.value
                      })}}
                    />
                  </AddAttackCol>
                  <Form.Label as={AddAttackCol}>
                    Damage Dice
                  </Form.Label>
                  <AddAttackCol>
                    <Form.Control
                      type="text"
                      name="SecondAttackDamage"
                      autoComplete="off"
                      placeholder="Ex: 2d8 + 1d4 + 5"
                      value={this.state.secondAttackDamage}
                      onChange={(e)=>{this.updateDamage("secondAttackDamage", e.target.value)}}
                    />
                  </AddAttackCol>
                </Row>

                {/* Third Attack */}
                <Row>
                  Third Attack
                </Row>
                <Row>
                  <Form.Label as={AddAttackCol} >
                    Attack Modifier
                  </Form.Label>
                  <AddAttackCol>
                    <Form.Control
                      type="number"
                      name="ThirdAttackModifier"
                      autoComplete="off"
                      placeholder="Ex: 3"
                      value={this.state.thirdAttackModifier}
                      onChange={(e)=>{this.setState({
                        thirdAttackModifier: e.target.value
                      })}}
                    />
                  </AddAttackCol>
                  <Form.Label as={AddAttackCol}>
                    Damage Dice
                  </Form.Label>
                  <AddAttackCol>
                    <Form.Control
                      type="text"
                      name="ThirdAttackDamage"
                      autoComplete="off"
                      placeholder="Ex: 2d8 + 1d4 + 5"
                      value={this.state.thirdAttackDamage}
                      onChange={(e)=>{this.updateDamage("thirdAttackDamage", e.target.value)}}
                    />
                  </AddAttackCol>
                </Row>

                {/* Fourth Attack  */}
                <Row>
                  Fourth Attack
                </Row>
                <Row>
                  <Form.Label as={AddAttackCol} >
                    Attack Modifier
                  </Form.Label>
                  <AddAttackCol>
                    <Form.Control
                      type="number"
                      name="fourthAttackModifier"
                      autoComplete="off"
                      placeholder="Ex: 3"
                      value={this.state.fourthAttackModifier}
                      onChange={(e)=>{this.setState({
                        fourthAttackModifier: e.target.value
                      })}}
                    />
                  </AddAttackCol>
                  <Form.Label as={AddAttackCol}>
                    Damage Dice
                  </Form.Label>
                  <AddAttackCol>
                    <Form.Control
                      type="text"
                      name="FourthAttackDamage"
                      autoComplete="off"
                      placeholder="Ex: 2d8 + 1d4 + 5"
                      value={this.state.fourthAttackDamage}
                      onChange={(e)=>{this.updateDamage("fourthAttackDamage", e.target.value)}}
                    />
                  </AddAttackCol>
                </Row>
                <br/>
                <Row className="justify-conent-md-center">
                  <Col className="text-center">
                    {this.state.errors.length===0 ? <button 
                    className="btn btn-outline-dark"
                    onClick={(e) => {

                      let {attackName, firstAttackModifier, firstAttackDamage, secondAttackModifier, secondAttackDamage, thirdAttackModifier, thirdAttackDamage, fourthAttackModifier, fourthAttackDamage} = this.state;

                      e.formData = {
                        charId: this.props.char.id,
                        attackName,
                        firstAttackModifier,
                        firstAttackDamage,
                        secondAttackModifier,
                        secondAttackDamage,
                        thirdAttackModifier,
                        thirdAttackDamage,
                        fourthAttackModifier,
                        fourthAttackDamage,
                      }
                      this.props.handleAddAttack(e);
                      this.clearForm();
                      this.setState({showAttackModal: false})
                    }}
                    >
                      Add Attack
                    </button> : null}
                    <br/>
                  </Col>
                </Row>
              
              </Form.Group>

              
              
            </Form>
          </Container>

        </Modal>
        
        {/* <Form>
          <Form.Group 
            controlId="CharacterName" 
            as={Container}
          >
            <Row>
              <Form.Label as={Col}>
                Attack Name
              </Form.Label>
              <Col>
                <Form.Control
                  // sm="6"
                  type="text"
                  name="AttackName"
                  required
                  autoComplete="off"
                  placeholder="Attack Name"
                  value={this.state.attackName}
                  onChange={(e)=>{this.setState({
                    attackName: e.target.value
                  })}}
                  
                />
              </Col>
            </Row>
            <Row>
              First Attack
            </Row>
            <Row>
              <Form.Label as={AddAttackCol} >
                Attack Modifier
              </Form.Label>
              <AddAttackCol>
                <Form.Control
                  type="number"
                  name="FirstAttackModifier"
                  autoComplete="off"
                  placeholder="Ex: 3"
                  value={this.state.firstAttackModifier}
                  onChange={(e)=>{this.setState({
                    firstAttackModifier: e.target.value
                  })}}
                />
              </AddAttackCol>
              <Form.Label as={AddAttackCol}>
                Damage Dice
              </Form.Label>
              <AddAttackCol>
                <Form.Control
                  type="text"
                  name="FirstAttackDamage"
                  autoComplete="off"
                  placeholder="Ex: 2d8 + 1d4 + 5"
                  value={this.state.firstAttackDamage}
                  onChange={(e)=>{this.updateDamage("firstAttackDamage", e.target.value)}}
                />
              </AddAttackCol>
            </Row>


            {/* Second Attack */}
            {/* <Row>
              Second Attack
            </Row>
            <Row>
              <Form.Label as={AddAttackCol} >
                Attack Modifier
              </Form.Label>
              <AddAttackCol>
                <Form.Control
                  type="number"
                  name="SecondAttackModifier"
                  autoComplete="off"
                  placeholder="Ex: 3"
                  value={this.state.secondAttackModifier}
                  onChange={(e)=>{this.setState({
                    secondAttackModifier: e.target.value
                  })}}
                />
              </AddAttackCol>
              <Form.Label as={AddAttackCol}>
                Damage Dice
              </Form.Label>
              <AddAttackCol>
                <Form.Control
                  type="text"
                  name="SecondAttackDamage"
                  autoComplete="off"
                  placeholder="Ex: 2d8 + 1d4 + 5"
                  value={this.state.secondAttackDamage}
                  onChange={(e)=>{this.updateDamage("secondAttackDamage", e.target.value)}}
                />
              </AddAttackCol>
            </Row> */}

            {/* Third Attack */}
            {/* <Row>
              Third Attack
            </Row>
            <Row>
              <Form.Label as={AddAttackCol} >
                Attack Modifier
              </Form.Label>
              <AddAttackCol>
                <Form.Control
                  type="number"
                  name="ThirdAttackModifier"
                  autoComplete="off"
                  placeholder="Ex: 3"
                  value={this.state.thirdAttackModifier}
                  onChange={(e)=>{this.setState({
                    thirdAttackModifier: e.target.value
                  })}}
                />
              </AddAttackCol>
              <Form.Label as={AddAttackCol}>
                Damage Dice
              </Form.Label>
              <AddAttackCol>
                <Form.Control
                  type="text"
                  name="ThirdAttackDamage"
                  autoComplete="off"
                  placeholder="Ex: 2d8 + 1d4 + 5"
                  value={this.state.thirdAttackDamage}
                  onChange={(e)=>{this.updateDamage("thirdAttackDamage", e.target.value)}}
                />
              </AddAttackCol>
            </Row> */}

            {/* Fourth Attack  */}
            {/* <Row>
              Fourth Attack
            </Row>
            <Row>
              <Form.Label as={AddAttackCol} >
                Attack Modifier
              </Form.Label>
              <AddAttackCol>
                <Form.Control
                  type="number"
                  name="fourthAttackModifier"
                  autoComplete="off"
                  placeholder="Ex: 3"
                  value={this.state.fourthAttackModifier}
                  onChange={(e)=>{this.setState({
                    fourthAttackModifier: e.target.value
                  })}}
                />
              </AddAttackCol>
              <Form.Label as={AddAttackCol}>
                Damage Dice
              </Form.Label>
              <AddAttackCol>
                <Form.Control
                  type="text"
                  name="FourthAttackDamage"
                  autoComplete="off"
                  placeholder="Ex: 2d8 + 1d4 + 5"
                  value={this.state.fourthAttackDamage}
                  onChange={(e)=>{this.updateDamage("fourthAttackDamage", e.target.value)}}
                />
              </AddAttackCol>
            </Row> 
 
          </Form.Group> */}

          {/* {this.state.errors.length===0 ? <button 
            className="btn btn-outline-dark"
            onClick={(e) => {

              let {attackName, firstAttackModifier, firstAttackDamage, secondAttackModifier, secondAttackDamage, thirdAttackModifier, thirdAttackDamage, fourthAttackModifier, fourthAttackDamage} = this.state;

              e.formData = {
                charId: this.props.char.id,
                attackName,
                firstAttackModifier,
                firstAttackDamage,
                secondAttackModifier,
                secondAttackDamage,
                thirdAttackModifier,
                thirdAttackDamage,
                fourthAttackModifier,
                fourthAttackDamage,
              }
              this.props.handleAddAttack(e);
              this.clearForm();
            }}
          >
            Add Attack
          </button> : null}
           */}
        {/* </Form> */}
      </Container>
    )
  }
}

function AddAttackCol(props) {
  return (
    <Col sm={5} md={3} lg={3}>
      {props.children}
    </Col>
  )
}

function Attack(props) {
  const [displayTooltip, setDisplayTooltip] = useState(false);
  const ref = useRef(null);

  let attack=props.attack;

  return (
    <Row className="attack">
      <Col>
        {attack.attackName}
      </Col>
      <Col>
        {attack.firstAttackModifier}/{attack.firstAttackDamage}
      </Col>
      <Col>
        {attack.secondAttackModifier}/{attack.secondAttackDamage}
      </Col>
      <Col>
        {attack.thirdAttackModifier}/{attack.thirdAttackDamage}
      </Col>
      <Col>
        {attack.fourthAttackModifier}/{attack.fourthAttackDamage}
      </Col>
      {/* Need a delete icon */}
      <Col>
        <input
          ref={ref}
          type="checkbox"
          checked={attack.compare}
          onChange={(e)=>{
            // console.log(attack.attackName,e.target.checked)
            props.changeComparison(attack.attackId, e.target.checked);
          }} 
          onMouseEnter={()=>{setDisplayTooltip(!displayTooltip)}}
          onMouseLeave={()=>{setDisplayTooltip(!displayTooltip)}}
        />
        <Overlay 
          show={displayTooltip} 
          placement="right" 
          target={ref.current}
        >
          {(props) => (
            <Tooltip {...props}>
              Compare?
            </Tooltip>
          )}
        </Overlay>
      </Col>

    </Row>
  )
}

export default CharacterBar;