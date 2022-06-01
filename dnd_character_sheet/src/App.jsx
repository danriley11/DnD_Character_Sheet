import React from 'react';

import './styles/App.css';

import MeleeAttackForm from './components/meleeAttack';
import UploadForm from './functions/uploadForm';

import handleFormSubmit from './functions/downloadForm';

function App() {
  return (
    <>
      <form id="test">
        <UploadForm />
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
