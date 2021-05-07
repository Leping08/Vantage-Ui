<template>
  <div id="app">
    <div class="bg-gray-100">
      <div class="bg-white shadow-md">
        <div class="container mx-auto">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div class="pl-6">
                <svg
                  class="h-10"
                  viewBox="0 0 280 245"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M192.058 179.423L229.891 245H269.904C277.602 245 282.413 236.667 278.564 230L220.633 129.66L192.058 179.423Z"
                    class="text-cyan-700"
                    fill="currentColor"
                  />
                  <path
                    d="M209.07 109.633L180.5 159.388L111.377 39.5761L131.34 5.00002C135.189 -1.66665 144.811 -1.66667 148.66 5L209.07 109.633Z"
                    class="text-cyan-700"
                    fill="currentColor"
                  />
                  <path
                    d="M154.402 245H206.801L180.54 199.481L154.402 245Z"
                    class="text-cyan-500"
                    fill="currentColor"
                  />
                  <path
                    d="M168.982 179.446L140 229.918L70.93 109.633L99.8281 59.5798L168.982 179.446Z"
                    class="text-cyan-500"
                    fill="currentColor"
                  />
                  <path
                    d="M59.3672 129.66L1.43596 230C-2.41304 236.667 2.39823 245 10.0962 245H125.598L59.3672 129.66Z"
                    class="text-cyan-300"
                    fill="currentColor"
                  />
                  <!-- <path fill-rule="evenodd" clip-rule="evenodd" d="M111.377 39.5761L229.891 245H206.801L99.8281 59.5798L111.377 39.5761Z"/> -->
                  <!-- <path fill-rule="evenodd" clip-rule="evenodd" d="M220.612 127.919L154.361 245H125.639L59.3879 127.92L70.9092 107.669L140 229.768L209.091 107.669L220.612 127.919Z"/> -->
                </svg>
              </div>
              <div
                class="ml-2 font-lg text-3xl tracking-normal font-sans text-gray-600"
              >
                Vantage Ui
              </div>
            </div>
            <div class="flex items-center">
              <!-- <div class="text-gray-500">
                v0.1.0
              </div> -->
              <div class="p-4">
                <a
                  href="https://github.com/Leping08/Vantage-UI"
                  target="_blank"
                >
                  <svg class="text-gray-500 h-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="m-4">
          <v-card heading="Accordion" :padding="false" :headingBorder="false">
            <v-accordion :items="questionsAndAnswers"></v-accordion>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Avatar" :headingBorder="true" :padding="true">
            <v-avatar name="John Doe"></v-avatar>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Badge" :headingBorder="true" :padding="true">
            <v-badge>This is the badge</v-badge>
          </v-card>
        </div>
        <div class="m-4">
          <v-card
            heading="Date Range Picker"
            :headingBorder="true"
            :padding="true"
          >
            <v-date-range-picker
              v-model:start="startDate"
              v-model:end="endDate"
              position="right"
            />
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Button" :headingBorder="true" :padding="true">
            <div class="p-2">
              <v-button size="xs" class="m-2">Submit Me</v-button>
              <v-button size="sm" class="m-2">Submit Me</v-button>
              <v-button size="md" class="m-2">Submit Me</v-button>
              <v-button size="lg" class="m-2">Submit Me</v-button>
              <v-button size="xl" class="m-2">Submit Me</v-button>
            </div>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Card" :headingBorder="true" :padding="true">
            This is a card content.
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Checkbox" :padding="true" :headingBorder="true">
            <v-check-box
              label="Vue"
              value="vue"
              v-model="checkBoxItems"
            ></v-check-box>
            <v-check-box
              label="React"
              value="react"
              :ring="true"
              v-model="checkBoxItems"
            ></v-check-box>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Countdown" :headingBorder="true">
            <v-countdown
              :time="new Date(new Date().getUTCFullYear() + 1, 1, 1)"
            ></v-countdown>
          </v-card>
        </div>
        <div class="m-4">
          <v-data-table
            :items="users"
            :header="dataTableHeader"
            :items-per-page="10"
            title="Data Table"
            @click-row="testClick"
          >
            <template v-slot:price="{ item }">
              <v-badge :color="item > 700 ? 'red' : 'green'">
                $ {{ item }}
              </v-badge>
            </template>
          </v-data-table>
        </div>
        <div class="m-4">
          <v-card
            heading="Description List"
            :padding="false"
            :headingBorder="true"
          >
            <v-description-list
              :items="descriptionListItems"
            ></v-description-list>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Input" :padding="true" :headingBorder="true">
            <v-input
              placeholder="Full Name"
              label="Name"
              v-model="input"
              :rules="['max:255', 'required', 'min:2']"
            ></v-input>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Radio" :padding="true" :headingBorder="true">
            <v-radio label="Vue" value="vue" v-model="radio" />
            <v-radio label="React" value="react" :ring="true" v-model="radio" />
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Ping" :padding="true" :headingBorder="true">
            <v-ping color="pink"></v-ping>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Progress Bar" :padding="true" :headingBorder="true">
            <v-progress-bar :percent="progressBarValue"></v-progress-bar>
          </v-card>
        </div>
        <div class="m-4">
          <v-card
            heading="Progress Spinner"
            :padding="true"
            :headingBorder="true"
          >
            <v-progress-spinner :size="8" />
          </v-card>
        </div>
        <div class="m-4">
          <v-card
            heading="Array Search Select"
            :padding="true"
            :headingBorder="true"
          >
            <v-search-select
              v-model="searchSelected"
              :items="searchItems"
              placeholder="Search Color"
            >
              <template v-slot:default="{ item }">
                <div class="flex items-center">
                  <div
                    :class="`h-4 w-4 rounded-full bg-${item}-600 mr-2`"
                  ></div>
                  <div :class="` hover:text-white text-${item}-600`">
                    {{ item }}
                  </div>
                </div>
              </template>
            </v-search-select>
          </v-card>
        </div>
        <div class="m-4">
          <v-card
            heading="Object Search Select"
            :padding="true"
            :headingBorder="true"
          >
            <v-search-select
              v-model="testSearchSelected"
              :items="testObject"
              item-key="name"
              placeholder="Search Color"
            />
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Accordion" :padding="true" :headingBorder="false">
            <v-search-select
              v-model="testSearchSelected"
              :items="testObject"
              item-key="name"
              placeholder="Search Color"
            />
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Toggle" :padding="true" :headingBorder="true">
            <v-toggle v-model="toggle"></v-toggle>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Tabs">
            <v-tabs v-model="tabid">
              <v-tab :tabId="1">First tab</v-tab>
              <v-tab :tabId="2">Second tab</v-tab>
              <v-tab :tabId="3">Third tab</v-tab>

              <v-tab-content :tabId="1">First content</v-tab-content>
              <v-tab-content :tabId="2">Second content</v-tab-content>
              <v-tab-content :tabId="3">Third content</v-tab-content>
            </v-tabs>
          </v-card>
        </div>
        <div class="m-4">
          <v-card heading="Stats" :padding="true" :headingBorder="true">
            <div class="flex w-full my-4">
              <v-stats
                class="m-2 flex-1"
                heading="Users"
                :first-metric="446"
                :second-metric="345"
              ></v-stats>
              <v-stats
                class="m-2 flex-1"
                heading="Followers"
                :first-metric="47"
                :second-metric="50"
              ></v-stats>
              <v-stats
                class="m-2 flex-1"
                heading="Subscribers"
                :first-metric="10"
                :second-metric="10"
              ></v-stats>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      tabid: 1,
      startDate: null,
      endDate: null,
      input: "",
      radio: "Vue",
      checkBoxItems: [],
      searchSelected: "red",
      progressBarValue: 75,
      testSearchSelected: {
        name: "John",
        age: 5,
        occupations: ["accountant", "medic"]
      },
      testObject: [
        {
          name: "John",
          age: 5,
          occupations: ["accountant", "medic"]
        },
        {
          name: "Jack",
          age: 10,
          occupations: ["cop", "bk"]
        },
        {
          name: "Jill",
          age: 15,
          occupations: ["accountant", "bk"]
        }
      ],
      searchItems: [
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "indigo",
        "purple",
        "pink",
        "fdsfdsa",
        "gfdsgfds",
        "hgdsgrafds"
      ],
      toggle: false,
      descriptionListItems: [
        {
          key: "First Item",
          value: "$1500"
        },
        {
          key: "Second Item",
          value: "150 Subscribers"
        },
        {
          key: "Third Item",
          value: "Hail Dale"
        },
        {
          key: "Fourth Item",
          value: "Number 4 is the best."
        }
      ],
      questionsAndAnswers: [
        {
          key: "What's the best thing about Switzerland?",
          value: "I don't know, but the flag is a big plus."
        },
        {
          key: "How do you make holy water?",
          value: "You boil the hell out of it."
        },
        {
          key: "What do you call someone with no body and no nose?",
          value: "Nobody knows."
        },
        {
          key: "Why do you never see elephants hiding in trees?",
          value: "Because they're so good at it."
        }
      ],
      dataTableHeader: [
        {
          text: "Points",
          sortable: true,
          direction: "asc",
          value: "races"
        },
        {
          text: "Race Name",
          sortable: false,
          direction: "asc",
          value: "races.0.name"
        },
        {
          text: "Points",
          sortable: true,
          direction: "asc",
          value: "points"
        }
        // {
        //   text: "Title",
        //   sortable: true,
        //   direction: "asc",
        //   value: "title"
        // },
        // {
        //   text: "Instructor",
        //   sortable: false,
        //   direction: "asc",
        //   value: "name"
        // },
        // {
        //   text: "Price",
        //   sortable: true,
        //   direction: "asc",
        //   value: "price"
        // }
      ],
      users: [
        {
          id: 1,
          name: "Joe Bob",
          email: "test@testing.com",
          created_at: "2021-04-06T17:02:43.000000Z",
          updated_at: "2021-04-06T17:02:43.000000Z",
          races: [
            {
              name: "first"
            },
            {
              name: "second"
            }
          ],
          points: 14
        },
        {
          id: 2,
          name: "John Doe",
          email: "test@testing.com",
          created_at: "2021-04-06T17:02:43.000000Z",
          updated_at: "2021-04-06T17:02:43.000000Z",
          races: [
            {
              name: "first"
            },
            {
              name: "second"
            }
          ],
          points: 13
        }
      ],
      dataTableItems: [
        {
          title: "Intro to CSS",
          name: "Derek",
          price: 858,
          edit: ""
        },
        {
          title: "Backend API's",
          name: "Adam",
          price: 112,
          edit: ""
        },
        {
          title: "Intro to JavaScript",
          name: "Chris",
          price: 1280,
          edit: ""
        },
        {
          title: "Learning SQL",
          name: "John",
          price: 858,
          edit: ""
        },
        {
          title: "ASP",
          name: "Joe",
          price: 1078,
          edit: ""
        },
        {
          title: "Its GO time",
          name: "Lee",
          price: 645,
          edit: ""
        },
        {
          title: "Rust 101",
          name: "Mac",
          price: 95,
          edit: ""
        }
      ]
    };
  },
  created() {
    setInterval(() => {
      this.progressBarValue = Math.floor(Math.random() * 99) + 1;
    }, 3000);
  },
  methods: {
    testClick(value) {
      console.log(value);
    }
  }
};
</script>
