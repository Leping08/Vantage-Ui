import { mount } from "@vue/test-utils";
import Countdown from "@/lib-components/countdown.vue";

describe("Countdown.vue", () => {
  it("shows NaN when a time is not given", async () => {
    const wrapper = mount(Countdown, {
      props: {
        time: null,
      },
    });

    expect(wrapper.html()).not.toContain("Na");
  });

  it("changes color via a prop", async () => {
    const wrapper = mount(Countdown, {
      props: {
        time: new Date(new Date().getUTCFullYear() + 1, 1, 1),
        color: "red",
      },
    });

    expect(wrapper.html()).toContain("red");
  });

  it("shows the expired message prop when th timer is expired", async () => {
    const wrapper = mount(Countdown, {
      props: {
        time: new Date(new Date().getUTCFullYear() - 1, 1, 1),
        expiredMessage: "Testing",
      },
    });

    expect(wrapper.html()).toContain("Testing");
    expect(wrapper.html()).not.toContain("Seconds");
  });

  it("does not show the expired message prop when th timer is not expired", async () => {
    const wrapper = mount(Countdown, {
      props: {
        time: new Date(new Date().getUTCFullYear() + 1, 1, 1),
        expiredMessage: "Testing",
      },
    });

    expect(wrapper.html()).not.toContain("Testing");
    expect(wrapper.html()).toContain("Seconds");
  });

  it("has Expired as the default message for a timer that has expired", async () => {
    const wrapper = mount(Countdown, {
      props: {
        time: new Date(new Date().getUTCFullYear() - 1, 1, 1),
      },
    });

    expect(wrapper.html()).toContain("Expired");
  });

  it("updates the countdown when the time prop changes", async () => {
    let nextYear = new Date(new Date().getUTCFullYear() + 1, 1, 1);
    let Years2FromNow = new Date(new Date().getUTCFullYear() + 2, 1, 1);

    let distance = nextYear - new Date().getTime();
    let distance2Years = Years2FromNow - new Date().getTime();

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let days2Years = Math.floor(distance2Years / (1000 * 60 * 60 * 24));

    const wrapper = mount(Countdown, {
      props: {
        time: nextYear,
      },
    });

    expect(wrapper.find("[qa-data-days]").html()).toContain(days);

    await wrapper.setProps({ time: Years2FromNow });

    expect(wrapper.find("[qa-data-days]").html()).toContain(days2Years);
  });
});
