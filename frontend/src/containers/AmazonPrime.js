// components/AmazonPrime.js
import React from 'react';
import ButtonGroup from "../components/ButtonGroup";
import { faPlus, faVolumeHigh, faHouse, faArrowLeft, faExpand, faVolumeLow } from '@fortawesome/free-solid-svg-icons';

export default function AmazonPrime() {
  const amazonPrime = [
    [
      { name: "newTabAP", icon: faPlus, alias: "NEW TAB" },
      { name: "volUpAP", icon: faVolumeHigh, alias: "VOL" },
      { name: "fullScreenAP", icon: faExpand, alias: "FLSCRN" },
    ],
    [
      { name: "startAP", icon: faArrowLeft, alias: "START" },
      { name: "volDownAP", icon: faVolumeLow, alias: "VOL" },
      { name: "goBack", icon: faHouse, alias: "HOME" },
    ]
  ];

  return (
    <ButtonGroup buttonData={amazonPrime} whatContainer="amazonPrime" />
  );
}
