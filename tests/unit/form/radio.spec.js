import { mount } from "@vue/test-utils";
import Radio from "@/lib-components/form/radio.vue";

describe("Input.vue", () => {
  it("shows the label through the label prop", async () => {
    const wrapper = mount(Radio, {
      props: {
        label: "test",
        value: 123,
        modelValue: "number"
      }
    });

    expect(wrapper.html()).toContain("test");
  });

  it("shows allows the user to select the radio and emits the model value event", async () => {
    const wrapper = mount(Radio, {
      props: {
        label: "test",
        value: 123,
        modelValue: "number"
      }
    });

    await wrapper.find("input").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toEqual([[123]]);
  });

  it("changes color through the color prop", async () => {
    const wrapper = mount(Radio, {
      props: {
        label: "test",
        value: 123,
        modelValue: "number",
        color: "red"
      }
    });

    expect(wrapper.html()).toContain("red");
  });
});
