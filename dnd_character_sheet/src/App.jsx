import React from 'react';

import './styles/App.css';

import NavBar from './components/navBar/NavBar';
import UploadForm from './functions/uploadForm';
import MeleeAttackForm from './components/meleeAttack';
import DownloadForm from './functions/downloadForm';
import SpellAttackForm from './components/spellAttack';

function App() {
  return (
    <>
      <form id="DnDForm">
        <NavBar />
        <UploadForm />
        <MeleeAttackForm />
        <SpellAttackForm />
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
