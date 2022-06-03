import React from 'react';

export default function createMeleeAttack(index, handleMeleeAttackChange) {
  // const AttackId = `AttackId[${index}]`;
  const AttackNameId = `AttackName[${index}]`;
  const AttackToHitId = `AttackToHit[${index}]`;
  const AttackDamageId = `AttackDamage[${index}]`;

  return (
    <tr key={index}>
      <td>
        <input
          // onClick={}
          id="RollAttack"
          name="RollAttack"
          type="button"
          value="roll"
        />
      </td>
      <td>
        <input
          // value={meleeAttackState[index].AttackName}
          className="attackName"
          data-index={index}
          id={AttackNameId}
          name={AttackNameId}
          onChange={(e) => handleMeleeAttackChange(e)}
          type="text"
        />
      </td>
      <td>
        <input
          // value={meleeAttackState[index].AttackToHit}
          className="attackToHit"
          data-index={index}
          id={AttackToHitId}
          name={AttackToHitId}
          onChange={(e) => handleMeleeAttackChange(e)}
          type="number"
        />
      </td>
      <td>
        <input
          // value={meleeAttackState[index].AttackDamage}
          className="attackDamage"
          data-index={index}
          id={AttackDamageId}
          name={AttackDamageId}
          onChange={handleMeleeAttackChange}
          type="text"
        />
      </td>
      <td>
        {/* Ideal: have rows uniquely removed */}
        {/* <input
          className="removeAttack"
          name="removeAttack"
          onClick={() => removeMeleeAttack(index)}
          type="button"
          value="Remove"
        /> */}
      </td>
    </tr>
  );
}
