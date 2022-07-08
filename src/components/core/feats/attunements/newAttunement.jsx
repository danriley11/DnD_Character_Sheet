import React from 'react';

import '../../../../styles/core/vitals/hitDie.css';

function createNewAttunement(index) {
  const AttunementId = `Attunement[${index}]`;
  const AttunementNameId = `AttunementName[${index}]`;
  const AttunementEffectId = `AttunementEffect[${index}]`;

  return (
    <div className="hitDiceBox" key={AttunementId}>
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
                  <input className="attunementText" type="text" id={AttunementNameId} />
                </td>
                <td>
                  <textarea className="attunementText" type="text" id={AttunementEffectId} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default createNewAttunement;
