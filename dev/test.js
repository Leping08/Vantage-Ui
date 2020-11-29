import { h } from "vue";

export const tab = {
  props: {
    tabId: {
      type: Number,
      required: true
    }
  },
  render() {
    return h(
      "div",
      {
        class: "whitespace-no-wrap ml-8 py-4 px-1 font-medium text-sm leading-5"
      },
      h(this.$slots.default)
    );
  }
};

export const tabContent = {
  props: {
    tabId: {
      type: Number,
      required: true
    }
  },
  render() {
    return h("div", { class: "" }, h(this.$slots.default));
  }
};

export const tabs = {
  props: {
    activeTabId: Number,
    required: false
  },
  render() {
    const elements = this.$slots.default();
    const tabs = elements
      .filter(elements => elements.type === tab)
      .map(tab => {
        return h(tab, {
          class:
            tab.props.tabId === this.$props.activeTabId
              ? "border-b-2 border-blue-500 hover:text-blue-500 text-blue-500 focus:outline-none cursor-pointer"
              : "border-b-2 border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-300 cursor-pointer",
          onClick: () => {
            this.$emit("update:activeTabId", tab.props.tabId);
          }
        });
      });

    //Working
    const content = elements.find(
      element =>
        element.type === tabContent && element.props.tabId === this.activeTabId
    );

    return [
      h(() => h("div", { class: "flex border-b border-gray-200" }, tabs)),
      h(() => h("div", { class: "p-4" }, content))
    ];
  }
};
