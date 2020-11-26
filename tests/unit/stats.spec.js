import { mount } from "@vue/test-utils";
import Stats from "@/lib-components/stats.vue";

describe("Stats.vue", () => {
  it("renders the card with the heading prop", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 50
      }
    });

    expect(wrapper.html()).toContain("Users");
  });

  it("renders the card with the first metric prop and does not show the second metric", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 50
      }
    });

    expect(wrapper.html()).toContain(50);
  });

  it("renders the card with the first metric and second metric prop", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 1,
        secondMetric: 4
      }
    });

    expect(wrapper.html()).toContain(1);
    expect(wrapper.html()).toContain(4);
    expect(wrapper.html()).toContain("75 %");
  });

  it("renders the card with the negitave percent change between the first and second metric", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 1,
        secondMetric: 4
      }
    });

    expect(wrapper.html()).toContain("75 %");
  });

  it("renders the card with the positive percent change between the first and second metric", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 4,
        secondMetric: 1
      }
    });

    expect(wrapper.html()).toContain("300 %");
  });

  it("renders the card with the color prop", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 50,
        color: "red"
      }
    });

    expect(wrapper.html()).toContain("red");
  });

  it("renders the card with the shadow prop", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 50,
        shadow: "shadow"
      }
    });

    expect(wrapper.html()).toContain("shadow");
  });

  it("renders the card with the rounded prop", async () => {
    const wrapper = mount(Stats, {
      props: {
        heading: "Users",
        firstMetric: 50,
        rounded: "rounded"
      }
    });

    expect(wrapper.html()).toContain("rounded");
  });
});
