<template>
  <div class="flex items-center">
    <input
      :value="value"
      v-model="radioValue"
      :id="label"
      :name="label"
      type="radio"
      :class="[
        `h-4 w-4 text-${radioColor}-600 border-gray-300 focus:outline-none`,
        ring ? `focus:ring-${radioColor}-600 focus:ring-2` : 'focus:ring-0',
      ]"
    />
    <label for="push_nothing" class="ml-3">
      <span class="block text-sm leading-5 font-medium text-gray-700">{{
        label
      }}</span>
    </label>
  </div>
</template>

<script>
import theme from "./../theme";
export default {
  name: "Radio",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number, Boolean, Array, Object, Date],
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
    radioColor() {
      return this.color || theme.color;
    },
    radioValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
