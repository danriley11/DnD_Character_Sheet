import React from 'react';

import './styles/App.css';

import NavBar from './components/navBar/NavBar';
import UploadForm from './functions/uploadForm';
import DownloadForm from './functions/downloadForm';
import Core from './components/core/coreIndex';
import Combat from './components/combat/combatIndex';

function App() {
  return (
    <>
      <form id="DnDForm">
        <UploadForm />
        <NavBar />
        <Core />
        <Combat />
        {/* <Inventory /> */}
        {/* <Context /> */}
        {/* <Notes /> */}
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
