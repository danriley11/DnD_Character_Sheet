import React from 'react';

import '../../../../styles/core/vitals/hitDie.css';

function createNewHitDie(index) {
  const HitDiceId = `HitDice[${index}]`;
  const HitDiceCurrentId = `HitDiceCurrent[${index}]`;
  const HitDiceMaxId = `HitDiceMax[${index}]`;
  const HitDiceTypeId = `HitDiceType[${index}]`;

  return (
    <div className="hitDiceBox" id={HitDiceId}>
      <div className="hitDiceBoxInputs">
        <div className="hitDieContainer">
          <input className="hitDieInput" id={HitDiceCurrentId} type="number" placeholder="0" />
          /
          <input className="hitDieInput" id={HitDiceMaxId} type="number" placeholder="0" />
        </div>
        <select className="diceType" id={HitDiceTypeId}>
          <option>Please Select</option>
        </select>
        <input className="hitDiceRoll" type="button" value="Roll" />
      </div>
    </div>
  );
}

export default createNewHitDie;
