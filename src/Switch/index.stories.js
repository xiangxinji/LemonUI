import LeSwitch from "./index.vue";

import { renderByTemplate } from "../../utils/storybook";
import "../styles/index.scss";

export default {
  title: "开关",
};

const render = renderByTemplate("LeSwitch", LeSwitch);

export const using = () => {
    return {
        components : {
            LeSwitch 
        },
        data () {
            return {
                flag : true 
            }
        },
        template : `
            <div style="padding:16px 8px;">
                <LeSwitch v-model="flag"></LeSwitch>
            </div>
        `
    }
}