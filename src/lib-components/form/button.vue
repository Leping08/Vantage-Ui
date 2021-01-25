<template>
  <button
    type="button"
    :class="[
      fullWidth ? 'flex justify-center w-full' : '',
      `inline-flex items-center ${buttonSize} ${buttonRounded} ${shadow} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${buttonColor}-600`,
      outline
        ? `border border-${buttonColor}-500 text-${buttonColor}-500 bg-white hover:bg-gray-100 active:bg-gray-200`
        : `text-white bg-${buttonColor}-600 active:bg-${buttonColor}-800 hover:bg-${buttonColor}-700`
    ]"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
import theme from "./../theme";
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      required: false
    },
    outline: {
      type: Boolean,
      required: false,
      default: false
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: "md"
    },
    rounded: {
      type: String,
      required: false
    }
  },
  computed: {
    buttonColor() {
      return this.color || theme.color;
    },
    buttonRounded() {
      return this.rounded || theme.rounded;
    },
    shadow() {
      return theme.shadow || "";
    },
    buttonSize() {
      if (this.size === "xs") return `px-2.5 py-1.5 text-xs font-medium`;
      else if (this.size === "sm")
        return `px-3 py-2 text-sm leading-4 font-medium`;
      else if (this.size === "md") return `px-4 py-2 text-sm font-medium`;
      else if (this.size === "lg") return `px-4 py-2 text-base font-medium`;
      else if (this.size === "xl") return `px-6 py-3 text-base font-medium`;
      else return `px-4 py-2 text-md font-medium`;
    }
  }
};
</script>
