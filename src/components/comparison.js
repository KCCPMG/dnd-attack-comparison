import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {Line} from 'react-chartjs-2';
import {averageResult, critDamage} from '../DiceProbs.js'

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
          {attack.firstAttack.modifier}/{attack.firstAttack.damage}
        </Col>
        <Col>
          {attack.secondAttack.modifier}/{attack.secondAttack.damage}
        </Col>
        <Col>
          {attack.thirdAttack.modifier}/{attack.thirdAttack.damage}
        </Col>
        <Col>
          {attack.fourthModifier}/{attack.fourthAttack.damage}
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
    </Container>
  )
}

function LineGraph(props) {

  function processAttack(attack) {
    let {characterName, attackName, firstAttack, secondAttack, thirdAttack, fourthAttack} = attack;

    let ACRange = [];
    for (let i=0; i<31; i++) {
      ACRange.push(i);
    }

    let dataset;

    dataset = ACRange.map(ac => {
      let avg = 0;
      for (let att of [firstAttack, secondAttack, thirdAttack, fourthAttack]) {
        let successes = regularSuccessCount(att.modifier, ac);
        let averageDamage = att.averageDamageRoll || 0;
        let averageCrit = att.averageCrit || 0;

        avg += ((successes * averageDamage) + averageCrit)/20;
      }

      return {
        characterName,
        attackName,
        expectedDamage: avg,
        AC: ac,
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
      data,
      lineTension: 0
    }
  })

  var lineChart = (
    <Line 
      data={{
        labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        datasets: datasets
      }}
      options={{
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

  return (
    <Container xs="12">
      <br/>
      <h5 style={{textAlign: 'center'}}>
        ―Attack Comparison Against AC Values―
      </h5>
      {lineChart}
    </Container>
  )
}

function minRoll(rollStr) {
  if (rollStr==="") return 0;
  let dice = rollStr.split(/d/i)[0];
  return Number(dice);
}

function maxRoll(rollStr) {
  if (rollStr==="") return 0;
  let [dice, dieSize] = rollStr.split(/d/i);
  return (Number(dice) * (Number(dieSize) || 1));
}

function averageRoll(rollStr) {
  return (minRoll(rollStr) + maxRoll(rollStr)) / 2;
}

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

// No longer necessary
function projectedDamage(modifier, damage, AC) {
  if (damage === "") return 0;
  modifier = Number(modifier);
  let averageNormalDamage = averageDamage(damage);
  let averageDamageRolls = [];
  for (let attackRoll = 1; attackRoll<=20; attackRoll++) {
    if (attackRoll === 1) averageDamageRolls.push(0);
    else if (attackRoll === 20) averageDamageRolls.push(averageResult(critDamage(damage)))
    else {
      if (attackRoll+modifier<AC) averageDamageRolls.push(0);
      else averageDamageRolls.push(averageNormalDamage);
    }
  }
  return averageDamageRolls.reduce((a,b) => a+b)/20;
}

function regularSuccessCount(modifier, AC) {
  return Math.min(Math.max(20-(AC-modifier), 0), 18)
}

export default Comparison;
