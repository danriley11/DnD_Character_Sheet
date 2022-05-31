import React from 'react';

import './styles/App.css';

import MeleeAttackForm from './components/meleeAttack';

import handleFormSubmit from './functions/form';

function App() {
  return (
    <>
      <form id="test">
        <MeleeAttackForm />
        <button type="submit" onClick={(e) => handleFormSubmit(e)}>
          Download
        </button>
      </form>

      <div className="results">
        <h2>Form Data</h2>
        <pre />
      </div>
    </>
  );
}

export default App;
