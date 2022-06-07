import React from 'react';

export default function createMeleeAttack(index, handleMeleeAttackChange, removeMeleeAttack) {
  // const AttackId = `AttackId[${index}]`;
  const MeleeNameId = `MeleeName[${index}]`;
  const MeleeToHitId = `MeleeToHit[${index}]`;
  const MeleeDamageId = `MeleeDamage[${index}]`;
  const MeleeRollId = `MeleeRoll[${index}]`;

  return (
    <tr key={index}>
      <td>
        <input
          // onClick={}
          className="MeleeRoll"
          data-index={index}
          id={MeleeRollId}
          name={MeleeRollId}
          type="button"
          value="roll"
        />
      </td>
      <td>
        <input
          // value={meleeAttackState[index].AttackName}
          className="MeleeName"
          data-index={index}
          id={MeleeNameId}
          name={MeleeNameId}
          onChange={(e) => handleMeleeAttackChange(e)}
          type="text"
        />
      </td>
      <td>
        <input
          // value={meleeAttackState[index].AttackToHit}
          className="MeleeToHit"
          data-index={index}
          id={MeleeToHitId}
          name={MeleeToHitId}
          onChange={(e) => handleMeleeAttackChange(e)}
          type="number"
        />
      </td>
      <td>
        <input
          // value={meleeAttackState[index].AttackDamage}
          className="MeleeDamage"
          data-index={index}
          id={MeleeDamageId}
          name={MeleeDamageId}
          onChange={handleMeleeAttackChange}
          type="text"
        />
      </td>
      <td>
        {/* Ideal: have rows uniquely removed */}
        <input
          className="removeAttack"
          name="removeAttack"
          onClick={() => removeMeleeAttack(index)}
          type="button"
          value="Remove"
        />
      </td>
    </tr>
  );
}
