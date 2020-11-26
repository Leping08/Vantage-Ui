import { mount } from "@vue/test-utils";
import DataTable from "@/lib-components/dataTable.vue";

describe("DataTable.vue", () => {
  const items = [
    {
      title: "Intro to CSS",
      name: "Derek",
      price: 858,
      edit: ""
    },
    {
      title: "Backend API's",
      name: "Adam",
      price: 112,
      edit: ""
    },
    {
      title: "Intro to JavaScript",
      name: "Chris",
      price: 1280,
      edit: ""
    },
    {
      title: "Learning SQL",
      name: "John",
      price: 858,
      edit: ""
    },
    {
      title: "ASP",
      name: "Joe",
      price: 1078,
      edit: ""
    },
    {
      title: "Its GO time",
      name: "Lee",
      price: 645,
      edit: ""
    },
    {
      title: "Rust 101",
      name: "Mac",
      price: 95,
      edit: ""
    }
  ];

  it("renders with the items passed in through the items prop", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items
      }
    });

    expect(wrapper.html()).toContain(items[0].title);
    expect(wrapper.html()).toContain(items[0].name);
    expect(wrapper.html()).toContain(items[0].price);
    expect(wrapper.html()).toContain(items[1].title);
    expect(wrapper.html()).toContain(items[1].name);
    expect(wrapper.html()).toContain(items[1].price);
    expect(wrapper.html()).toContain(items[2].title);
    expect(wrapper.html()).toContain(items[2].name);
    expect(wrapper.html()).toContain(items[2].price);
  });

  it("renders the search box when the search prop is true", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items,
        search: true
      }
    });

    expect(wrapper.html()).toContain("Search");
  });

  it("does not render the search box when the search prop is false", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items,
        search: false
      }
    });

    expect(wrapper.html()).not.toContain("Search");
  });

  it("renders the title when the title prop is set", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items,
        title: "Test Title"
      }
    });

    expect(wrapper.html()).toContain("Test Title");
  });

  it("filters the items baised on what is typed into the search box, exact match", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items,
        title: "Test Title"
      }
    });

    const input = wrapper.find("input");
    //Set the search input to the exact 'Rust 101' string
    await input.setValue(items[0].title);

    // Rust 101
    expect(wrapper.html()).toContain(items[0].title);
    expect(wrapper.html()).toContain(items[0].name);
    expect(wrapper.html()).toContain(items[0].price);

    //Its GO time
    expect(wrapper.html()).not.toContain(items[1].title);
    expect(wrapper.html()).not.toContain(items[1].name);
    expect(wrapper.html()).not.toContain(items[1].price);

    //ASP
    expect(wrapper.html()).not.toContain(items[2].title);
    expect(wrapper.html()).not.toContain(items[2].name);
    expect(wrapper.html()).not.toContain(items[2].price);
  });

  it("filters the items baised on what is typed into the search box, partial match", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items,
        title: "Test Title"
      }
    });

    const input = wrapper.find("input");
    //Set the search input to the exact 'In' string
    await input.setValue("In");

    // Rust 101
    expect(wrapper.html()).not.toContain(items[0].title);
    expect(wrapper.html()).not.toContain(items[0].name);
    expect(wrapper.html()).not.toContain(items[0].price);

    //Its GO time
    expect(wrapper.html()).toContain(items[1].title);
    expect(wrapper.html()).toContain(items[1].name);
    expect(wrapper.html()).toContain(items[1].price);

    //ASP
    expect(wrapper.html()).not.toContain(items[2].title);
    expect(wrapper.html()).not.toContain(items[2].name);
    expect(wrapper.html()).not.toContain(items[2].price);

    //Learning SQL
    expect(wrapper.html()).toContain(items[3].title);
    expect(wrapper.html()).toContain(items[3].name);
    expect(wrapper.html()).toContain(items[3].price);
  });
});
