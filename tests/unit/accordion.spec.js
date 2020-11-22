import { mount } from "@vue/test-utils";
import Accordion from "@/lib-components/accordion.vue";

describe("Avatar.vue", () => {
  const testItems = [
    {
      key: "First",
      value: 10000,
      differentKeyName: "First different key",
      differentValueName: 12345
    },
    {
      key: "Second",
      value: "Testing value",
      differentKeyName: "Second different key",
      differentValueName: "Testing different value"
    },
    {
      key: "Third",
      value: "$30000",
      differentKeyName: "Second different key",
      differentValueName: "$40000"
    }
  ];

  it("renders the items keys using the default key and value", async () => {
    const wrapper = mount(Accordion, {
      props: {
        items: testItems
      }
    });

    expect(wrapper.html()).toContain(testItems[0].key);
    expect(wrapper.html()).toContain(testItems[1].key);
    expect(wrapper.html()).toContain(testItems[2].key);
  });

  it("renders the items values after they are clicked", async () => {
    const wrapper = mount(Accordion, {
      props: {
        items: testItems
      }
    });

    expect(wrapper.html()).not.toContain(testItems[0].value);
    expect(wrapper.html()).not.toContain(testItems[1].value);
    expect(wrapper.html()).not.toContain(testItems[2].value);

    await wrapper.find("#accordion-index-0").trigger("click");
    await wrapper.find("#accordion-index-1").trigger("click");
    await wrapper.find("#accordion-index-2").trigger("click");

    expect(wrapper.html()).toContain(testItems[0].value);
    expect(wrapper.html()).toContain(testItems[1].value);
    expect(wrapper.html()).toContain(testItems[2].value);
  });

  it("renders the items keys using a different itemKey prop", async () => {
    const wrapper = mount(Accordion, {
      props: {
        items: testItems,
        itemKey: "differentKeyName"
      }
    });

    expect(wrapper.html()).toContain(testItems[0].differentKeyName);
    expect(wrapper.html()).toContain(testItems[1].differentKeyName);
    expect(wrapper.html()).toContain(testItems[2].differentKeyName);
  });

  it("renders the items values using a different itemValue prop", async () => {
    const wrapper = mount(Accordion, {
      props: {
        items: testItems,
        itemValue: "differentValueName"
      }
    });

    expect(wrapper.html()).not.toContain(testItems[0].differentValueName);
    expect(wrapper.html()).not.toContain(testItems[1].differentValueName);
    expect(wrapper.html()).not.toContain(testItems[2].differentValueName);

    await wrapper.find("#accordion-index-0").trigger("click");
    await wrapper.find("#accordion-index-1").trigger("click");
    await wrapper.find("#accordion-index-2").trigger("click");

    expect(wrapper.html()).toContain(testItems[0].differentValueName);
    expect(wrapper.html()).toContain(testItems[1].differentValueName);
    expect(wrapper.html()).toContain(testItems[2].differentValueName);
  });
});
