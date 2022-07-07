import React from 'react';

// import style

import MeleeAttackForm from './meleeAttack';
import SpellAttackForm from './spellAttack';

function Combat() {
  return (
    <div className="combatContainer">
      <MeleeAttackForm />
      <SpellAttackForm />
    </div>
  );
}

export default Combat;
