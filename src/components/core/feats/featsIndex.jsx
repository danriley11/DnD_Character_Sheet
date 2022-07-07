import React from 'react';

import Attunements from './attunements';
import Factors from './factors';
import Feats from './feats';

function FeatsIndex() {
  return (
    <div className="featsContainer">
      <Attunements />
      <Factors />
      <Feats />
    </div>
  );
}

export default FeatsIndex;
