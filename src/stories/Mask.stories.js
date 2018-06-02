import React from "react";

import { storiesOf } from "@storybook/react";
import { ScreenMask, Mask } from "../components/common/Mask";
import { withNotes } from "@storybook/addon-notes";

storiesOf("Masks", module)
  .add("ScreenMask", () => (
    <ScreenMask style={{ background: "#000" }}>
      <h3 style={{ color: "blue" }}>Screen Mask</h3>
    </ScreenMask>
  ))
  .add(
    "BlockMask",
    withNotes("The position of block should be relative")(() => (
      <div style={{ width: 500, height: 500, position: "relative" }}>
        <Mask opacity={0.5} style={{ background: "#000" }}>
          <h3 style={{ color: "red" }}>Block mask</h3>
        </Mask>
      </div>
    ))
  );
