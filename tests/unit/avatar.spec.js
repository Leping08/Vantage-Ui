import { mount } from "@vue/test-utils";
import Avatar from "@/lib-components/avatar.vue";

describe("Avatar.vue", () => {
  it("renders the avatar with the slot content", async () => {
    const wrapper = mount(Avatar, {
      props: {
        name: "John Doe"
      }
    });

    expect(wrapper.html()).toContain("JD");
  });
  
  it("changes color via a prop", async () => {
    const wrapper = mount(Avatar, {
      props: {
        color: "teal",
        name: "John Doe"
      }
    });

    expect(wrapper.html()).toContain("teal");
  });
});
