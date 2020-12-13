<template>
  <button
    type="button"
    :class="[
      fullWidth ? 'flex justify-center w-full' : '',
      `inline-flex items-center px-4 py-2 text-xs font-medium ${rounded} ${shadow} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${buttonColor}-500`,
      outline ? `border border-${buttonColor}-500 text-${buttonColor}-500 bg-white hover:bg-gray-100 active:bg-gray-200` : `text-white bg-${buttonColor}-600 active:bg-${buttonColor}-800 hover:bg-${buttonColor}-700`
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
      default: false
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    buttonColor() {
      return this.color || theme.color;
    },
    rounded() {
      return theme.rounded || "";
    },
    shadow() {
      return theme.shadow || "";
    }
  }
};
</script>
