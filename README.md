# DnD_Character_Sheet
A passion project of mine to help learn and consolidate new skills and development strategies.

My goal is to recreate an older website of mine (which you can find here: https://gentle-ridge-88658.herokuapp.com/) using React.JS with complete functionality.

My commits and merges will have special characters to help identify new, removed or coming-soon features.

**Legend:**

`"+" : New or updated`

`"-" : Removed`

`"~" : What will be done in the next commit`

**Goals:**

1. **_Downloadable form_**
  - ~~Create form~~
  - Implement dynamic form fields
  - Have dynamic form downloadable

2. **_Populate form_** via file upload

3. **_Save form_** to local storage
  - Have form fields save after exiting input spaces
  - Have form fields save after making selections

4. **_Redesign form_** to immitate a real DnD character sheet
  - Have Ability_Scores update Modifier_Scores
  - Have Modifier_Scores update Save_Scores, Skill_Scores and Passive_Scores

5. **_Sidebar Menu_**
  - Host buttons for: 
    - Account
      - Dropdown: Log In / Sign Up
    - Save 
      - Button 
    - Download 
      - Button
      - Toggle: Auto-Download when window closes
    - Upload 
      - Button 
    - Jump 
      - Dropdown: Stats / Attacks / Inventory / Traits / Features / Notes 
    - Long Rest 
      - Button 
    - Short Rest 
      - Button : Rolls (& console.logs) Hit Dice; adding to 'Current Hit Points' 
    - Level Up 
      - Button 
    - Status Effects 
      - Dropdown of buttons: creates a sticky icon in the right-border of the page with info displayed using onHover

6. **_Modals_**
  - Modal pop-ups for sidebar buttons; excluding Jump and Status Effects
