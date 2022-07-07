// hit die
import React, { useState } from 'react';

import '../../../../styles/core/vitals/vitalsIndex.css';

import createNewHitDie from './newHitDice';

function HitDie() {
  const blankHitDie = {
    HitDieID: 0,
    HitDieCurrent: 0,
    HitDieMax: 0,
    HitDieType: [],
  };

  const [hitDieState, setHitDieState] = useState(() => [{ ...blankHitDie }]);

  const addHitDie = () => {
    setHitDieState([...hitDieState, { blankHitDie }]);
  };

  return (
    <div className="hitDieContainer">
      <div className="subHeaderButton">
        <label className="subHeader">Hit Dice</label>
        <input className="addNewButton" type="button" value="+" onClick={() => addHitDie()} />
      </div>
      {hitDieState.map((element, index) => createNewHitDie(index))}
    </div>
  );
}

export default HitDie;
