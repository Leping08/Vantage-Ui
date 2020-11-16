import { mount } from "@vue/test-utils";
import Countdown from "@/lib-components/countdown.vue";

describe("Countdown.vue", () => {
  it("shows NaN when a time is not given", async () => {
    const wrapper = mount(Countdown, {
      props: {
        time: null,
      }
    });

    expect(wrapper.html()).not.toContain("Na")
  });

  it("changes color via a prop", async () => {
    const wrapper = mount(Countdown, {
      props: {
        time: new Date(new Date().getUTCFullYear() + 1, 1, 1),
        color: "red"
      }
    });

    expect(wrapper.html()).toContain("red")
  });
  
  it("shows the expired message prop when th timer is expired", async () => {
    const wrapper = mount(Countdown, {
      props: {
        time: new Date(new Date().getUTCFullYear() - 1, 1, 1),
        expiredMessage: "Testing"
      }
    });

    expect(wrapper.html()).toContain("Testing")
    expect(wrapper.html()).not.toContain("Seconds")
  });

  it("does not show the expired message prop when th timer is not expired", async () => {
    const wrapper = mount(Countdown, {
      props: {
        time: new Date(new Date().getUTCFullYear() + 1, 1, 1),
        expiredMessage: "Testing"
      }
    });

    expect(wrapper.html()).not.toContain("Testing")
    expect(wrapper.html()).toContain("Seconds")
  });

  it("has Expired as the default message for a timer that has expired", async () => {
    const wrapper = mount(Countdown, {
      props: {
        time: new Date(new Date().getUTCFullYear() - 1, 1, 1),
      }
    });

    expect(wrapper.html()).toContain("Expired")
  });
});
