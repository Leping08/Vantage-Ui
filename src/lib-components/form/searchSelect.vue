<template>
  <div class="relative">
    <label
      :for="label"
      class="block text-sm font-medium leading-5 text-gray-700"
      >{{ label }}</label
    >
    <div :class="`mt-1 relative ${themeRounded} shadow-sm`">
      <div class="flex items-center relative">
        <svg
          :class="[
            dropdownOpen ? 'rotate-180' : 'rotate-0',
            `absolute right-0 mr-2  text-gray-600 transform duration-150 ease-in-out`
          ]"
          style="width:24px;height:24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          />
        </svg>
        <input
          v-model="input"
          :id="label"
          type="text"
          @focus="focusFunc()"
          @click="focusFunc()"
          @blur="blurFunc()"
          :class="[
            'appearance-none block px-3 py-2 shadow-sm border border-gray-300 placeholder-gray-400 focus:outline-none sm:text-sm w-full',
            `${themeRounded} focus:ring-${themeColor}-500 focus:border-${themeColor}-500`,
            error
              ? 'text-red-900 border-red-300 placeholder-red-300 focus:border-red-300'
              : 'text-gray-900'
          ]"
          :placeholder="placeholderText"
        />
      </div>

      <transition
        enter-from-class="-translate-y-4 opacity-0"
        enter-active-class="transform transition ease-in-out duration-300"
        enter-to-class="translate-y-0 opacity-100"
        leave-from-class="translate-y-0 opacity-100"
        leave-active-class="transform transition ease-in-out duration-300"
        leave-to-class="-translate-y-4 opacity-0"
      >
        <div
          v-if="dropdownOpen"
          :class="
            `absolute mt-1 w-full ${themeRounded} bg-white shadow-lg z-10 max-h-56 overflow-auto`
          "
        >
          <transition-group
            enter-from-class="-translate-y-4 opacity-0"
            enter-active-class="transform transition ease-in-out duration-300"
            enter-to-class="translate-y-0 opacity-100"
            leave-from-class="translate-y-0 opacity-100"
            leave-active-class="transform transition ease-in-out duration-300"
            leave-to-class="-translate-y-4 opacity-0"
            tag="span"
          >
            <ul
              v-for="(item, index) in filtered()"
              :key="item"
              tabindex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              class="text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
            >
              <!--
            Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

            Highlighted: "text-white bg-${themeColor}-600", Not Highlighted: "text-gray-900"
          -->
              <li
                @click="select(item)"
                :class="[
                  item === selectedItem
                    ? `text-gray-900 font-bold bg-${themeColor}-200`
                    : '',
                  `hover:bg-${themeColor}-600`
                ]"
                :id="`listbox-option-${index}`"
                role="option"
                class="select-none relative py-2 pl-3 pr-9 hover:text-white text-gray-900 cursor-pointer"
              >
                <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                <slot :item="item">
                  <span class="font-normal block truncate">
                    {{ itemText ? item[itemText] : item }}
                  </span>
                </slot>

                <!--
              Checkmark, only display for selected option.

              Highlighted: "text-white", Not Highlighted: "text-${themeColor}-600"
            -->
                <span
                  v-if="item === selectedItem"
                  class="hover:text-white absolute inset-y-0 right-0 flex items-center pr-4"
                >
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </li>

              <!-- More options... -->
            </ul>
          </transition-group>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import theme from "./../theme";
export default {
  name: "Search Select",
  data() {
    return {
      dropdownOpen: false,
      loading: false,
      selectedItem: null,
      placeholderText: null,
      input: ""
    };
  },
  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    error: {
      type: String,
      required: false
    },
    items: {
      type: Array,
      required: true
    },
    itemText: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    }
  },
  created() {
    this.placeholderText = this.placeholder;
  },
  watch: {
    input() {
      this.dropdownOpen = true;
    }
  },
  methods: {
    filtered: function() {
      if (!this.input) {
        return this.items;
      }
      this.dropdownOpen = true;
      if (this.itemText) {
        return this.items.filter(item => {
          return (
            item[this.itemText]
              .toLowerCase()
              .indexOf(this.input.toLowerCase()) > -1
          );
        });
      } else {
        return this.items.filter(item => {
          return item.toLowerCase().indexOf(this.input.toLowerCase()) > -1;
        });
      }
    },
    select: function(item) {
      if (this.itemText) {
        this.input = item[this.itemText];
      } else {
        this.input = item;
      }
      this.$emit("update:modelValue", item);
      this.selectedItem = item;
      this.$nextTick(() => {
        this.dropdownOpen = false;
      });
    },
    blurFunc: function() {
      setTimeout(() => {
        this.dropdownOpen = false;
      }, 200);
    },
    focusFunc: function() {
      //TODO: Make sure this deals with object keys as the text
      if (this.selectedItem) {
        this.placeholderText = this.selectedItem;
      }
      this.input = null;
      this.dropdownOpen = true;
    }
  },
  computed: {
    themeColor() {
      return this.color || theme.color;
    },
    themeRounded() {
      return theme.rounded || "";
    }
  }
};
</script>
