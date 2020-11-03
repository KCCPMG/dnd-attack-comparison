import React, {useState, useRef} from 'react';
import {Container, Row, Col, Modal, Form, Overlay, Tooltip} from 'react-bootstrap'

var totalRoll = new RegExp(/^(\d{1,2}d\d{1,2})(\+\d{1,2}d\d{1,2})*([-+]\d{1,2})*$/i)

class CharacterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      showDeleteCharacterModal: false,
      attackToEdit: null,
      showAttackModal: false,
      test: 0,
    }
  }

  

  setExpanded = (bool) => {
    this.setState({expanded: bool})
  }

  setShowDeleteCharacterModal = (bool) => {
    this.setState({showDeleteCharacterModal: bool})
  }

  hide = () => {
    this.setState({showDeleteCharacterModal: false})
  }

  setAttackToEdit = (id) => {
    this.setState({attackToEdit: id})
  }

  setShowAttackModal = (bool) => {
    this.setState({showAttackModal: bool})
  }

  

  

  render() {
    
    var editIcon = <svg 
      // width="1em" 
      height="20" 
      viewBox="0 0 16 16" 
      className="bi bi-pencil-square" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      onClick={()=>{this.props.editCharacter(this.props.char.id)}}
      >
      <path
        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
      />
      <path 
        fillRule="evenodd" 
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
      />
    </svg>

    var expandIcon = <svg 
      onClick={() => {this.setState({expanded: true})}}
      width="1em" 
      height="1em" 
      viewBox="0 0 16 16" 
      className="bi bi-chevron-down" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>

    var collapseIcon = <svg 
      onClick={() => {this.setState({expanded: false})}}
      width="1em" 
      height="1em" 
      viewBox="0 0 16 16" 
      className="bi bi-chevron-up" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      >
      <path 
        fillRule="evenodd" 
        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
      />
    </svg>

    var deleteIcon = <svg 
      onClick={(e) => {
        e.preventDefault();
        this.setState({showDeleteCharacterModal: true});
      }}
      width="1em" 
      height="1em" 
      viewBox="0 0 16 16" 
      className="" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" 
      />
      <path 
        fillRule="evenodd" 
        d="M5.23 5.146a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .707-.708l-5-5a.5.5 0 0 0-.708 0z"
      />
      <path 
        fillRule="evenodd" 
        d="M10.937 5.146a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .707 0z"
      />
    </svg>

    let deleteCharModal = <Modal
      centered
      onHide={this.hide}
      show={this.state.showDeleteCharacterModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Delete Character
        </Modal.Title>
      </Modal.Header>
      <Container>
        <h3 style={{overflowWrap: "break-word"}}>
          Are you sure you want to delete {this.props.char.name}?
        </h3>
        <br/>
        <Row className="justify-content-around">
          <button
            className="btn btn-outline-dark"
            onClick={()=>{
              this.props.handleDeleteCharacter(this.props.char.id)
            }}
          >
            <h3>Yes</h3>
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={(e)=>{
              this.setState({showDeleteCharacterModal: false});
              // setShowDeleteModal(false)
              e.stopPropagation();
            }}
          >
            <h3>No</h3>
          </button>
        </Row>
        <br/>
      </Container>
    </Modal>


    return (
      <Container className="character-bar" >
        <Row 
          className="character-bar-heading"
          // as={Row}
        >
          <Col className="character-name">
            {this.props.char.name}
          </Col>
          {/* <Col md="auto"/> */}
          <Col
            // as={Col}
            // cs="3" // What is this? typo?
            xs="7"
            sm="4"
            md="3"
            lg="3"
            xl="2"
            className="expand-toggle ml-auto mr-0 justify-content-between"  
            // onClick={() => {setExpanded(!expanded)}};
          >
            {/* <h3 
              style={{display: 'inline'}}
              onClick={()=>{
                setExpanded(!expanded);
              }}
            >
              {expanded ? "-" : "+"}
            </h3> */}
            {/* <img src="../assets/edit-icon.svg" alt="" title="Edit Icon" /> */}
  
            <Row>
              <Col>
                {this.state.expanded ? collapseIcon : expandIcon}
              </Col>
              <Col>
                {editIcon}
              </Col>
              <Col>
                {deleteIcon}
                {deleteCharModal}
              </Col>
            </Row>
          </Col>
        </Row>
        {this.state.expanded ? <h5 style={{textAlign: 'center'}}> ―Attacks― </h5> : ''}
        {this.state.expanded ? this.props.char.attacks.map(at => {
          return (
            <Attack 
              attack={at} 
              key={at.attackId} 
              changeComparison={this.props.changeComparison}
              setAttackToEdit={this.setAttackToEdit}
              setShowAttackModal={this.setShowAttackModal}
              handleDeleteAttack={this.props.handleDeleteAttack}
            />
          )
        }) : ""}
        {this.state.expanded ? <AddAttack 
          handleAddAttack={this.props.handleAddAttack} 
          handleEditAttack={this.props.handleEditAttack}
          char={this.props.char}
          setExpanded={this.setExpanded}
          attackToEdit={this.state.attackToEdit}
          showAttackModal={this.state.showAttackModal}
          setAttackToEdit={this.setAttackToEdit}
          setShowAttackModal={this.setShowAttackModal}
        /> : ""}
      </Container>
    )
  }
}


class AddAttack extends React.Component {

  render() {
    return (
      <Container className="add-attack">
        <div className="add-attack-button-div text-center">
          <button 
            className="btn btn-outline-dark add-attack-button"
            onClick={() => {
              this.props.setShowAttackModal(true)
            }}
          >
            <h5>+ Add Attack +</h5>
          </button>
          <br/>
        </div>
        <EditAttackModal 
          showAttackModal={this.props.showAttackModal}
          hideAttackModal={()=>{this.props.setShowAttackModal(false)}}
          char={this.props.char}
          handleAddAttack={this.props.handleAddAttack}
          attackToEdit={this.props.attackToEdit}
          setAttackToEdit={this.props.setAttackToEdit}
          handleEditAttack={this.props.handleEditAttack}
        />
      </Container>
    )
  }
}


class EditAttackModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
      attackId: null,
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
    }, this.props.setAttackToEdit(null))
  }

  render() {
    return(
      <Modal
        show={this.props.showAttackModal}
        centered
        size="lg"
        onHide={()=>{
          this.clearForm();
          this.props.hideAttackModal();
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
              as={Container}
            >
              <Row>
                <Form.Label as={Col}>
                  Attack Name
                </Form.Label>
                <Col>
                  <Form.Control
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

              {/* First Attack */}
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
                    className={(this.state.errors.includes("firstAttackDamage")) ? "is-invalid" : ""}
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
                    className={(this.state.errors.includes("secondAttackDamage")) ? "is-invalid" : ""}
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
                    className={(this.state.errors.includes("thirdAttackDamage")) ? "is-invalid" : ""}
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
                    className={(this.state.errors.includes("fourthAttackDamage")) ? "is-invalid" : ""}
                    autoComplete="off"
                    placeholder="Ex: 2d8 + 1d4 + 5"
                    value={this.state.fourthAttackDamage}
                    onChange={(e)=>{this.updateDamage("fourthAttackDamage", e.target.value)}}
                  />
                </AddAttackCol>
              </Row>
              <br/>
              <Row className="justify-content-md-center">
                <Col className="text-center">
                  {this.state.errors.length===0 ? <button 
                  className="btn btn-outline-dark"
                  onClick={(e) => {
                    e.preventDefault();

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

                    if (this.state.attackId) {
                      e.formData.attackId = this.state.attackId;
                      this.props.handleEditAttack(e);
                    } else {
                      this.props.handleAddAttack(e);
                    }
                    
                    this.clearForm();
                    this.props.hideAttackModal();
                  }}
                  >
                    {this.state.attackId ? "Update" : "Add"} Attack
                  </button> : null}
                  <br/>
                </Col>
              </Row>            
            </Form.Group>
          </Form>
        </Container>
      </Modal>
    )    
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let prevAttack = Object.assign({}, prevProps.attackToEdit)
    let currentAttack = Object.assign({}, this.props.attackToEdit)

    if (JSON.stringify(prevAttack) !== JSON.stringify(currentAttack)) {
      this.setState({
        attackId: currentAttack.attackId,
        attackName: currentAttack.attackName,
        firstAttackModifier: currentAttack.firstAttack?.modifier,
        firstAttackDamage: currentAttack.firstAttack?.damage,
        secondAttackModifier: currentAttack.secondAttack?.modifier,
        secondAttackDamage: currentAttack.secondAttack?.damage,
        thirdAttackModifier: currentAttack.thirdAttack?.modifier,
        thirdAttackDamage: currentAttack.thirdAttack?.damage,
        fourthAttackModifier: currentAttack.fourthAttack?.modifier,
        fourthAttackDamage: currentAttack.fourthAttack?.damage,
      })
    }
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
  const [displayCompareTooltip, setDisplayCompareTooltip] = useState(false);
  const [displayEditTooltip, setDisplayEditTooltip] = useState(false);
  const [displayDeleteTooltip, setDisplayDeleteTooltip] = useState(false);
  const [showDeleteAttackModal, setShowDeleteAttackModal] = useState(false);
  const compareRef = useRef(null);
  const editRef = useRef(null);
  const deleteRef = useRef(null);

  let attack=props.attack;

  var editIcon = <svg
    className="bi bi-pencil-square attack-control" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    onClick={()=>{
      props.setAttackToEdit(props.attack)
      props.setShowAttackModal(true);
    }}
    
    onMouseEnter={()=>{setDisplayEditTooltip(!displayEditTooltip)}}
    onMouseLeave={()=>{setDisplayEditTooltip(!displayEditTooltip)}}
    ref={editRef}
  >
    <path
      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
    />
    <path 
      fillRule="evenodd" 
      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
    />
  </svg>

  var deleteIcon = <svg
    className="attack-control"
    onClick={(e) => {
      e.preventDefault();
      setShowDeleteAttackModal(true); 
    }}
    height="16" 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    onMouseEnter={()=>{setDisplayDeleteTooltip(!displayDeleteTooltip)}}
    onMouseLeave={()=>{setDisplayDeleteTooltip(!displayDeleteTooltip)}}
    ref={deleteRef}
  >
    <path 
      fillRule="evenodd" 
      d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" 
    />
    <path 
      fillRule="evenodd" 
      d="M5.23 5.146a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .707-.708l-5-5a.5.5 0 0 0-.708 0z"
    />
    <path 
      fillRule="evenodd" 
      d="M10.937 5.146a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .707 0z"
    />
  </svg>

  var deleteAttackModal = <Modal
    show={showDeleteAttackModal}
    centered
    onHide={() => {
      setShowDeleteAttackModal(false)
    }}
  >
    <Modal.Header closeButton>
      <Modal.Title>
        Delete Attack
      </Modal.Title>
    </Modal.Header>
    <Container>
      <h3>
        Are you sure you want to delete {props.attack.attackName}?
      </h3>
      <br/>
      <Row className="justify-content-around">
        <button
          className="btn btn-outline-dark"
          onClick={(e)=>{
            e.attackId = props.attack.attackId;
            this.props.handleDeleteAttack(e);
          }}
        >
          <h3>Yes</h3>
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={()=>{
            setShowDeleteAttackModal(false);
          }}
        >
          <h3>No</h3>
        </button>
      </Row>
      <br/>
    </Container>
  </Modal>



  return (
    <Row className="attack">
      <Col xs="4" sm="3" md="2" className="attack-name">
        {attack.attackName}
      </Col>
      <Col xs="2" sm="5" md="7" lg="8">
        <Row>
          <Col className="attack-damage">
            {attack.firstAttack?.modifier}/{attack.firstAttack?.damage}
          </Col>
          <Col className="attack-damage">
            {attack.secondAttack?.modifier}/{attack.secondAttack?.damage}
          </Col>
          <Col className="attack-damage">
            {attack.thirdAttack?.modifier}/{attack.thirdAttack?.damage}
          </Col>
          <Col className="attack-damage">
            {attack.fourthAttack?.modifier}/{attack.fourthAttack?.damage}
          </Col>
        </Row>
      </Col>
      <Col 
        className="attack-controls"
        xs="6"
        sm="4"
        md="3"
        lg="2"
        xl="2"
      >
        <Row className="ml-auto mr-0 justify-content-between">
          <Col className="checkbox-container">            
            <div 
              className={`dummy-checkbox ${attack.compare ? "dummy-checkbox-checked" : ""}`}
              onClick={() => {
                props.changeComparison(attack.attackId, !attack.compare)
              }}
              ref={compareRef}
              onMouseEnter={()=>{setDisplayCompareTooltip(!displayCompareTooltip)}}
              onMouseLeave={()=>{setDisplayCompareTooltip(!displayCompareTooltip)}}
            >
              <span className="checkbox-span">
                {attack.compare ? <span>◢</span> : ""}
              </span>
            </div>
          </Col>
          <Col>
            {editIcon}
          </Col>
          <Col>
            {deleteIcon}
          </Col>
        </Row>
        
        {deleteAttackModal}

        <Overlay 
          show={displayCompareTooltip} 
          placement="left" 
          target={compareRef.current}
        >
          {(props) => (
            <Tooltip {...props}>
              Compare?
            </Tooltip>
          )}
        </Overlay>
        <Overlay 
          show={displayEditTooltip} 
          placement="left" 
          target={editRef.current}
        >
          {(props) => (
            <Tooltip {...props}>
              Edit?
            </Tooltip>
          )}
        </Overlay>
        <Overlay 
          show={displayDeleteTooltip} 
          placement="left" 
          target={deleteRef.current}
        >
          {(props) => (
            <Tooltip {...props}>
              Delete?
            </Tooltip>
          )}
        </Overlay>
      </Col>
    </Row>
  )
}

export default CharacterBar;