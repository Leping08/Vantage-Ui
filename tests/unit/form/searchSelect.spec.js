import { mount } from "@vue/test-utils";
import SearchSelect from "@/lib-components/form/searchSelect.vue";

describe("searchSelect.vue", () => {
  const itemsArray = ["red", "blue", "green"];

  it("will show the dropdown when focused", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        items: itemsArray
      }
    });

    await wrapper.find("input").trigger("focus");

    expect(wrapper.html()).toContain(itemsArray[0]);
    expect(wrapper.html()).toContain(itemsArray[1]);
    expect(wrapper.html()).toContain(itemsArray[2]);
  });

  it("will show the dropdown when clicked", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        items: itemsArray
      }
    });

    await wrapper.find("input").trigger("click");

    expect(wrapper.html()).toContain(itemsArray[0]);
    expect(wrapper.html()).toContain(itemsArray[1]);
    expect(wrapper.html()).toContain(itemsArray[2]);
  });

  it("will change the model value when something is selected", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        items: itemsArray
      }
    });

    await wrapper.find("input").trigger("click");

    expect(wrapper.html()).toContain(itemsArray[0]);
    expect(wrapper.html()).toContain(itemsArray[1]);
    expect(wrapper.html()).toContain(itemsArray[2]);

    expect(wrapper.emitted("update:modelValue")).toEqual(undefined);

    await wrapper.find("#listbox-option-0").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toEqual([[itemsArray[0]]]);
  });
});
