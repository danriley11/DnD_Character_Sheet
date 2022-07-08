// List of attunements
import React, { useState } from 'react';

import '../../../../styles/core/feats/attunement.css';
import '../../../../styles/core/common.css';
import createNewAttunement from './newAttunement';

function Attunements() {
  const blankAttunement = {
    AttunementID: 0,
    AttunementName: '',
    AttunementEffect: '',
  };

  const [attunementState, setAttunementState] = useState(() => [{ ...blankAttunement }]);

  const addAttunement = () => {
    setAttunementState([...attunementState, { blankAttunement }]);
  };

  return (
    <div className="innerContainer">
      <div className="headerButton">
        <label>Attunements</label>
        <input className="addNewButton" type="button" value="+" onClick={() => addAttunement()} />
      </div>
      {attunementState.map((element, index) => createNewAttunement(index))}
    </div>
  );
}

export default Attunements;
