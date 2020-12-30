import { mount } from "@vue/test-utils";
import SearchSelect from "@/lib-components/form/searchSelect.vue";

describe("searchSelect.vue", () => {
  const itemsArray = ["red", "blue", "green"];

  it("will show the dropdown when focused", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        items: itemsArray,
        modelValue: ""
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
        items: itemsArray,
        modelValue: ""
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
        items: itemsArray,
        modelValue: ""
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

  it("renders the placeholder with the prop", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        items: itemsArray,
        placeholder: "testing placeholder",
        modelValue: ""
      }
    });

    expect(wrapper.html()).toContain("testing placeholder");

    await wrapper.setProps({ placeholder: "something else" });

    expect(wrapper.html()).toContain("something else");
  });

  it("renders the label with the prop", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        items: itemsArray,
        label: "testing label",
        modelValue: ""
      }
    });

    expect(wrapper.html()).toContain("testing label");
  });

  it("renders the color with the prop", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        items: itemsArray,
        color: "teal",
        modelValue: ""
      }
    });

    await wrapper.find("input").trigger("click");

    expect(wrapper.html()).toContain("teal");
  });

  it("renders the error with the prop", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        items: itemsArray,
        error: "true",
        modelValue: ""
      }
    });

    expect(wrapper.html()).toContain("red");
  });

  it("renders the scoped slot data", async () => {
    const wrapper = mount(SearchSelect, {
      slots: {
        default: `
        <template v-slot:default="item">
          <div :id="item.item">
            {{ item.item }}
          </div>
        </template>
        `
      },
      props: {
        items: itemsArray,
        modelValue: ""
      }
    });

    await wrapper.find("input").trigger("click");

    expect(wrapper.html()).toContain('id="red"');
  });

  it("keeps the old value if you don't select a new value", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        items: itemsArray,
        modelValue: "red"
      }
    });

    expect(wrapper.emitted("update:modelValue")).toEqual([["red"]]);

    await wrapper.find("input").trigger("click");

    expect(wrapper.html()).toContain(itemsArray[0]);
    expect(wrapper.html()).toContain(itemsArray[1]);
    expect(wrapper.html()).toContain(itemsArray[2]);

    expect(wrapper.emitted("update:modelValue")).toEqual([["red"]]);
  });
});
