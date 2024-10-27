// components/IBomma.js
import React from 'react';
import ButtonGroup from "../../components/ButtonGroup";
import { faPlus, faComputerMouse, faHouse, faInfo, faMusic, faFastForward } from '@fortawesome/free-solid-svg-icons';

export default function IBomma() {
  const iBomma = [
    [
      { name: "newTabIB", icon: faPlus, alias: "NEW TAB" },
      { name: "startIB", icon: faInfo, alias: "START" },
      { name: "skipIntroIB", icon: faFastForward, alias: "SKIP" },
      { name: "fullScreen", icon: faMusic, alias: "FLSCRN" },
      { name: "goBack", icon: faHouse, alias: "HOME" }
    ]
  ];

  return (
    <ButtonGroup buttonData={iBomma} whatContainer="iBomma" />
  );
}
