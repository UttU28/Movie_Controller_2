// components/MainController.js
import React from 'react';
import ButtonGroup from "../components/ButtonGroup";
import { faArrowUp, faComputerMouse, faXmark, faArrowsRotate, faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function MainController() {
  const mainController = [
    [
      { name: "scrollUpMain", icon: faArrowUp, alias: "SCROLL" },
      { name: "clickMain", icon: faComputerMouse, alias: "CLICK" },
      { name: "moveUpMain", icon: faArrowUp, alias: "MOVE" },
      { name: "closeTabMain", icon: faXmark, alias: "CLOSE" },
      { name: "refreshMain", icon: faArrowsRotate, alias: "REFRESH" }
    ],
    [
      { name: "scrollDownMain", icon: faArrowDown, alias: "SCROLL" },
      { name: "moveleftMain", icon: faArrowLeft, alias: "MOVE" },
      { name: "movedownMain", icon: faArrowDown, alias: "MOVE" },
      { name: "moverightMain", icon: faArrowRight, alias: "MOVE" },
      { name: "goBackMain", icon: faArrowLeft, alias: "GO BACK" }
    ]
  ];

  return (
    <ButtonGroup buttonData={mainController} whatContainer="mainController" />
  );
}
