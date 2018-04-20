
import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Gallery from "../components/Info/Gallery";

storiesOf("Species info", module)
.add("Gallery", () => <Gallery />)