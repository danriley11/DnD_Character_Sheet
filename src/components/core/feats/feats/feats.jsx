// Dynamic list of feats & traits & racial abilities
import React, { useState } from 'react';

import '../../../../styles/core/feats/attunement.css';

import createNewFeat from './newFeat';

function Feats() {
  const blankFeat = {
    FeatID: 0,
    FeatName: '',
    FeatEffect: '',
  };

  const [featState, setFeatState] = useState(() => [{ ...blankFeat }]);

  const addAttunement = () => {
    setFeatState([...featState, { blankFeat }]);
  };

  return (
    <div className="innerContainer">
      <div className="headerButton">
        <label>Feats & Traits</label>
        <input className="addNewButton" type="button" value="+" onClick={() => addAttunement()} />
      </div>
      {featState.map((element, index) => createNewFeat(index))}
    </div>
  );
}

export default Feats;
