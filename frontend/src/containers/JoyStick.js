// components/JoyStick.js
import React from 'react';
import ButtonGroup from "../components/ButtonGroup";
import { 
  faArrowUp, faComputerMouse, faXmark, faArrowsRotate, faArrowDown, faArrowLeft, faArrowRight, faChevronUp, faChevronLeft, faCircle, faChevronRight, faChevronDown 
} from '@fortawesome/free-solid-svg-icons';

export default function JoyStick() {
  const joyStick = [
    [
      { name: "moveupm", icon: faChevronUp, alias: "" },
    ],
    [
      { name: "moveleftMainController", icon: faChevronLeft, alias: "" },
      { name: "clickMainController", icon: faCircle, alias: "" },
      { name: "moverightMainController", icon: faChevronRight, alias: "" },
    ],
    [
      { name: "movedownMainController", icon: faChevronDown, alias: "" }
    ]
  ];

  return (
    <ButtonGroup buttonData={joyStick} whatContainer="joyStick" />
  );
}
