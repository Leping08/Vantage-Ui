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

  // todo figure out why this test is failing
  // it("keeps the old value if you don't select a new value", async () => {
  //   const wrapper = mount(SearchSelect, {
  //     props: {
  //       items: itemsArray,
  //       modelValue: "red"
  //     }
  //   });

  //   expect(wrapper.emitted("update:modelValue")).toEqual([["red"]]);

  //   await wrapper.find("input").trigger("click");

  //   expect(wrapper.html()).toContain(itemsArray[0]);
  //   expect(wrapper.html()).toContain(itemsArray[1]);
  //   expect(wrapper.html()).toContain(itemsArray[2]);

  //   expect(wrapper.emitted("update:modelValue")).toEqual([["red"]]);
  // });

  it("allows the user to select the object key if the object key prop is used", async () => {
    const object = [
      {
        name: "John",
        age: 25
      },
      {
        name: "Doe",
        age: 25
      }
    ];

    const wrapper = mount(SearchSelect, {
      props: {
        items: object,
        itemKey: "name",
        modelValue: ""
      }
    });

    expect(wrapper.emitted("update:modelValue")).toEqual(undefined);

    await wrapper.find("input").trigger("click");

    expect(wrapper.html()).toContain(object[0].name);
    expect(wrapper.html()).toContain(object[1].name);

    expect(wrapper.emitted("update:modelValue")).toEqual(undefined);

    await wrapper.find("#listbox-option-0").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toEqual([[object[0]]]);
  });

  it("updates to the value in the items array if the model model value prop is updated outside the component", async () => {
    const wrapper = mount(SearchSelect, {
      props: {
        items: itemsArray,
        modelValue: "red"
      }
    });

    expect(wrapper.emitted("update:modelValue")).toEqual([["red"]]);

    await wrapper.setProps({
      modelValue: "blue"
    });

    expect(wrapper.html()).toContain("blue");
  });
});
