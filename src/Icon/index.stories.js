import LeIcon from "./index.vue";
// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
import { renderByTemplate } from "../../utils/storybook";
import "../styles/index.scss";

export default {
  title: "图标",
};

const render = renderByTemplate("LeIcon", LeIcon);

export const customer = render(`
    <LeIcon icon="home"></LeIcon>
    <LeIcon icon="car"></LeIcon>
`)

export const customerColor = render(`
    <LeIcon icon="home" color="red"></LeIcon>
`)

export const customerSize = render(`
    <LeIcon icon="home" :size="30"></LeIcon>
`)