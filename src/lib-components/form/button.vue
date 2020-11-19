<template>
  <span
    :class="[fullWidth ? 'w-full' : '', `inline-flex ${shadow} ${rounded}`]"
  >
    <button
      type="button"
      :class="[
        fullWidth ? 'flex justify-center w-full' : '',
        `inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium ${rounded} text-white bg-${buttonColor}-600 hover:bg-${buttonColor}-500 focus:outline-none focus:border-${buttonColor}-700 focus:shadow-outline-${buttonColor} active:bg-${buttonColor}-700 transition ease-in-out duration-150`
      ]"
    >
      <slot>Button</slot>
    </button>
  </span>
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
    fullWidth: {
      type: Boolean,
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
