import { mount } from "@vue/test-utils";
import Badge from "@/lib-components/badge.vue";

it("renders the badge with the slot content", async () => {
  expect(true).toBe(true);
});

describe("Badge.vue", () => {
  it("renders the badge with the slot content", async () => {
    const wrapper = mount(Badge, {
      slots: {
        default: "John"
      },
      props: {
        color: "red"
      }
    });

    expect(wrapper.html()).toContain("John");
  });

  it("changes color via a prop", async () => {
    const wrapper = mount(Badge, {
      slots: {
        default: "John"
      },
      props: {
        color: "teal"
      }
    });

    expect(wrapper.html()).toContain("teal");
  });
});
