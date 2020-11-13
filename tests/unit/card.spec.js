import { mount } from "@vue/test-utils";
import Card from "@/lib-components/card.vue";

describe("Card.vue", () => {
  it("renders the card with the slot content", async () => {
    const wrapper = mount(Card, {
      slots: {
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    });

    expect(wrapper.html()).toContain("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
  });
  
  it("renders the card with heading text", async () => {
    const wrapper = mount(Card, {
      slots: {
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      props: {
        heading: "Heading Text"
      }
    });

    expect(wrapper.html()).toContain("Heading Text");
  });

  it("renders the card with subheading text", async () => {
    const wrapper = mount(Card, {
      slots: {
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      props: {
        subheading: "Subheading Text"
      }
    });

    expect(wrapper.html()).toContain("Subheading Text");
  });

  it("renders the card with padding", async () => {
    const wrapper = mount(Card, {
      slots: {
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      props: {
        padding: true
      }
    });

    expect(wrapper.html()).toContain("p-4");
  });
  
  it("renders the card with out padding", async () => {
    const wrapper = mount(Card, {
      slots: {
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      props: {
        padding: false
      }
    });

    expect(wrapper.html()).not.toContain("p-4");
  });
  
  it("renders the card with heading border", async () => {
    const wrapper = mount(Card, {
      slots: {
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      props: {
        headingBorder: true
      }
    });

    expect(wrapper.html()).toContain("border-t");
  });
  
  it("renders the card with out heading border", async () => {
    const wrapper = mount(Card, {
      slots: {
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      props: {
        headingBorder: false
      }
    });

    expect(wrapper.html()).not.toContain("border-t");
  });
});
