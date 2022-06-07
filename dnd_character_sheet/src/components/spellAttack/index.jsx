import React, { useState } from 'react';

import createSpellAttack from './newSpellAttack';

export default function SpellAttackForm() {
  const blankSpellAttack = {
    SpellID: 0,
    SpellName: '',
    SpellToHit: 0,
    SpellSave: 0,
    SpellDamage: '',
    SpellConcentration: false,
    SpellNotes: '',
  };

  const [spellAttackState, setSpellAttackState] = useState(() => [{ ...blankSpellAttack }]);

  const addSpellAttack = () => {
    setSpellAttackState([...spellAttackState, { ...blankSpellAttack }]);
  };

  const handleSpellAttackChange = (e) => {
    const updatedSpellAttackFields = [...spellAttackState];
    updatedSpellAttackFields[e.target.dataset.index][e.target.className] = e.target.value;
    setSpellAttackState(updatedSpellAttackFields);
    console.log('updated');
  };

  const removeSpellAttack = (index) => {
    const tempSpellAttackState = [...spellAttackState];
    tempSpellAttackState.splice(index, 1);
    setSpellAttackState([...tempSpellAttackState]);
    console.log(index);
  };

  return (
    <div className="spell-input-group" id="SpellAttack">
      <label>
        <h3>Spell Attack(s)</h3>
      </label>
      <table>
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Bonus To Hit</th>
            <th>Spell Save DC</th>
            <th>Damage</th>
          </tr>
        </thead>
        <tbody>
          {spellAttackState.map((element, index) =>
            createSpellAttack(index, handleSpellAttackChange, removeSpellAttack),
          )}
        </tbody>
      </table>
      <div>
        <input
          className="addAttack"
          onClick={() => addSpellAttack()}
          type="button"
          value="Add New Attack"
        />
        <input
          className="removeAttack"
          onClick={() => removeSpellAttack()}
          type="button"
          value="Remove Last"
        />
      </div>
    </div>
  );
}
