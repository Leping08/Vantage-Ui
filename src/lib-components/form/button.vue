<template>
  <button
    type="button"
    :class="[
      `inline-flex items-center focus:outline-none ${buttonSize} ${buttonRounded} ${buttonShadow}`,
      fullWidth ? 'flex justify-center w-full' : '',
      outline
        ? `border border-${buttonColor}-500 text-${buttonColor}-500 bg-white hover:bg-${buttonColor}-50 active:bg-${buttonColor}-100`
        : `text-white bg-${buttonColor}-600 active:bg-${buttonColor}-800 hover:bg-${buttonColor}-700`,
      ring
        ? `focus:ring-2 focus:ring-offset-2 focus:ring-${buttonColor}-600`
        : `focus:ring-0`,
      disabled ? 'cursor-not-allowed' : '',
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
      required: false,
    },
    outline: {
      type: Boolean,
      required: false,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: "md",
    },
    rounded: {
      type: String,
      required: false,
    },
    shadow: {
      type: String,
      required: false,
      default: "shadow",
    },
    ring: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    buttonColor() {
      return this.disabled ? "gray" : this.color || theme.color;
    },
    buttonRounded() {
      return this.rounded || theme.rounded;
    },
    buttonShadow() {
      return this.shadow || theme.shadow;
    },
    buttonSize() {
      if (this.size === "xs") return `px-2.5 py-1.5 text-xs font-medium`;
      else if (this.size === "sm")
        return `px-3 py-2 text-sm leading-4 font-medium`;
      else if (this.size === "md") return `px-4 py-2 text-sm font-medium`;
      else if (this.size === "lg") return `px-4 py-2 text-base font-medium`;
      else if (this.size === "xl") return `px-6 py-3 text-base font-medium`;
      else return `px-4 py-2 text-md font-medium`;
    },
  },
};
</script>
