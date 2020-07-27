import React, {useState} from 'react';
import {Container, Row, Col, Modal, Form, Button, Navbar, InputGroup} from 'react-bootstrap'
import { Chart, Line } from 'react-chartjs-2';

function Comparison(props) {
  let characters = props.characters;
  let attacks = [];

  characters.forEach((character) => {
    character.attacks.forEach((attack) => {
      if (attack.compare === true) {
        let compAttack = Object.assign({}, {
          characterName: character.name
        }, attack)
        attacks.push(compAttack)
      }
    })
  })

  let renderedAttacks = attacks.map(attack => {
    return(
      <Row 
        className="comp-attack" 
        key={`attack-comparison-${attack.attackId}`} 
      >
        <Col>
          {attack.characterName}-{attack.attackName}
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

      </Row>
    )
    
  });

  return (
    <Container className="comparison">
      <h2 style={{textAlign: 'center'}}>
        Attack Comparison
      </h2>
      <h5 style={{textAlign: 'center'}}> ―Attacks― </h5>
      {renderedAttacks}
      <LineGraph attacks={props.attacks} />
    {/* Need to do all the d3 stuff here. Graph y-axis projected damage x-axis target AC
    Add different options for average damage, max damage, min damage? */}
    </Container>
  )
}

function LineGraph(props) {

  // Confirmed
  function minRoll(roll) {
    if (roll==="") return 0;
    let [dice, dieSize] = roll.split(/d/i);
    return Number(dice);
  }

  // Confirmed
  function maxRoll(roll) {
    if (roll==="") return 0;
    let [dice, dieSize] = roll.split(/d/i);
    return (Number(dice) * (Number(dieSize) || 1));
  }

  // Confirmed
  function averageRoll(roll) {
    return (minRoll(roll) + maxRoll(roll)) / 2;
  }

  // Confirmed
  function averageDamage(damage) {
    damage = damage || ""
    let components = damage.split("+");
    let averageSum = 0;

    for (let component of components) {
      if (component.match(/d/i)) {
        averageSum = averageSum + averageRoll(component);
      } else {
        averageSum = averageSum + Number(component);
      }
    }

    return averageSum;
  }

  // Confirmed
  function projectedDamage(modifier, damage, AC) {
    let chanceToHit = (Number(modifier) + 20 - AC) *.05;
    chanceToHit = Math.min(chanceToHit, 1);
    chanceToHit = Math.max(chanceToHit, 0);
    return chanceToHit * averageDamage(damage);
  }
  
  // Given an attack, break down into all components and create dataset to graph
  // Confirmed
  function processAttack(attack) {
    let {characterName, attackName, firstAttackModifier, firstAttackDamage, secondAttackModifier, secondAttackDamage,thirdAttackModifier, thirdAttackDamage, fourthAttackModifier, fourthAttackDamage} = attack;

    let ACRange = [];
    for (let i=0; i<31; i++) {
      ACRange.push(i);
    }

    let dataset = ACRange.map(ac => {
      let expectedDamage = projectedDamage(firstAttackModifier, firstAttackDamage, ac) + projectedDamage(secondAttackModifier, secondAttackDamage, ac) + 
      projectedDamage(thirdAttackModifier, thirdAttackDamage, ac) + 
      projectedDamage(fourthAttackModifier, fourthAttackDamage, ac);
      return {
        characterName, 
        attackName, 
        expectedDamage,
        AC: ac
      }
    })

    return dataset;
  }

  let borderColors = [
    'black',
    'red',
    'green',
    'blue'
  ]

  // console.log({props})

  // Need to construct a dataset out of each attack
  var datasets = props?.attacks?.map((attack, i) => {
    

    var borderColor = borderColors[i % borderColors.length]

    var {characterName, attackName} = attack
    var label = `${characterName} - ${attackName}`;

    var data = processAttack(attack).map(a => (Math.round(1000 * a.expectedDamage))/1000);

    return {
      borderColor,
      backgroundColor: 'rgba(0,0,0,0)',
      label,
      data
    }
  })

  // console.log(datasets);


  // chartjs
  var PADDING;
  var HEIGHT;
  var WIDTH;

  var lineChart = (
    <Line 
        
      data={{
        labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        datasets: datasets
      }}

      options={{
        // title: {
        //   display: true,
        //   text: "―Attack Comparison Against AC Values―",
        //   fontFamily: 'Alegreya SC',
        //   fontSize: '20'
        // },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Avg. Proj. Damage',
              fontFamily: 'Alegreya SC',
              fontSize: '18'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Targeted Armor Class',
              fontFamily: 'Alegreya SC',
              fontSize: '18'
            }
          }]
        },
        legend: {
          labels: {
            fontFamily: 'Alegreya SC'
          }
        }
      }}
    />
  )




  // console.log("Chart Defaults", Chart.defaults);
  // console.log("Line Chart", lineChart)

  return (
    <Container xs="12">
      {/* <Chart 
        type="line"
        data={{
          label: "Huraduradingus",
          datasets: {
            data: [1,2,3,4,5]
          }
        }}
      /> */}
      <br/>
      <h5 style={{textAlign: 'center'}}>
        ―Attack Comparison Against AC Values―
      </h5>
      {lineChart}
    </Container>
  )

}

export default Comparison;