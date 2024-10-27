// components/AmazonPrime.js
import React from 'react';
import ButtonGroup from "../../components/ButtonGroup";
import { faPlus, faHouse, faArrowLeft, faExpand } from '@fortawesome/free-solid-svg-icons';

export default function AmazonPrime() {
  const amazonPrime = [
    [
      { name: "newTabAP", icon: faPlus, alias: "NEW TAB" },
      { name: "fullScreenAP", icon: faExpand, alias: "FLSCRN" },
      { name: "startAP", icon: faArrowLeft, alias: "START" },
      { name: "goBack", icon: faHouse, alias: "HOME" },
    ]
  ];

  return (
    <ButtonGroup buttonData={amazonPrime} whatContainer="amazonPrime" />
  );
}
