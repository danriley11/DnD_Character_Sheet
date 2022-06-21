import React from 'react';

export default function createSpellAttack(index, handleSpellAttackChange, removeSpellAttack) {
  const SpellNameId = `SpellName[${index}]`;
  const SpellToHitId = `SpellToHit[${index}]`;
  const SpellSaveId = `SpellSave[${index}]`;
  const SpellDamageId = `SpellDamage[${index}]`;
  const SpellRollId = `SpellRoll[${index}]`;

  return (
    <tr key={index}>
      <td>
        <input
          // onClick={}
          className="SpellRoll"
          data-index={index}
          id={SpellRollId}
          name={SpellRollId}
          type="button"
          value="roll"
        />
      </td>
      <td>
        <input
          // value={meleeAttackState[index].AttackName}
          className="SpellName"
          data-index={index}
          id={SpellNameId}
          name={SpellNameId}
          onChange={(e) => handleSpellAttackChange(e)}
          type="text"
        />
      </td>
      <td>
        <input
          // value={meleeAttackState[index].AttackToHit}
          className="SpellToHit"
          data-index={index}
          id={SpellToHitId}
          name={SpellToHitId}
          onChange={(e) => handleSpellAttackChange(e)}
          type="number"
        />
      </td>
      <td>
        <input
          // value={meleeAttackState[index].AttackDamage}
          className="SpellSave"
          data-index={index}
          id={SpellSaveId}
          name={SpellSaveId}
          onChange={(e) => handleSpellAttackChange(e)}
          type="text"
        />
      </td>
      <td>
        <input
          // value={meleeAttackState[index].AttackDamage}
          className="SpellRoll"
          data-index={index}
          id={SpellDamageId}
          name={SpellDamageId}
          onChange={(e) => handleSpellAttackChange(e)}
          type="text"
        />
      </td>
      <td>
        {/* Ideal: have rows uniquely removed */}
        <input
          className="removeAttack"
          name="removeAttack"
          onClick={() => removeSpellAttack(index)}
          type="button"
          value="Remove"
        />
      </td>
    </tr>
  );
}
