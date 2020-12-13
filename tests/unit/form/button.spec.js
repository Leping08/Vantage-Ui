import { mount } from "@vue/test-utils";
import Button from "@/lib-components/form/button.vue";

describe("Button.vue", () => {
  it("renders the button with the slot content", async () => {
    const wrapper = mount(Button, {
      slots: {
        default: "Testing"
      }
    });

    expect(wrapper.html()).toContain("Testing");
  });

  it("changes color via a prop", async () => {
    const wrapper = mount(Button, {
      props: {
        color: "teal"
      }
    });

    expect(wrapper.html()).toContain("teal");
  });

  it("changes to an outline button with the outline prop", async () => {
    const wrapper = mount(Button, {
      props: {
        color: "purple",
        outline: true
      }
    });

    expect(wrapper.html()).toContain("purple");
    expect(wrapper.html()).toContain("border-purple-500");
  });

  it("changes to a full width using the fullWidth prop", async () => {
    const wrapper = mount(Button, {
      props: {
        fullWidth: true
      }
    });

    expect(wrapper.html()).toContain("w-full");
  });
});
