import React from 'react';

import './styles/App.css';

import UploadForm from './functions/uploadForm';
import MeleeAttackForm from './components/meleeAttack';
import DownloadForm from './functions/downloadForm';

function App() {
  return (
    <>
      <form id="DnDForm">
        <UploadForm />
        <MeleeAttackForm />
        <DownloadForm />
      </form>

      <div className="results">
        <h2>Form Data</h2>
        <pre />
      </div>
    </>
  );
}

export default App;
