import React from 'react';

import '../../../../styles/core/vitals/hitDie.css';
import '../../../../styles/core/feats/feats.css';

function createNewFeat(index) {
  const FeatId = `Feat[${index}]`;
  const FeatNameId = `FeatName[${index}]`;
  const FeatEffectId = `FeatEffect[${index}]`;

  return (
    <div className="hitDiceBox" key={FeatId}>
      <div className="hitDiceBoxInputs">
        <div className="attunementContainer">
          <table>
            <thead>
              <tr>
                <td>No.</td>
                <td>Attunement Name</td>
                <td>Attunement Effect</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label>({index})</label>
                </td>
                <td>
                  <input className="attunementText" type="text" id={FeatNameId} />
                </td>
                <td>
                  <textarea className="featText" type="textarea" id={FeatEffectId} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default createNewFeat;
