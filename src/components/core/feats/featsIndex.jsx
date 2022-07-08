import React from 'react';

import '../../../styles/core/common.css';
import '../../../styles/core/feats/featsIndex.css';

import Attunements from './attunements/attunements';
import Factors from './factors/factors';
import Feats from './feats/feats';

function FeatsIndex() {
  return (
    <div className="outerContainer">
      <Attunements />
      <Factors />
      <Feats />
    </div>
  );
}

export default FeatsIndex;
