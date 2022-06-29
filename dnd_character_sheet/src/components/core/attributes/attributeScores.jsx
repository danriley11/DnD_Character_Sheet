// main scores/modifiers
import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/core/attributeScores.css';

function AttributeScores({
  strengthMod,
  setStrengthMod,
  dexterityMod,
  setDexterityMod,
  constitutionMod,
  setConstitutionMod,
  intelligenceMod,
  setIntelligenceMod,
  wisdomMod,
  setWisdomMod,
  charismaMod,
  setCharismaMod,
}) {
  const updateStrengthMod = (e) => {
    setStrengthMod(`+${e.target.value}`);
    console.log(`+${e.target.value}`);
  };
  const updateDexterityMod = (e) => {
    setDexterityMod(`+${e.target.value}`);
    console.log(`+${e.target.value}`);
  };
  const updateConstitutionMod = (e) => {
    setConstitutionMod(`+${e.target.value}`);
    console.log(`+${e.target.value}`);
  };
  const updateIntelligenceMod = (e) => {
    setIntelligenceMod(`+${e.target.value}`);
    console.log(`+${e.target.value}`);
  };
  const updateWisdomMod = (e) => {
    setWisdomMod(`+${e.target.value}`);
    console.log(`+${e.target.value}`);
  };
  const updateCharismaMod = (e) => {
    setCharismaMod(`+${e.target.value}`);
    console.log(`+${e.target.value}`);
  };
  return (
    <div className="attributeScoresContainer">
      <div className="nestedScores">
        <div>
          <input className="modifierButton" type="button" value="STRENGTH" />
        </div>
        <div>
          <label className="attributeModifier">{strengthMod}</label>
        </div>
        <div>
          <input
            className="attributeScore"
            placeholder="10"
            onChange={(e) => updateStrengthMod(e)}
          />
        </div>
      </div>
      <div className="nestedScores">
        <div>
          <input className="modifierButton" type="button" value="DEXTERITY" />
        </div>
        <div>
          <label className="attributeModifier">{dexterityMod}</label>
        </div>
        <div>
          <input
            className="attributeScore"
            placeholder="10"
            onChange={(e) => updateDexterityMod(e)}
          />
        </div>
      </div>
      <div className="nestedScores">
        <div>
          <input className="modifierButton" type="button" value="CONSTITUTION" />
        </div>
        <div>
          <label className="attributeModifier">{constitutionMod}</label>
        </div>
        <div>
          <input
            className="attributeScore"
            placeholder="10"
            onChange={(e) => updateConstitutionMod(e)}
          />
        </div>
      </div>
      <div className="nestedScores">
        <div>
          <input className="modifierButton" type="button" value="INTELLIGENCE" />
        </div>
        <div>
          <label className="attributeModifier">{intelligenceMod}</label>
        </div>
        <div>
          <input
            className="attributeScore"
            placeholder="10"
            onChange={(e) => updateIntelligenceMod(e)}
          />
        </div>
      </div>
      <div className="nestedScores">
        <div>
          <input className="modifierButton" type="button" value="WISDOM" />
        </div>
        <div>
          <label className="attributeModifier">{wisdomMod}</label>
        </div>
        <div>
          <input className="attributeScore" placeholder="10" onChange={(e) => updateWisdomMod(e)} />
        </div>
      </div>
      <div className="nestedScores">
        <div>
          <input
            className="modifierButton"
            type="button"
            value="CHARISMA"
            onClick={() => console.log('test')}
          />
        </div>
        <div>
          <label className="attributeModifier">{charismaMod}</label>
        </div>
        <div>
          <input
            className="attributeScore"
            placeholder="10"
            onChange={(e) => updateCharismaMod(e)}
          />
        </div>
      </div>
    </div>
  );
}

AttributeScores.propTypes = {
  strengthMod: PropTypes.string,
  setStrengthMod: PropTypes.func,
  dexterityMod: PropTypes.string,
  constitutionMod: PropTypes.string,
  intelligenceMod: PropTypes.string,
  wisdomMod: PropTypes.string,
  charismaMod: PropTypes.string,
};

AttributeScores.defaultProps = {
  strengthMod: '+0',
  setStrengthMod: '',
  dexterityMod: '+0',
  setDexterityMod: '',
  constitutionMod: '+0',
  setConstitutionMod: '',
  intelligenceMod: '+0',
  setIntelligenceMod: '',
  wisdomMod: '+0',
  setWisdomMod: '',
  charismaMod: '+0',
  setCharismaMod: '',
};

export default AttributeScores;
