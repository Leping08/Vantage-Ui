import { mount } from "@vue/test-utils";
import Ping from "@/lib-components/ping.vue";

describe("Ping.vue", () => {
  it("renders the ping component", async () => {
    const wrapper = mount(Ping);

    expect(wrapper.html()).toContain("animate-ping absolute");
  });

  it("changes the color through the color prop", async () => {
    const wrapper = mount(Ping, {
      props: {
        color: "red",
      },
    });

    expect(wrapper.html()).toContain("red");
  });

  it("changes the size through the size prop", async () => {
    const wrapper = mount(Ping, {
      props: {
        size: 4,
      },
    });

    expect(wrapper.html()).toContain(4);
  });
});
