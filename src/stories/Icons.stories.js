import React from "react";
import { storiesOf } from "@storybook/react";
import {
  LogoIcon,
  BuildingIcon,
  BinocularsIcon,
  AnimalIcon,
  TargetIcon,
  DetectionIcon,
  Target2Icon
} from "../components/common/Icons";
import { withKnobs, text, number } from "@storybook/addon-knobs/react";

const options = {
    range: true,
    min: 20,
    max: 90,
    step: 1,
 };

storiesOf("SVG Icons", module)
  .addDecorator(withKnobs)
  .add("Brand icons", () => {
    const color = text("color", "#f00");
    const size = number("size", 50, options);
    return (
      <div>
        <LogoIcon color={color} size={size + "px"} />
        <BuildingIcon color={color} size={size + "px"} />
        <BinocularsIcon color={color} size={size + "px"} />
        <AnimalIcon color={color} size={size + "px"} />
        <TargetIcon color={color} size={size + "px"} />
      </div>
    );
  })
  .add("Home page icons", () => (
    <div>
      <DetectionIcon color="#000" />
      <TargetIcon color="#000" />
      <Target2Icon color="#000" />
      <BinocularsIcon color="#000" />
    </div>
  ));
