// components/IBomma.js
import React from 'react';
import ButtonGroup from "../components/ButtonGroup";
import { faPlus, faComputerMouse, faVolumeHigh, faHouse, faInfo, faExpand, faVolumeLow, faMusic } from '@fortawesome/free-solid-svg-icons';

export default function IBomma() {
  const iBomma = [
    [
      { name: "newTabIB", icon: faPlus, alias: "NEW TAB" },
      { name: "click1IB", icon: faComputerMouse, alias: "CLICK 1" },
      { name: "fullScreenIB", icon: faMusic, alias: "FLSCRN" },
      { name: "startIB", icon: faInfo, alias: "START" },
      { name: "click2IB", icon: faExpand, alias: "CLICK 2" },
      { name: "goBack", icon: faHouse, alias: "HOME" }
    ]
  ];

  return (
    <ButtonGroup buttonData={iBomma} whatContainer="iBomma" />
  );
}
