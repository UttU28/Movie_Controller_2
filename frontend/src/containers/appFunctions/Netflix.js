// components/Netflix.js
import React from 'react';
import ButtonGroup from "../../components/ButtonGroup";
import { faPlus, faVolumeHigh, faHouse, faArrowLeft, faVolumeLow, faExpand } from '@fortawesome/free-solid-svg-icons';

export default function Netflix() {
  const netflix = [
    [
      { name: "newTabN", icon: faPlus, alias: "NEW TAB" },
      { name: "fullScreenN", icon: faExpand, alias: "FLSCRN" },
      { name: "startN", icon: faArrowLeft, alias: "START" },
      { name: "goBack", icon: faHouse, alias: "HOME" },
    ]
  ];

  return (
    <ButtonGroup buttonData={netflix} whatContainer="netflix" />
  );
}
