import React, { useState } from 'react';
// import meleeAttack from "../../functions/attack";

// import '../../styles/xyz.css'

function MeleeAttackForm() {
  const blankMeleeAttack = {
    AttackName: '',
    AttackToHit: 0,
    AttackDamage: '',
  };

  const [meleeAttackState, setMeleeAttackState] = useState(() => [{ ...blankMeleeAttack }]);

  const addMeleeAttack = () => {
    // const updatedMeleeAttacksArray = [...meleeAttackState];
    // let updatedMeleeAttacksArray = [
    //   ...meleeAttackState.splice(0, 0, { ...blankMeleeAttack }),
    // ];
    // updatedMeleeAttacksArray.splice(0, 0, { ...blankMeleeAttack });
    // setMeleeAttackState([...updatedMeleeAttacksArray]);
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
          {meleeAttackState.map((element, index) => {
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
                  {/* Ideal: have rows uniquely removed
                  <input
                    className="removeAttack"
                    name="removeAttack"
                    onClick={() => removeMeleeAttack()}
                    type="button"
                    value="Remove"
                  /> */}
                </td>
              </tr>
            );
          })}
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

export default MeleeAttackForm;
