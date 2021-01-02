import { mount } from "@vue/test-utils";
import ProgressBar from "@/lib-components/progressBar.vue";

describe("ProgressBar.vue", () => {
  it("renders progress at the percent through the percent prop", async () => {
    const wrapper = mount(ProgressBar, {
      props: {
        percent: 47
      }
    });

    expect(wrapper.html()).toContain(47);
  });

  it("changes color via a prop", async () => {
    const wrapper = mount(ProgressBar, {
      props: {
        percent: 25,
        color: "teal"
      }
    });

    expect(wrapper.html()).toContain("teal");
  });

  it("changes the rounded edge via a prop", async () => {
    const wrapper = mount(ProgressBar, {
      props: {
        percent: 25,
        rounded: "rounded-md"
      }
    });

    expect(wrapper.html()).toContain("rounded-md");
  });

  it("changes progress when the model value changes", async () => {
    const wrapper = mount(ProgressBar, {
      props: {
        percent: 25,
        rounded: "rounded-md"
      }
    });

    expect(wrapper.html()).toContain(25);

    await wrapper.setProps({ percent: 75 });

    expect(wrapper.html()).toContain(75);
  });
});
