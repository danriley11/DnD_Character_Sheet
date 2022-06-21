import React from 'react';

function Header() {
  return (
    <header>
      <section className="characterName">
        <label htmlFor="characterName">Character Name</label>
        <input name="characterName" id="characterName" placeholder="Character Name" />
      </section>
      <section className="characterContext">
        <ul>
          <li>
            <label htmlFor="classLevel">
              <a href="https://www.dndbeyond.com/classes">Class</a> & Level
            </label>
            <input name="classLevel" placeholder="Class 1" />
          </li>
          <li>
            <label htmlFor="background">
              <a href="https://5e.tools/backgrounds.html#acolyte_phb">Background</a>
            </label>
            <input name="background" placeholder="Background" />
          </li>
          <li>
            <label htmlFor="playerName">Player Name</label>
            <input name="playerName" placeholder="Player Name" />
          </li>
          <li>
            <label htmlFor="race">Race</label>
            <input name="race" placeholder="Race" />
          </li>
          <li>
            <label htmlFor="alignment">
              <a href="https://dnd5e.info/beyond-1st-level/alignment/">Alignment</a>
            </label>
            <input name="alignment" placeholder="Alignment" />
          </li>
          <li>
            <label htmlFor="experiencePoints">Experience Points</label>
            <input name="experiencePoints" placeholder="0" />
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
