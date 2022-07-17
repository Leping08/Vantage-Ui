import { h } from "vue";
import theme from "../theme";

const tab = {
  props: {
    tabId: {
      type: Number,
      required: true,
    },
  },
  render() {
    return h(
      "div",
      {
        class: "whitespace-nowrap mx-2 py-4 px-1 font-medium text-sm leading-5",
      },
      h(this.$slots.default)
    );
  },
};

const tabContent = {
  props: {
    tabId: {
      type: Number,
      required: true,
    },
  },
  render() {
    return h("div", { class: "" }, h(this.$slots.default));
  },
};

const tabs = {
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
  },
  render() {
    const elements = this.$slots.default();
    const color = this.$props.color || theme.color;
    const tabs = elements
      .filter((elements) => elements.type === tab)
      .map((tab) => {
        return h(tab, {
          "data-qa": tab.props.tabId,
          class:
            tab.props.tabId === this.$props.modelValue
              ? `border-b-2 border-${color}-500 hover:text-${color}-500 text-${color}-500 focus:outline-none cursor-pointer`
              : "border-b-2 border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 cursor-pointer",
          onClick: () => {
            this.$emit("update:modelValue", tab.props.tabId);
          },
        });
      });

    //Working
    const content = elements.find(
      (element) =>
        element.type === tabContent && element.props.tabId === this.modelValue
    );

    return [
      h(() => h("div", { class: "flex border-b border-gray-200" }, tabs)),
      h(() => h("div", { class: "p-4" }, content)),
    ];
  },
};

export { tab as Tab, tabs as Tabs, tabContent as TabContent };
