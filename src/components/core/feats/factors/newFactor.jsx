import React from 'react';

import '../../../../styles/core/feats/factor.css';

function createNewFactors(index) {
  const FactorId = `Factor[${index}]`;
  const FactorTypeId = `FactorType[${index}]`;
  const FactorContentId = `FactorContent[${index}]`;

  return (
    <div className="factorBox" key={FactorId}>
      <div className="factorBoxInputs">
        <div className="factorContainer">
          <div className="factorTypeContainer">
            <select className="factorType" id={FactorTypeId}>
              <option>Select...</option>
              <option>Advantage</option>
              <option>Disadvantage</option>
            </select>
          </div>
          <div className="factorTextContainer">
            <textarea className="factorText" id={FactorContentId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default createNewFactors;
