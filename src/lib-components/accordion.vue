<template>
  <div
    v-for="(item, index) in items"
    :key="item"
    class="p-6 border-t-2 border-gray-200"
  >
    <dl>
      <div>
        <dt class="text-lg leading-7">
          <!-- Expand/collapse question button -->
          <button
            @click="item.show = !item.show"
            class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
            :id="`accordion-index-${index}`"
          >
            <span class="pl-2 font-medium text-gray-900">
              {{ itemKey ? item[itemKey] : item.key }}
            </span>
            <span class="ml-6 pr-2 flex items-center">
              <!--
                    Expand/collapse icon, toggle classes based on question open state.

                    Open: "-rotate-180", Closed: "rotate-0"
                  -->
              <svg
                :class="[item.show ? '-rotate-180' : 'rotate-0']"
                class="h-6 w-6 transform duration-150 ease-in-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
        </dt>
        <dd v-if="item.show" class="mt-2 pl-2 pr-12">
          <p class="text-base leading-6 text-gray-500">
            {{ itemValue ? item[itemValue] : item.value }}
          </p>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemKey: {
      type: String,
      required: false,
    },
    itemValue: {
      type: String,
      required: false,
    },
  },
  created() {
    if (this.items.length) {
      this.items.map((item) => {
        item.show = false;
      });
    }
  },
};
</script>
