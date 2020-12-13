import { mount } from "@vue/test-utils";
import CheckBox from "@/lib-components/form/checkBox.vue";

describe("Input.vue", () => {
  it("shows the label through the label prop", async () => {
    const wrapper = mount(CheckBox, {
      props: {
        label: "test",
        value: 123,
        modelValue: []
      }
    });

    expect(wrapper.html()).toContain("test");
  });

  it("shows the subtitle through the subtitle prop", async () => {
    const wrapper = mount(CheckBox, {
      props: {
        label: "test",
        subtitle: "This is the test subtitle",
        value: 123,
        modelValue: []
      }
    });

    expect(wrapper.html()).toContain("This is the test subtitle");
  });

  it("shows allows the user to select the radio and emits the model value event", async () => {
    const wrapper = mount(CheckBox, {
      props: {
        label: "test",
        value: 123,
        modelValue: []
      }
    });

    await wrapper.find("input").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toEqual([[[123]]]);
  });

  it("changes color through the color prop", async () => {
    const wrapper = mount(CheckBox, {
      props: {
        label: "test",
        value: 123,
        color: "red",
        modelValue: []
      }
    });

    expect(wrapper.html()).toContain("red");
  });

  it("changes border radius through the rounded prop", async () => {
    const wrapper = mount(CheckBox, {
      props: {
        label: "test",
        value: 123,
        modelValue: [],
        rounded: 'rounded-lg'
      }
    });

    expect(wrapper.html()).toContain("rounded-lg");
  });
});
