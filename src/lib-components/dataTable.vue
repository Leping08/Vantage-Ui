<template>
  <card :padding="false">
    <template v-slot:header>
      <div class="flex items-center">
        <div class="py-2 w-2/3" v-if="title">
          <div
            class="-ml-4 -mt-2 px-4 flex justify-between items-center flex-wrap sm:flex-nowrap"
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
              :class="`px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider`"
              v-for="(heading, headingIndex) in headings"
              :key="heading"
            >
              <div
                @click="changeSort(headingIndex)"
                :class="[heading.sortable ? 'cursor-pointer' : '']"
                class="flex items-center"
              >
                {{ heading.text }}
                <div v-if="heading.sortable">
                  <template v-if="heading.direction === 'asc'">
                    <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
                      />
                    </svg>
                  </template>
                  <template v-if="heading.direction === 'desc'">
                    <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                      />
                    </svg>
                  </template>
                  <template v-if="heading.direction === 'none'">
                    <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
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
            v-for="(item, itemIndex) in filteredItems"
            :key="item"
            :class="itemIndex % 2 ? 'bg-gray-50' : 'bg-white'"
            @click="emitClickEvent(item)"
          >
            <td
              class="px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-500"
              v-for="header in headings"
              :key="header"
            >
              <slot :name="header.value" :item="resolve(header.value, item)">
                {{ resolve(header.value, item) }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
        aria-label="Pagination"
      >
        <div class="hidden sm:block">
          <p class="text-sm text-gray-600">
            Showing
            {{ " " }}
            <span class="font-medium">{{ indexStart + 1 }}</span>
            {{ " " }}
            to
            {{ " " }}
            <span class="font-medium">{{ indexEnd }}</span>
            {{ " " }}
            of
            {{ " " }}
            <span class="font-medium">{{ itemsCopy.length }}</span>
            {{ " " }}
            results
          </p>
        </div>
        <div class="flex-1 flex justify-between sm:justify-end">
          <v-button
            @click="decrementPage()"
            :outline="true"
            shadow="none"
            size="sm"
            class="mx-2"
          >
            Previous
          </v-button>
          <v-button
            @click="incrementPage()"
            :outline="true"
            shadow="none"
            size="sm"
            class="mx-2"
          >
            Next
          </v-button>
        </div>
      </nav>
    </div>
  </card>
</template>

<script>
import themeInput from "./form/input.vue";
import card from "./card.vue";
import button from "./form/button.vue";
export default {
  name: "DataTable",
  components: {
    themeInput,
    card,
    VButton: button,
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: true,
    },
    search: {
      type: Boolean,
      required: false,
      default: true,
    },
    header: {
      type: Array,
      required: true,
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 5,
    },
  },
  data() {
    return {
      headings: [],
      itemsCopy: [],
      searchText: "",
      pageIndex: 1,
    };
  },
  emits: ["click-row"],
  created() {
    this.itemsCopy = this.items;
    this.setHeader();

    //TODO set the sorting to the first column that has a sort
    this.changeSort(0); //Set the default sorting to the first column
  },
  watch: {
    items: {
      handler(newItems) {
        this.itemsCopy = newItems;
      },
      deep: true,
    },
    header: {
      handler() {
        this.setHeader();
      },
      deep: true,
    },
  },
  methods: {
    changeSort(index) {
      this.headings.forEach((item, forEachIndex) => {
        //Check if the current index in the loop is the index of the change sort call
        if (forEachIndex === index) {
          // Check if the heading being clicked is sortable
          if (this.headings[index].sortable) {
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
          }
        } else {
          //Set the rest of the index's to sort none
          this.headings[forEachIndex].direction = "none";
        }
      });
    },
    sortByColumn(index, direction) {
      const name = this.headings[index].text;

      if (direction == "desc") {
        this.itemsCopy.sort((a, b) => (a[name] < b[name] ? 1 : -1));
      }

      if (direction == "asc") {
        this.itemsCopy.sort((a, b) => (a[name] > b[name] ? 1 : -1));
      }
    },
    incrementPage() {
      if (
        this.pageIndex > 0 &&
        this.pageIndex * this.itemsPerPage < this.itemsCopy.length
      ) {
        this.pageIndex++;
      }
    },
    decrementPage() {
      if (this.pageIndex > 1) {
        this.pageIndex--;
      }
    },
    resolve(path, obj = self, separator = ".") {
      var properties = Array.isArray(path) ? path : path.split(separator);
      return properties.reduce((prev, curr) => prev && prev[curr], obj);
    },
    emitClickEvent(item) {
      this.$emit("click-row", item);
    },
    setHeader() {
      this.headings = this.header.map((item) => {
        return {
          text: item.text ?? "",
          value: item.value ?? "",
          align: item.align ?? "left",
          sortable: item.sortable ?? false,
          direction: item.direction ?? "asc",
        };
      });
    },
  },
  computed: {
    indexStart() {
      return this.pageIndex * this.itemsPerPage - this.itemsPerPage;
    },
    indexEnd() {
      if (this.itemsCopy.length > this.pageIndex * this.itemsPerPage) {
        return this.pageIndex * this.itemsPerPage;
      } else {
        return this.itemsCopy.length;
      }
    },
    filteredItems() {
      return (
        this.itemsCopy
          //filter over all the rows
          .filter((row) => {
            //return if the string of the row contains the search text
            return (
              JSON.stringify(row)
                .toString()
                .toLowerCase()
                .indexOf(this.searchText.toLowerCase()) > -1
            );
          })
          .filter((row) => row) //Filter out any null rows left
          .slice(this.indexStart, this.indexEnd)
      ); //Get x number of element from the array
    },
  },
};
</script>
