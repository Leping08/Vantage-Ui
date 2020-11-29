<template>
  <v-tabs v-model:activeTabId="activeTab">
    <v-tab :tabId="1">First tab</v-tab>
    <v-tab :tabId="2">Second tab</v-tab>
    <v-tab :tabId="3">Third tab</v-tab>

    <v-tab-content :tabId="1">First content</v-tab-content>
    <v-tab-content :tabId="2">Second content</v-tab-content>
    <v-tab-content :tabId="3">Third content</v-tab-content>
  </v-tabs>
</template>

<script>
import {
  Tab as VTab,
  Tabs as VTabs,
  TabContent as VTabContent
} from "@/lib-components/tabs/tabs.js";

export default {
  components: {
    VTab,
    VTabs,
    VTabContent
  },
  data() {
    return {
      activeTab: 1
    };
  }
};
</script>
