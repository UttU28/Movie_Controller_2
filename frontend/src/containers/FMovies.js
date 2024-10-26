// components/GoogleChrome.js
import React from 'react';
import ButtonGroup from "../components/ButtonGroup";
import { faPlus, faComputerMouse, faVolumeHigh, faHouse, faArrowLeft, faVolumeLow, faExpand } from '@fortawesome/free-solid-svg-icons';

export default function GoogleChrome() {
  const googleChrome = [
    [
      { name: "newTabGC", icon: faPlus, alias: "NEW TAB" },
      { name: "click1GC", icon: faComputerMouse, alias: "CLICK 1" },
      { name: "volUpGC", icon: faVolumeHigh, alias: "VOL" },
      { name: "fullScreenGC", icon: faExpand, alias: "FLSCRN" }
    ],
    [
      { name: "startGC", icon: faArrowLeft, alias: "START" },
      { name: "click2GC", icon: faComputerMouse, alias: "CLICK 2" },
      { name: "volDownGC", icon: faVolumeLow, alias: "VOL" },
      { name: "goBack", icon: faHouse, alias: "HOME" }
    ]
  ];

  return (
    <ButtonGroup buttonData={googleChrome} whatContainer="googleChrome" />
  );
}
