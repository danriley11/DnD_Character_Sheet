// List of attunements
import React, { useState } from 'react';

import '../../../../styles/core/feats/factor.css';

import createNewFactors from './newFactor';

function Feats() {
  const blankFactor = {
    FactorID: 0,
    FactorName: '',
    FactorEffect: '',
  };

  const [factorState, setFactorState] = useState(() => [{ ...blankFactor }]);

  const addFactor = () => {
    setFactorState([...factorState, { blankFactor }]);
  };

  return (
    <div className="innerContainer">
      <div className="headerButton">
        <label>Advantages / Disadvantages</label>
        <input className="addNewButton" type="button" value="+" onClick={() => addFactor()} />
      </div>
      {factorState.map((element, index) => createNewFactors(index))}
    </div>
  );
}

export default Feats;
