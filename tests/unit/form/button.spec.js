import { mount } from "@vue/test-utils";
import Button from "@/lib-components/form/button.vue";

describe("Button.vue", () => {
  it("renders the button with the slot content", async () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Testing",
      },
    });

    expect(wrapper.html()).toContain("Testing");
  });

  it("changes color via a prop", async () => {
    const wrapper = mount(Button, {
      props: {
        color: "teal",
      },
    });

    expect(wrapper.html()).toContain("teal");
  });

  it("changes to an outline button with the outline prop", async () => {
    const wrapper = mount(Button, {
      props: {
        color: "purple",
        outline: true,
      },
    });

    expect(wrapper.html()).toContain("purple");
    expect(wrapper.html()).toContain("border-purple-500");
  });

  it("changes to a full width using the fullWidth prop", async () => {
    const wrapper = mount(Button, {
      props: {
        fullWidth: true,
      },
    });

    expect(wrapper.html()).toContain("w-full");
  });

  it("changes button size with size prop", async () => {
    const wrapper = mount(Button, {
      props: {
        size: "lg",
      },
    });

    expect(wrapper.html()).toContain("px-4 py-2");

    await wrapper.setProps({ size: "xs" });

    expect(wrapper.html()).toContain("px-2.5 py-1.5 ");
  });

  it("changes how rounded the button is with the rounded prop", async () => {
    const wrapper = mount(Button, {
      props: {
        rounded: "rounded-full",
      },
    });

    expect(wrapper.html()).toContain("rounded-full");
  });

  it("changes shadow from the shadow prop", async () => {
    const wrapper = mount(Button, {
      props: {
        shadow: "shadow-lg",
      },
    });

    expect(wrapper.html()).toContain("shadow-lg");
  });

  it("shows the ring from the prop", async () => {
    const wrapper = mount(Button, {
      props: {
        color: "purple",
        ring: true,
      },
    });

    expect(wrapper.html()).toContain("ring-2");

    await wrapper.setProps({ ring: false });

    expect(wrapper.html()).not.toContain("ring-2");
  });

  it("can be disabled through the disabled prop", async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.html()).toContain("cursor-not-allowed");
  });
});
