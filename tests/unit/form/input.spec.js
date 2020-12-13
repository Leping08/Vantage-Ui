import { mount } from "@vue/test-utils";
import Input from "@/lib-components/form/input.vue";

describe("Input.vue", () => {
  it("shows the input data in the input and updates the v-model data", async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: ""
      }
    });

    const input = wrapper.find("input");
    await input.setValue("my@mail.com");

    expect(input.element.value).toBe("my@mail.com");
  });

  it("changes color via a prop", async () => {
    const wrapper = mount(Input, {
      props: {
        color: "red",
        modelValue: ""
      }
    });

    expect(wrapper.html()).toContain("red");
  });

  it("renders the placeholder with the prop", async () => {
    const wrapper = mount(Input, {
      props: {
        placeholder: "testing placeholder",
        modelValue: ""
      }
    });

    expect(wrapper.html()).toContain("testing placeholder");
  });

  it("renders the label with the prop", async () => {
    const wrapper = mount(Input, {
      props: {
        label: "testing label",
        modelValue: ""
      }
    });

    expect(wrapper.html()).toContain("testing label");
  });

  it("renders the help text with the prop", async () => {
    const wrapper = mount(Input, {
      props: {
        helpText: "help text label",
        modelValue: ""
      }
    });

    expect(wrapper.html()).toContain("help text label");
  });

  it("shows an error for min characters rule", async () => {
    const wrapper = mount(Input, {
      props: {
        rules: ["min:3"],
        label: "test",
        modelValue: "a"
      }
    });

    // By default it does not show vallidation messages
    expect(wrapper.html()).not.toContain("must be 3 characters or more");

    await wrapper.setProps({ modelValue: "ab" });

    expect(wrapper.html()).toContain("must be 3 characters or more");

    await wrapper.setProps({ modelValue: "abc" });

    expect(wrapper.html()).not.toContain("must be 3 characters or more");
  });

  it("shows an error for max characters rule", async () => {
    const wrapper = mount(Input, {
      props: {
        rules: ["max:2"],
        label: "test",
        modelValue: "a"
      }
    });

    // By default it does not show vallidation messages
    expect(wrapper.html()).not.toContain("must be 2 characters or less");

    await wrapper.setProps({ modelValue: "ab" }); // 2 characters

    expect(wrapper.html()).not.toContain("must be 2 characters or less");

    await wrapper.setProps({ modelValue: "abc" }); // 3 characters

    expect(wrapper.html()).toContain("must be 2 characters or less");
  });

  it("shows an error when the required rule is being used", async () => {
    const wrapper = mount(Input, {
      props: {
        rules: ["required"],
        label: "test",
        modelValue: "a"
      }
    });

    expect(wrapper.html()).not.toContain("is required");

    await wrapper.setProps({ modelValue: "" });

    expect(wrapper.html()).toContain("is required");
  });

  it("shows an error when the email is not valid", async () => {
    const wrapper = mount(Input, {
      props: {
        rules: ["email"],
        label: "test",
        modelValue: "a"
      }
    });

    await wrapper.setProps({ modelValue: "abc" });

    expect(wrapper.html()).toContain("Invalid email address");
  });
});
