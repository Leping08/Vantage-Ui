<template>
  <div>
    <label
      v-if="label"
      :for="label"
      class="block text-sm font-medium leading-5 text-gray-700"
      >{{ label }}</label
    >
    <div :class="`mt-1 relative ${rounded} shadow-none`">
      <input
        :id="label"
        :class="[
          Object.values(validationObjects).filter(e => e.valid === true)
            .length === 1
            ? 'text-red-900 border-red-300 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
            : 'text-gray-900'
        ]"
        class="form-input block w-full pr-10 sm:text-sm sm:leading-5"
        :placeholder="placeholder"
        :aria-placeholder="placeholder"
        v-model="value"
        :name="label"
        :type="type"
        :required="requiredCheck"
        :aria-invalid="
          Object.values(validationObjects).filter(e => e.valid === true)
            .length === 1
        "
      />
    </div>
    <p
      v-if="helpText"
      class="mt-2 text-sm text-gray-500"
      id="email-description"
    >
      {{ helpText }}
    </p>
    <div v-for="error in validationObjects" :key="error">
      <div v-if="!error.valid" class="mt-2 text-sm text-red-600">
        {{ error.message }}
      </div>
    </div>
  </div>
</template>

<script>
//TODO Fix the aria-invalid="true" and aria-desscribedby="email-error" lines
import theme from "./../theme";
export default {
  name: "Input",
  data() {
    return {
      validationObjects: [],
      requiredCheck: false
    };
  },
  props: {
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    },
    rules: {
      type: Array,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "text"
    },
    helpText: {
      type: String,
      required: false
    }
  },
  created() {
    if (this.rules) {
      //Check if the field is required
      this.requiredCheck = this.rules.includes("required");

      //Loop over the rules array and create the validationObjects
      this.validationObjects = this.rules.map(rule => {
        const sections = rule.split(":");
        return {
          name: sections[0],
          args: sections[1] || [],
          valid: true,
          message: ""
        };
      });
    }
  },
  watch: {
    value() {
      console.log("test");
      this.validationObjects.map(element => {
        //Call the function of the name of the validation object and input any args
        return this[element.name](element);
      });
    }
  },
  methods: {
    min(element) {
      element.valid = element.args <= this.modelValue.length;
      element.message = `${this.label} requires at least ${element.args} characters`;
    },
    max(element) {
      element.valid = element.args >= this.modelValue.length;
      element.message = `${this.label} can only have ${element.args} characters`;
    },
    required(element) {
      element.valid = this.modelValue.length >= 1;
      element.message = `${this.label} is required`;
    },
    email(element) {
      //eslint-disable-next-line
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      element.valid = re.test(String(this.modelValue).toLowerCase());
      element.message = `Invalid email address`;
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
    rounded() {
      return theme.rounded || "";
    }
  }
};
</script>
