import React, { useState } from 'react';

import '../../../../styles/core/vitals/vitalsIndex.css';

import createNewHeroResource from './newHeroResource';

function HeroResource() {
  const blankHeroResource = {
    HeroResourceID: 0,
    HeroResourceCurrent: 0,
    HeroResourceMax: 0,
    HeroResourceTitle: '',
  };

  const [heroResourceState, setHeroResourceState] = useState(() => [{ ...blankHeroResource }]);

  const addHeroResource = () => {
    setHeroResourceState([...heroResourceState, { blankHeroResource }]);
  };

  return (
    <div className="heroResourcesContainer">
      <div className="headerButton">
        <label className="subHeader">Hero Resource</label>
        <input className="addNewButton" type="button" value="+" onClick={() => addHeroResource()} />
      </div>
      {heroResourceState.map((element, index) => createNewHeroResource(index))}
    </div>
  );
}

export default HeroResource;
