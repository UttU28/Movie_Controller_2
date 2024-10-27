// components/HotKeys.js
import ButtonGroup from "../components/ButtonGroup";
import { faMinimize, faDownload, faGlobe, faArrowsRotate, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faArrowRight, faXmark, faChevronRight, faChevronLeft, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import { faRev } from '@fortawesome/free-brands-svg-icons';

export default function HotKeys() {
  const hotKeys = [[
    { name: "refreshPage", icon: faArrowsRotate, alias: "REFRESH" },
    { name: "altTab", icon: faMinimize, alias: "ALT+TAB" },
    { name: "desktop", icon: faDownload, alias: "WIN+D" },
    { name: "openChrome", icon: faGlobe, alias: "CHROME" },
    { name: "reviveTabs", icon: faRev, alias: "C+S+T" },
    { name: "volumeUp", icon: faVolumeHigh, alias: "VOL +" },
  ],
  [
    { name: "prevTab", icon: faArrowLeft, alias: "PREV TAB" },
    { name: "nextTab", icon: faArrowRight, alias: "NEXT TAB" },
    { name: "closeTab", icon: faXmark, alias: "CLS TAB" },
    { name: "goBackTab", icon: faChevronLeft, alias: "TAB BACK" },
    { name: "goAheadTab", icon: faChevronRight, alias: "TAB NEXT" },
    { name: "volumeDown", icon: faVolumeLow, alias: "VOL -" },
  ]
  ];

  return (
    <ButtonGroup buttonData={hotKeys} whatContainer="hotKeys" />
  );
}
