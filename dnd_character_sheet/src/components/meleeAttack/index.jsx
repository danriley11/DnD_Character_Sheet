import React, { useState } from 'react';

// import '../../styles/xyz.css'

import createMeleeAttack from './newMeleeAttack';

export default function MeleeAttackForm() {
  const blankMeleeAttack = {
    AttackID: 0,
    AttackName: '',
    AttackToHit: 0,
    AttackDamage: '',
  };

  const [meleeAttackState, setMeleeAttackState] = useState(() => [{ ...blankMeleeAttack }]);

  const addMeleeAttack = () => {
    setMeleeAttackState([...meleeAttackState, { ...blankMeleeAttack }]);
  };

  const handleMeleeAttackChange = (e) => {
    const updatedMeleeAttackFields = [...meleeAttackState];
    updatedMeleeAttackFields[e.target.dataset.index][e.target.className] = e.target.value;
    setMeleeAttackState(updatedMeleeAttackFields);
    console.log('updated');
  };

  const removeMeleeAttack = (index) => {
    // setMeleeAttackState(() => {
    //   meleeAttackState.filter(() => index !== 0);
    // });

    const tempMeleeAttackState = meleeAttackState;
    tempMeleeAttackState.splice([index], 1);
    setMeleeAttackState([...tempMeleeAttackState]);
    console.log(index);

    // let tableRow = e.target.getAttribute("removerow");
    // setMeleeAttackState(
    //   meleeAttackState.filter((keep) => keep.id !== tableRow)
    // );

    // const updatedMeleeAttacksArray = [...meleeAttackState];
    // updatedMeleeAttacksArray.splice(0, 1);
    // setMeleeAttackState([...updatedMeleeAttacksArray]);
  };

  return (
    <div className="input-group" id="MeleeAttack">
      <label>
        <h3>Melee Attack</h3>
      </label>
      <table>
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Bonus To Hit</th>
            <th>Damage</th>
          </tr>
        </thead>
        <tbody>
          {meleeAttackState.map((element, index) =>
            createMeleeAttack(index, handleMeleeAttackChange),
          )}
        </tbody>
      </table>
      <div>
        <input
          className="addAttack"
          onClick={() => addMeleeAttack()}
          type="button"
          value="Add New Attack"
        />
        <input
          className="removeAttack"
          onClick={() => removeMeleeAttack()}
          type="button"
          value="Remove Last"
        />
      </div>
    </div>
  );
}
