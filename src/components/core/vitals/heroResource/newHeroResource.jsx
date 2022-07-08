// ki points | hit die
import React from 'react';

import '../../../../styles/core/vitals/heroResource.css';

function createNewHeroResource(index) {
  const HeroResourceId = `HeroResource[${index}]`;
  const HeroResourceCurrentId = `HeroResourceCurrent[${index}]`;
  const HeroResourceMaxId = `HeroResourceMax[${index}]`;
  const HeroResourceTitleId = `HeroResourceTitle[${index}]`;

  return (
    <div className="heroResourceBox" key={HeroResourceId}>
      <div className="heroResourceBoxInputs">
        <div className="heroResourceContainer">
          <input
            className="heroResourceInput"
            id={HeroResourceCurrentId}
            type="number"
            placeholder="0"
          />
          /
          <input
            className="heroResourceInput"
            id={HeroResourceMaxId}
            type="number"
            placeholder="0"
          />
        </div>
        <input className="heroResourceType" id={HeroResourceTitleId} type="text" />
        <input className="heroResourceRoll" type="button" value="Use" />
      </div>
    </div>
  );
}

export default createNewHeroResource;
