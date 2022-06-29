// Proficiency bonus, saving throws, skill checks
import React from 'react';

import '../../../styles/core/attributeSaves.css';

function AttributeSaves() {
  const updateModifier = () => {
    console.log('lala');
  };

  const rollSave = () => {
    console.log("rollin' a save!");
  };
  return (
    <div className="attributeSavesContainer">
      <div className="nestedSaves">
        <div id="proficiencyContent">
          <div>
            <input id="ProficiencyBonusInput" type="text" placeholder="0" />
            <label id="ProficiencyBonusLabel">Proficiency Bonus</label>
          </div>
        </div>
      </div>
      <div className="nestedSaves">
        <label>Saving Throws</label>
        <br />
        <table>
          <tr className="savingThrow">
            <td>
              <input
                className="saveThrowCheckbox"
                type="checkbox"
                onChange={() => updateModifier()}
              />
            </td>
            <td>
              <input
                className="saveThrowInput"
                type="button"
                value="Strength"
                onClick={() => rollSave()}
              />
            </td>
          </tr>
          <tr className="savingThrow">
            <td>
              <input
                className="saveThrowCheckbox"
                type="checkbox"
                onChange={() => updateModifier()}
              />
            </td>
            <td>
              <input
                className="saveThrowInput"
                type="button"
                value="Dexterity"
                onClick={() => rollSave()}
              />
            </td>
          </tr>
          <tr className="savingThrow">
            <td>
              <input
                className="saveThrowCheckbox"
                type="checkbox"
                onChange={() => updateModifier()}
              />
            </td>
            <td>
              <input
                className="saveThrowInput"
                type="button"
                value="Constitution"
                onClick={() => rollSave()}
              />
            </td>
          </tr>
          <tr className="savingThrow">
            <td>
              <input
                className="saveThrowCheckbox"
                type="checkbox"
                onChange={() => updateModifier()}
              />
            </td>
            <td>
              <input
                className="saveThrowInput"
                type="button"
                value="Intelligence"
                onClick={() => rollSave()}
              />
            </td>
          </tr>
          <tr className="savingThrow">
            <td>
              <input
                className="saveThrowCheckbox"
                type="checkbox"
                onChange={() => updateModifier()}
              />
            </td>
            <td>
              <input
                className="saveThrowInput"
                type="button"
                value="Wisdom"
                onClick={() => rollSave()}
              />
            </td>
          </tr>
          <tr className="savingThrow">
            <td>
              <input
                className="saveThrowCheckbox"
                type="checkbox"
                onChange={() => updateModifier()}
              />
            </td>
            <td>
              <input
                className="saveThrowInput"
                type="button"
                value="Charisma"
                onClick={() => rollSave()}
              />
            </td>
          </tr>
        </table>
      </div>
      <div className="nestedSaves">Skill Checks</div>
    </div>
  );
}

export default AttributeSaves;
