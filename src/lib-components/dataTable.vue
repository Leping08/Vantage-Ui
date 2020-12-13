<template>
  <card :padding="false">
    <template v-slot:header>
      <div class="flex items-center ">
        <div class="py-2 w-2/3" v-if="title">
          <div
            class="-ml-4 -mt-2 px-4 flex justify-between items-center flex-wrap sm:flex-no-wrap"
          >
            <div class="ml-4 mt-4">
              <h3 class="text-xl leading-6 font-medium text-gray-900">
                {{ title }}
              </h3>
            </div>
          </div>
        </div>
        <div class="w-1/3 px-2 py-2" v-if="search">
          <theme-input placeholder="Search" v-model="searchText"></theme-input>
        </div>
      </div>
    </template>
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th
              :class="
                `px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider`
              "
              v-for="(heading, index) in headings"
              :key="heading"
            >
              <div
                @click="changeSort(index)"
                class="flex items-center cursor-pointer"
              >
                <div>
                  {{ heading.name }}
                </div>
                <div>
                  <template v-if="heading.direction === 'asc'">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
                      />
                    </svg>
                  </template>
                  <template v-if="heading.direction === 'desc'">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                      />
                    </svg>
                  </template>
                  <template v-if="heading.direction === 'none'">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path fill="currentColor" />
                    </svg>
                  </template>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(object, index) in searchFilter"
            :key="object"
            :class="index % 2 ? 'bg-gray-50' : 'bg-white'"
          >
            <td
              class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
              v-for="(value, name) in object"
              :key="name"
            >
              <slot :name="name" :item="value">
                {{ value }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </card>
</template>

<script>
import themeInput from "./form/input.vue";
import card from "./card.vue";
export default {
  name: "DataTable",
  components: {
    themeInput,
    card
  },
  props: {
    title: {
      type: String,
      required: false
    },
    items: {
      type: Array,
      required: true
    },
    search: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      headings: [],
      itemsCopy: [],
      searchText: ""
    };
  },
  created() {
    this.itemsCopy = this.items;

    this.headings = Object.entries(this.itemsCopy[0]).map(item => {
      return {
        name: item[0],
        align: "left",
        direction: "asc"
      };
    });

    this.changeSort(0); //Set the default sorting to the first column
  },
  methods: {
    changeSort(index) {
      this.headings.forEach((item, forEachIndex) => {
        //Check if the current index in the loop is the index of the change sort call
        if (forEachIndex === index) {
          if (this.headings[index].direction == "asc") {
            this.headings[index].direction = "desc";
            this.sortByColumn(index, "desc");
            return;
          } else if (this.headings[index].direction == "desc") {
            this.headings[index].direction = "none";
            this.sortByColumn(index, "none");
          } else if (this.headings[index].direction == "none") {
            this.headings[index].direction = "asc";
            this.sortByColumn(index, "asc");
          }
        } else {
          //Set the rest of the index's to sort none
          this.headings[forEachIndex].direction = "none";
        }
      });
    },
    sortByColumn(index, direction) {
      const name = this.headings[index].name;

      if (direction == "desc") {
        this.itemsCopy.sort((a, b) => (a[name] < b[name] ? 1 : -1));
      }

      if (direction == "asc") {
        this.itemsCopy.sort((a, b) => (a[name] > b[name] ? 1 : -1));
      }
    }
  },
  computed: {
    searchFilter() {
      const notUndef = element => element != undefined;

      return this.itemsCopy
        .map(row => {
          const array = Object.entries(row).map(([key, value]) => {
            //Search the value string
            if (
              value
                .toString()
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) > -1
            ) {
              return [key, value];
            }
          });

          //Remove any objects that returned null from the Object.entries(row).map
          if (array.some(notUndef)) {
            return row;
          }
        })
        .filter(n => n); //Filter out any null rows left
    }
  }
};
</script>
