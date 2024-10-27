// components/Netflix.js
import React from 'react';
import ButtonGroup from "../../components/ButtonGroup";
import { faPlus, faHouse, faArrowLeft, faExpand, faFastForward } from '@fortawesome/free-solid-svg-icons';

export default function Netflix() {
  const netflix = [
    [
      { name: "newTabN", icon: faPlus, alias: "NEW TAB" },
      { name: "skipIntroN", icon: faFastForward, alias: "SKIP" },
      { name: "startN", icon: faArrowLeft, alias: "START" },
      { name: "fullScreen", icon: faExpand, alias: "FLSCRN" },
      { name: "goBack", icon: faHouse, alias: "HOME" },
    ]
  ];

  return (
    <ButtonGroup buttonData={netflix} whatContainer="netflix" />
  );
}
