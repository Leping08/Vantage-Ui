<template>
  <div
    class="bg-white"
    :class="[padding ? '' : 'overflow-hidden', shadow ? shadow : '', rounded]"
  >
    <slot name="header">
      <div class="px-4 py-2">
        <div
          class="-ml-4 -mt-2 flex justify-between items-center flex-wrap sm:flex-nowrap"
        >
          <div class="ml-4 mt-4">
            <h3 class="text-xl leading-6 font-medium text-gray-900">
              {{ heading }}
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              {{ subheading }}
            </p>
          </div>
        </div>
      </div>
    </slot>
    <div
      class="text-gray-600"
      :class="[padding ? 'p-4' : '', border ? 'border-t border-gray-200' : '']"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import theme from "./theme";
export default {
  name: "Card",
  props: {
    heading: {
      type: String,
      required: false,
    },
    subheading: {
      type: String,
      required: false,
    },
    padding: {
      type: Boolean,
      required: false,
      default: false,
    },
    border: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    shadow() {
      return theme.shadow || "";
    },
    rounded() {
      return theme.rounded || "";
    },
  },
};
</script>
