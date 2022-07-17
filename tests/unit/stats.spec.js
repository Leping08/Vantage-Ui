import { mount } from "@vue/test-utils";
import Stats from "@/lib-components/stats.vue";

describe("Stats.vue", () => {
  it("renders with the heading prop", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 50,
      },
    });

    expect(wrapper.html()).toContain("Users");
  });

  it("renders with the first metric prop and does not show the second metric", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 50,
      },
    });

    expect(wrapper.html()).toContain(50);
  });

  it("renders with the first metric and second metric prop", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 1,
        secondMetric: 4,
      },
    });

    expect(wrapper.html()).toContain(1);
    expect(wrapper.html()).toContain(4);
    expect(wrapper.html()).toContain("75 %");
  });

  it("renders with the negitave percent change between the first and second metric", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 1,
        secondMetric: 4,
      },
    });

    expect(wrapper.html()).toContain("75 %");
  });

  it("renders with the positive percent change between the first and second metric", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 4,
        secondMetric: 1,
      },
    });

    expect(wrapper.html()).toContain("300 %");
  });

  it("renders with the color prop", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 50,
        color: "red",
      },
    });

    expect(wrapper.html()).toContain("red");
  });

  it("renders with the shadow prop", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 50,
        shadow: "shadow",
      },
    });

    expect(wrapper.html()).toContain("shadow");
  });

  it("renders with the rounded prop", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 50,
        rounded: "rounded",
      },
    });

    expect(wrapper.html()).toContain("rounded");
  });

  it("parses strings to floats", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 9,
        secondMetric: 34,
      },
    });

    expect(wrapper.html()).toContain("Decreased by");

    await wrapper.setProps({
      firstMetric: 10,
      secondMetric: 34,
    });

    expect(wrapper.html()).toContain("Decreased by");
  });

  it("will show no change and be gray", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 9,
        secondMetric: 9,
      },
    });

    expect(wrapper.html()).toContain("No change");
    expect(wrapper.html()).toContain("gray-800");
  });
});
