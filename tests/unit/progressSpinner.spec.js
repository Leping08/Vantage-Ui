import { mount } from "@vue/test-utils";
import ProgressSpinner from "@/lib-components/progressSpinner.vue";

describe("ProgressBar.vue", () => {
  it("renders progress at the percent through the model value prop", async () => {
    const wrapper = mount(ProgressSpinner);

    expect(wrapper.html()).toContain("<circle");
  });

  it("changes color via a prop", async () => {
    const wrapper = mount(ProgressSpinner, {
      props: {
        color: "teal",
      },
    });

    expect(wrapper.html()).toContain("teal");
  });

  it("changes size via a prop", async () => {
    const wrapper = mount(ProgressSpinner, {
      props: {
        size: 4,
      },
    });

    expect(wrapper.html()).toContain("h-4 w-4");
  });
});
