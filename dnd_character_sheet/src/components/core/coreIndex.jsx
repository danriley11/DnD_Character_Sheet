import React from 'react';

import '../../styles/core/core.css';

import Attributes from './attributes/attributeIndex';
import Feats from './feats/featsIndex';
import Vitals from './vitals/vitalsIndex';

function Core() {
  return (
    <div className="coreContainer">
      <Attributes />
      <Vitals />
      <Feats />
    </div>
  );
}

export default Core;
