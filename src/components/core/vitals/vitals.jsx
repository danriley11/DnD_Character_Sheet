// AC | Initiative | Speed | Death Saves | Max/Temp/Current HP | Exhaustion
import React from 'react';

import '../../../styles/core/vitals/vitalsIndex.css';

import HitDie from './hitDie/hitDie';
import HeroResource from './heroResource/heroResources';

function VitalsMain() {
  return (
    <div className="innerContainer">
      <div className="combatVitalsContainer">
        <div className="smallVital" id="ArmorClass">
          AC
        </div>
        <div className="smallVital" id="Initiative">
          I
        </div>
        <div className="smallVital" id="Speed">
          Speed
        </div>
        <div className="deathSavesContainer">DeathSaves</div>
        <div className="healthContainer">Health</div>
      </div>
      <HitDie />
      <HeroResource />
    </div>
  );
}

export default VitalsMain;
