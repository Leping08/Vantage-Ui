<template>
  <!-- This component requires you to enable the `group-focus` variant for `boxShadow` utilities. -->
  <span
    @click.prevent="value = !value"
    role="checkbox"
    tabindex="0"
    :aria-checked="value"
    class="group relative inline-flex items-center justify-center flex-shrink-0 h-5 w-10 cursor-pointer focus:outline-none"
  >
    <!-- On: "bg-${toggleColor}-600", Off: "bg-gray-200" -->
    <span
      aria-hidden="true"
      :class="value ? `bg-${toggleColor}-600` : 'bg-gray-200'"
      class="bg-gray-200 absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"
    ></span>
    <!-- On: "translate-x-5", Off: "translate-x-0" -->
    <span
      aria-hidden="true"
      :class="value ? 'translate-x-5' : 'translate-x-0'"
      class="translate-x-0 absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform group-focus:shadow-outline group-focus:border-blue-300 transition-transform ease-in-out duration-200"
    ></span>
  </span>
</template>

<script>
import theme from "./../theme";
export default {
  name: "Toggle",
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    color: {
      type: String,
      required: false
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    },
    toggleColor() {
      return this.color || theme.color;
    }
  }
};
</script>
