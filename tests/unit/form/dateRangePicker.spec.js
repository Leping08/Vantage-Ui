import { mount } from "@vue/test-utils";
import DateRangePicker from "@/lib-components/form/DateRangePicker.vue";

describe("DateRangePicker.vue", () => {
  it("show the default pick a date text when no start and end date are selected", async () => {
    const wrapper = mount(DateRangePicker);

    expect(wrapper.html()).toContain("Select Dates");
  });

  it("changes color via a prop", async () => {
    const wrapper = mount(DateRangePicker, {
      props: {
        color: "teal",
      },
    });

    await wrapper.find("#date-range-picker-button").trigger("click");

    expect(wrapper.html()).toContain("teal");
  });

  it("changes sides via the position prop", async () => {
    const wrapper = mount(DateRangePicker, {
      props: {
        position: "left",
      },
    });

    expect(wrapper.html()).toContain("text-left");

    await wrapper.setProps({
      position: "right",
    });

    await wrapper.find("#date-range-picker-button").trigger("click");

    expect(wrapper.html()).toContain("text-right");
  });
});
