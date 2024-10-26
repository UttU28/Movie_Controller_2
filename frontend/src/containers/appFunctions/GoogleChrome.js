// components/GoogleChrome.js
import React from 'react';
import ButtonGroup from "../../components/ButtonGroup";
import { faPlus, faFloppyDisk, faHouse, faExpand } from '@fortawesome/free-solid-svg-icons';

export default function GoogleChrome() {
  const googleChrome = [
    [
      { name: "newTabGC", icon: faPlus, alias: "NEW TAB" },
      { name: "fullScreen", icon: faExpand, alias: "FLSCRN" },
      { name: "saveLinkGC", icon: faFloppyDisk, alias: "SAVE LINK" },
      { name: "goBack", icon: faHouse, alias: "GO BACK" }
    ]
  ];

  return (
    <ButtonGroup buttonData={googleChrome} whatContainer="googleChrome" />
  );
}
