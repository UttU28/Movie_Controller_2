// components/HotKeys.js
import ButtonGroup from "../components/ButtonGroup";
import { faMinimize, faDownload, faExpand } from '@fortawesome/free-solid-svg-icons';

export default function HotKeys() {
  const hotKeys = [[
    { name: "escape", icon: faMinimize, alias: "ESC" },
    { name: "desktop", icon: faDownload, alias: "WIN+D" },
    { name: "fullScreen", icon: faExpand, alias: "FLSCRN" }
  ]];

  return (
    <ButtonGroup buttonData={hotKeys} whatContainer="hotKeys" />
  );
}
