import { mount } from "@vue/test-utils";
import Radio from "@/lib-components/form/radio.vue";

describe("Input.vue", () => {
  it("shows the label through the label prop", async () => {
    const wrapper = mount(Radio, {
      props: {
        label: "test",
        value: 123,
        modelValue: "",
      },
    });

    expect(wrapper.html()).toContain("test");
  });

  it("shows allows the user to select the radio and emits the model value event", async () => {
    const wrapper = mount(Radio, {
      props: {
        label: "test",
        value: 123,
        modelValue: "",
      },
    });

    await wrapper.find("input").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toEqual([[123]]);
  });

  it("changes color through the color prop", async () => {
    const wrapper = mount(Radio, {
      props: {
        label: "test",
        value: 123,
        modelValue: "",
        color: "red",
      },
    });

    expect(wrapper.html()).toContain("red");
  });

  it("shows the ring from the prop", async () => {
    const wrapper = mount(Radio, {
      props: {
        label: "test",
        value: 123,
        modelValue: "",
        color: "red",
        ring: true,
      },
    });

    expect(wrapper.html()).toContain("ring-2");

    await wrapper.setProps({ ring: false });

    expect(wrapper.html()).not.toContain("ring-2");
  });
});
