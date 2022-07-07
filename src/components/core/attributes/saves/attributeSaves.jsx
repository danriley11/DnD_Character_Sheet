// Proficiency bonus, saving throws, skill checks
import React from 'react';

import '../../../../styles/core/attributes/attributeSaves.css';

function AttributeSaves({
  strengthMod,
  dexterityMod,
  constitutionMod,
  intelligenceMod,
  wisdomMod,
  charismaMod,
}) {
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
          <thead />
          <tbody>
            <tr>
              <td>
                <input
                  className="savingThrowCheckbox"
                  type="checkbox"
                  onChange={() => updateModifier()}
                />
              </td>
              <td>
                <input className="savingThrowModifier" placeholder="+0" />
              </td>
              <td>
                <input
                  className="savingThrowRoll"
                  type="button"
                  value="Strength"
                  onClick={() => rollSave()}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="savingThrowCheckbox"
                  type="checkbox"
                  onChange={() => updateModifier()}
                />
              </td>
              <td>
                <input className="savingThrowModifier" placeholder="+0" />
              </td>
              <td>
                <input
                  className="savingThrowRoll"
                  type="button"
                  value="Dexterity"
                  onClick={() => rollSave()}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="savingThrowCheckbox"
                  type="checkbox"
                  onChange={() => updateModifier()}
                />
              </td>
              <td>
                <input className="savingThrowModifier" placeholder="+0" />
              </td>
              <td>
                <input
                  className="savingThrowRoll"
                  type="button"
                  value="Constitution"
                  onClick={() => rollSave()}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="savingThrowCheckbox"
                  type="checkbox"
                  onChange={() => updateModifier()}
                />
              </td>
              <td>
                <input className="savingThrowModifier" placeholder="+0" />
              </td>
              <td>
                <input
                  className="savingThrowRoll"
                  type="button"
                  value="Intelligence"
                  onClick={() => rollSave()}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="savingThrowCheckbox"
                  type="checkbox"
                  onChange={() => updateModifier()}
                />
              </td>
              <td>
                <input className="savingThrowModifier" placeholder="+0" />
              </td>
              <td>
                <input
                  className="savingThrowRoll"
                  type="button"
                  value="Wisdom"
                  onClick={() => rollSave()}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="savingThrowCheckbox"
                  type="checkbox"
                  onChange={() => updateModifier()}
                />
              </td>
              <td>
                <input className="savingThrowModifier" placeholder="+0" />
              </td>
              <td>
                <input
                  className="savingThrowRoll"
                  type="button"
                  value="Charisma"
                  onClick={() => rollSave()}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="nestedSaves">
        <label>Saving Throws</label>
        <table>
          <thead />
          <tbody>
            <tr>
              <td>
                <input
                  className="savingThrowCheckbox"
                  type="checkbox"
                  onChange={() => updateModifier()}
                />
              </td>
              <td>
                <label className="savingThrowModifier">{strengthMod}</label>
              </td>
              <td>
                <input
                  className="savingThrowRoll"
                  type="button"
                  value="Acrobatics (Str)"
                  onClick={() => rollSave()}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttributeSaves;
