import LeTransition from "./index.vue";
import LeButton from "../Button/index.vue";
import "../styles/index.scss";

export default {
  title: "动画",
};

const render = (names) => {
  const itemStyle =
    "padding:0px 20px;margin-top:10px;float:left;color:white;text-align:center;margin-right:10px;display:inline-block;height:100px;background-color:skyblue;line-height:100px;";
  const wrapperStyle = "padding-top:10px; padding-left:10px;";
  return {
    template: `
       <div style="${wrapperStyle}">
        <LeButton type="primary" @click="clickHandle"> open / close </LeButton>
        <LeTransition :name="name" v-for="(name , $index) in names" :key="$index">
            <div v-show="show" style="${itemStyle}" >
               {{ name }}
            </div>
        </LeTransition>
       </div>
    `,
    data() {
      return {
        show: true,
        names,
      };
    },
    components: {
      LeButton,
      LeTransition,
    },
    methods: {
      clickHandle() {
        this.show = !this.show;
      },
    },
  };
};

export const fade = () => {
  return render(["fade-in-linear", "fade-in"]);
};

export const zoom = () => {
  return render(["zoom-in-center", "zoom-in-top", "zoom-in-bottom"]);
};
