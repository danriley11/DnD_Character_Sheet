import React from 'react';

import '../../styles/core/core.css';

import Attributes from './attributes/attributeIndex';
import FeatsIndex from './feats/featsIndex';
import Vitals from './vitals/vitalsIndex';

function Core() {
  return (
    <div className="coreContainer">
      <Attributes />
      <Vitals />
      <FeatsIndex />
    </div>
  );
}

export default Core;
