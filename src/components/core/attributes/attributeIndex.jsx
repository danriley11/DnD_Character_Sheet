import React, { useState } from 'react';

import '../../../styles/core/attributes/attributeIndex.css';
import AttributeSaves from './saves/attributeSaves';
import AttributeScores from './scores/attributeScores';

function Attributes() {
  const [strengthMod, setStrengthMod] = useState('+0');
  const [dexterityMod, setDexterityMod] = useState('+0');
  const [constitutionMod, setConstitutionMod] = useState('+0');
  const [intelligenceMod, setIntelligenceMod] = useState('+0');
  const [wisdomMod, setWisdomMod] = useState('+0');
  const [charismaMod, setCharismaMod] = useState('+0');

  return (
    <div className="attributesContainer">
      <AttributeScores
        strengthMod={strengthMod}
        setStrengthMod={setStrengthMod}
        dexterityMod={dexterityMod}
        setDexterityMod={setDexterityMod}
        constitutionMod={constitutionMod}
        setConstitutionMod={setConstitutionMod}
        intelligenceMod={intelligenceMod}
        setIntelligenceMod={setIntelligenceMod}
        wisdomMod={wisdomMod}
        setWisdomMod={setWisdomMod}
        charismaMod={charismaMod}
        setCharismaMod={setCharismaMod}
      />
      <AttributeSaves
        strengthMod={strengthMod}
        dexterityMod={dexterityMod}
        constitutionMod={constitutionMod}
        intelligenceMod={intelligenceMod}
        wisdomMod={wisdomMod}
        charismaMod={charismaMod}
      />
      {/* <attributesPassive /> */}
      {/* <proficiencies /> */}
    </div>
  );
}

export default Attributes;
