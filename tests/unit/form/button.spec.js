import { mount } from "@vue/test-utils";
import Button from "@/lib-components/form/button.vue";

describe("Button.vue", () => {
  it("renders the avatar with the slot content", async () => {
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
});
