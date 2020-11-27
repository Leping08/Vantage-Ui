<template>
  <div class="flex items-center">
    <input
      :value="value"
      v-model="radioValue"
      :id="label"
      :name="label"
      type="radio"
      :class="
        `form-radio h-4 w-4 text-${radioColor}-600 transition duration-150 ease-in-out`
      "
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
  props: {
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number, Boolean, Array, Object, Date],
      required: true
    },
    color: {
      type: String,
      required: false
    }
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
      }
    }
  }
};
</script>
