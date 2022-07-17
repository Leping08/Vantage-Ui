import { mount } from "@vue/test-utils";
import Toggle from "@/lib-components/form/toggle.vue";

describe("Toggle.vue", () => {
  it("changes from false to true when clicked", async () => {
    const wrapper = mount(Toggle, {
      props: {
        modelValue: false,
        color: "teal",
      },
    });

    await wrapper.find("span:nth-child(2)").trigger("click");

    expect(wrapper.emitted("update:modelValue")[0]).toEqual([true]);
  });

  it("changes from true to false when clicked", async () => {
    const wrapper = mount(Toggle, {
      props: {
        modelValue: true,
        color: "teal",
      },
    });

    await wrapper.find("span:nth-child(2)").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toEqual([[false]]);
  });

  it("changes color via a prop", async () => {
    const wrapper = mount(Toggle, {
      props: {
        modelValue: true,
        color: "red",
      },
    });

    expect(wrapper.html()).toContain("red");
  });

  it("shows the ring from the prop", async () => {
    const wrapper = mount(Toggle, {
      props: {
        modelValue: true,
        color: "red",
        ring: true,
      },
    });

    expect(wrapper.html()).toContain("ring-2");

    await wrapper.setProps({ ring: false });

    expect(wrapper.html()).not.toContain("ring-2");
  });
});
