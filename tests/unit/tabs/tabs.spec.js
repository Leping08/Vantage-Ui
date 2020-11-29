import { mount } from "@vue/test-utils";
import Tabs from "./tabs.vue";

describe("Stats.vue", () => {
  it("renders the tabs and shows the first tab by default", async () => {
    const wrapper = mount(Tabs);

    expect(wrapper.html()).toContain("First tab");
    expect(wrapper.html()).toContain("Second tab");
    expect(wrapper.html()).toContain("Third tab");
    expect(wrapper.html()).toContain("First content");
  });

  it("renders only the selected tab", async () => {
    const wrapper = mount(Tabs);

    expect(wrapper.html()).toContain("First tab");
    expect(wrapper.html()).toContain("Second tab");
    expect(wrapper.html()).toContain("Third tab");
    expect(wrapper.html()).toContain("First content");
    expect(wrapper.html()).not.toContain("Second content");
    expect(wrapper.html()).not.toContain("Third content");

    await wrapper.find('div[data-qa="2"]').trigger("click");

    expect(wrapper.html()).toContain("First tab");
    expect(wrapper.html()).toContain("Second tab");
    expect(wrapper.html()).toContain("Third tab");
    expect(wrapper.html()).not.toContain("First content");
    expect(wrapper.html()).toContain("Second content");
    expect(wrapper.html()).not.toContain("Third content");

    await wrapper.find('div[data-qa="3"]').trigger("click");

    expect(wrapper.html()).toContain("First tab");
    expect(wrapper.html()).toContain("Second tab");
    expect(wrapper.html()).toContain("Third tab");
    expect(wrapper.html()).not.toContain("First content");
    expect(wrapper.html()).not.toContain("Second content");
    expect(wrapper.html()).toContain("Third content");
  });
});
