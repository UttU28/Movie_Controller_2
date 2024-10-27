// components/YouTube.js
import React from 'react';
import ButtonGroup from "../components/ButtonGroup";
import { faPlus, faMinimize, faVolumeHigh, faHouse, faInfo, faExpand, faVolumeLow, faMusic } from '@fortawesome/free-solid-svg-icons';

export default function YouTube() {
  const youTube = [
    [
      { name: "newTabYT", icon: faPlus, alias: "NEW TAB" },
      { name: "escapeYT", icon: faMinimize, alias: "ESC" },
      { name: "saveMusicYT", icon: faMusic, alias: "WORK" },
      { name: "iButtonYT", icon: faInfo, alias: "MNMIZE" },
      { name: "fullScreenYT", icon: faExpand, alias: "FLSCRN" },
      { name: "goBack", icon: faHouse, alias: "HOME" },
    ]
  ];

  return (
    <ButtonGroup buttonData={youTube} whatContainer="youTube" />
  );
}
