// components/FMovies.js
import React from 'react';
import ButtonGroup from "../../components/ButtonGroup";
import { faPlus, faComputerMouse, faHouse, faArrowLeft, faExpand } from '@fortawesome/free-solid-svg-icons';

export default function FMovies() {
  const fMovies = [
    [
      { name: "newTabFM", icon: faPlus, alias: "NEW TAB" },
      { name: "click1FM", icon: faComputerMouse, alias: "CLICK 1" },
      { name: "startFM", icon: faArrowLeft, alias: "START" },
      { name: "skipIntroFM", icon: faComputerMouse, alias: "SKIP" },
      { name: "fullScreen", icon: faExpand, alias: "FLSCRN" },
      { name: "goBack", icon: faHouse, alias: "HOME" },
    ]
  ];

  return (
    <ButtonGroup buttonData={fMovies} whatContainer="fMovies" />
  );
}
