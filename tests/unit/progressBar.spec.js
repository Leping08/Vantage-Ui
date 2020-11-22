import { mount } from "@vue/test-utils";
import ProgressBar from "@/lib-components/progressBar.vue";

describe("ProgressBar.vue", () => {
  it("renders progress at the percent through the model value prop", async () => {
    const wrapper = mount(ProgressBar, {
      props: {
        modelValue: 47
      }
    });

    expect(wrapper.html()).toContain(47);
  });

  it("changes color via a prop", async () => {
    const wrapper = mount(ProgressBar, {
      props: {
        modelValue: 25,
        color: "teal"
      }
    });

    expect(wrapper.html()).toContain("teal");
  });

  it("changes the rounded edge via a prop", async () => {
    const wrapper = mount(ProgressBar, {
      props: {
        modelValue: 25,
        rounded: "rounded-md"
      }
    });

    expect(wrapper.html()).toContain("rounded-md");
  });

  it("changes progress when the model value changes", async () => {
    const wrapper = mount(ProgressBar, {
      props: {
        modelValue: 25,
        rounded: "rounded-md"
      }
    });

    expect(wrapper.html()).toContain(25);

    await wrapper.setProps({ modelValue: 75 });

    expect(wrapper.html()).toContain(75);
  });
});
