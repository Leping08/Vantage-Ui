<template>
  <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
  <button
    type="button"
    @click.prevent="value = !value"
    aria-pressed="false"
    :class="[
      `relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full focus:outline-none cursor-pointer transition-colors ease-in-out duration-200`,
      value ? `bg-${toggleColor}-600` : 'bg-gray-200',
      ring
        ? `focus:ring-2 focus:ring-offset-2 focus:ring-${toggleColor}-600`
        : 'focus:ring-0',
    ]"
  >
    <span class="sr-only">Use setting</span>
    <!-- On: "translate-x-5", Off: "translate-x-0" -->
    <span
      :class="[
        value ? 'translate-x-5' : 'translate-x-0',
        'relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
      ]"
    >
      <!-- On: "opacity-0 ease-out duration-100", Off: "opacity-100 ease-in duration-200" -->
      <span
        :class="[
          value
            ? 'opacity-0 ease-out duration-100'
            : 'opacity-100 ease-in duration-200',
          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
          <path
            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <!-- On: "opacity-100 ease-in duration-200", Off: "opacity-0 ease-out duration-100" -->
      <span
        :class="[
          value
            ? 'opacity-100 ease-in duration-200'
            : 'opacity-0 ease-out duration-100',
          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <svg
          :class="`h-3 w-3 text-${toggleColor}-600`"
          fill="currentColor"
          viewBox="0 0 12 12"
        >
          <path
            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
          />
        </svg>
      </span>
    </span>
  </button>
</template>

<script>
import theme from "./../theme";
export default {
  name: "Toggle",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    ring: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    toggleColor() {
      return this.color || theme.color;
    },
  },
};
</script>
