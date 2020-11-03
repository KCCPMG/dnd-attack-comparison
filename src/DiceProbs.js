export function averageResult(diceOutcomes) {
  // Outputs average from array of possible results
  let length = diceOutcomes.length;
  let total = diceOutcomes.reduce((a,b) => (a+b), 0);
  return total/length;
}

export function averageResultFromRollObj(rollObj) {
  // Returns number from roll object
  let length = Object.values(rollObj).reduce((a,b) => a+b);
  let sum = 0;
  for (let key of Object.keys(rollObj)) {
    sum += key * rollObj[key]
  }
  return sum/length;
}

export function combineResultObjects(obj1, obj2) {
  // Creates a new roll object combined from two smaller roll objects to avoid oversized dice arrays
  let obj1Lower = Math.min(...Object.keys(obj1))
  let obj2Lower = Math.min(...Object.keys(obj2))

  let obj1Upper = Math.max(...Object.keys(obj1))
  let obj2Upper = Math.max(...Object.keys(obj2))

  let newLower = obj1Lower+obj2Lower;
  let newUpper = obj1Upper+obj2Upper;

  let newObj = {};
  for (let i=newLower; i<=newUpper; i++) {
    newObj[i] = 0;
  }

  for (let key1 of Object.keys(obj1)) {
    for (let key2 of Object.keys(obj2)) {
      let sum = Number(key1)+Number(key2);
      let probability = Number(obj1[key1])*Number(obj2[key2]);
      newObj[sum] += probability;
    }
  }
  return newObj;
}

export function critDamage(totalRoll) {
  // Get max critical damage result array of total roll
  
  let normalMax = eval(totalRoll.replace(/d/gi, '*'));

  // double dice for total roll
  let components = splitRoll(totalRoll);

  let newComponents = [];
  // put each die into its own output array
  for (let component of components) {
    if (component.match(/d/i)) {
      let [dice, dieSize] = component.split(/d/i);
      dice = Number(dice);
      newComponents.push(2*dice + "d" + dieSize)
    } else {
      newComponents.push(component);
    }
  }

  let newRollStr = newComponents.join("+");

  let critArray = createDiceArray(newRollStr);

  critArray = critArray.map(result => {
    if (result >= normalMax) return result;
    else return normalMax;
  })

  return critArray;
}

export function critRollString(totalRoll) {
  // Take a roll string and output a new roll signifying the crit roll
  let components = totalRoll.split(/\+/g);
  for (let i in components) {
    if (components[i].match(/d/gi)) {
      let [dice, dieSize] = components[i].split(/d/gi);
      dice = dice*2;
      let newComponent = `${dice}d${dieSize}`
      components.splice(i, 1, newComponent);
    }
  }
  return components.join("+")
}

export function createDiceArray(totalRoll) {
  // Create an array with every single total from all dice permutations taken from the roll string
  let components = splitRoll(totalRoll);

  let rolls = [];
  // put each die into its own output array
  for (let component of components) {
    if (component.match(/d/i)) {
      let [dice, dieSize] = component.split(/d/i);
      dice = Number(dice);
      dieSize = Number(dieSize);
      for (let d=0; d<dice; d++) {
        let results = [];
        for (let n=1; n<=dieSize; n++) {
          results.push(n);
        }
        rolls.push(results);
      }
    } else {
      rolls.push([Number(component[0])])
    }
  }

  let results = [];
  for (let rollSet of rolls) {
    if (results.length===0) {
      for (let num of rollSet) {
        results.push(num);
      }
    } else {
      let temp = [];
      for (let running of results) {
        for (let num of rollSet) {
          temp.push(running+num);
        }
      }
      results = temp;
    }
  }
  return results;
}


export function minResult(diceOutcomes) {
  // Returns smallest result of dice outcome array
  return Math.min(...diceOutcomes);
}


export function maxResult(diceOutcomes) {
  // Returns largets result of dice outcome array
  return Math.max(...diceOutcomes);
}

export function rollResultObj(rollString) {
  // Takes rollString, exports resultObj with number of possible permutations as values

  let [dice, dieSize] = rollString.split(/d/gi);

  // handling flat modifier
  if (dieSize===undefined) {
    let flatObj = {}
    flatObj[dice] = 1;
    return flatObj;
  }

  // avoid overlarge dice arrays
  if (dice>4) {
    return combineResultObjects(rollResultObj(`4d${dieSize}`), rollResultObj(`${dice-4}d${dieSize}`))
  }
  
  let rollObj = {};
  for (let i=dice; i<=dice*dieSize; i++) { rollObj[i] = 0 };

  let allRolls = createDiceArray(rollString);

  for (let roll of allRolls) {
    rollObj[roll] +=1
  }

  return rollObj;
}

export function rollResultObjPercentage(rollString) {
  // takes rollString, exports rollObj with probability percentage values

  // rro for roll result obj
  let rro = rollResultObj(rollString)
  let totalPossibilities = Object.values(rro).reduce((a,b) => a+b);
  for (let key of Object.keys(rro)) {
    rro[key] = rro[key]/totalPossibilities;
  }
  return rro;
}

export function splitRoll(totalRoll) {
  // Break roll into individual components- helper function
  console.log(totalRoll);
  console.log(typeof(totalRoll));
  let components = totalRoll
  .replace(/ +/g, '')
  .split(/\+/)

  return components;
}

export function totalCritRollResultObj(totalRoll) {
  // Take roll string and output roll object reflecting critical
  let components = totalRoll.split(/\+/g);

  for (let i in components) {
    if (components[i].match(/d/gi)) {
      let [dice, dieSize] = components[i].split(/d/gi);
      dice = dice*2;
      let newComponent = `${dice}d${dieSize}`
      components.splice(i, 1, newComponent);
    }
  }

  let critRollString = components.join("+");
  let maxStandardRoll = eval(totalRoll.replace(/d/gi, "*"))
  let rollObj = totalRollResultObj(critRollString);

  // Take all rolls below max standard, shift their probability into max standard as low-end threshhold for crit
  for (let i=Math.min(...Object.keys(rollObj)); i<maxStandardRoll; i++) {
    rollObj[maxStandardRoll] += rollObj[i];
    rollObj[i] = 0;
  }
  return rollObj;
}

export function totalRollResultObj(totalRoll) {
  // Return roll object from complete roll string
  let components = totalRoll.split(/\+/g);
  for (let i in components) {
    components.splice(i, 1, rollResultObj(components[i]));
  }
  return components.reduce((a, b) => combineResultObjects(a, b));
}

