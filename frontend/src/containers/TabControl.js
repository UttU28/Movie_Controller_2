// components/TabControl.js
import ButtonGroup from "../components/ButtonGroup";
import { faArrowLeft, faArrowRight, fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';

export default function TabControl() {
  const tabControl = [[
    { name: "prevTab", icon: faArrowLeft, alias: "PREV" },
    { name: "one", icon: fa1, alias: "TAB" }, // Changed icon to fa1
    { name: "two", icon: fa2, alias: "TAB" }, // Changed icon to fa2
    { name: "three", icon: fa3, alias: "TAB" }, // Changed icon to fa3
    { name: "nextTab", icon: faArrowRight, alias: "NEXT" }
  ]];

  return (
    <ButtonGroup buttonData={tabControl} whatContainer="tabControl" />
  );
}
