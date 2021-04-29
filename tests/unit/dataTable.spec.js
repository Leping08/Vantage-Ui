import { mount } from "@vue/test-utils";
import DataTable from "@/lib-components/dataTable.vue";

describe("DataTable.vue", () => {
  const header = [
    {
      text: "Title",
      sortable: true,
      direction: "asc",
      value: "title"
    },
    {
      text: "Instructor",
      sortable: false,
      direction: "asc",
      value: "name"
    },
    {
      text: "Price",
      sortable: true,
      direction: "asc",
      value: "price"
    }
  ];

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
      edit: "do not show"
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
      edit: "do not show"
    },
    {
      title: "ASP",
      name: "Joe",
      price: 1078,
      edit: "do not show"
    },
    {
      title: "Its GO time",
      name: "Lee",
      price: 645,
      edit: "do not show"
    },
    {
      title: "Rust 101",
      name: "Mac",
      price: 95,
      edit: "do not show"
    }
  ];

  it("renders with the items passed in through the items prop", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items,
        header: header
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
        header: header,
        search: true
      }
    });

    expect(wrapper.html()).toContain("Search");
  });

  it("does not render the search box when the search prop is false", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items,
        header: header,
        search: false
      }
    });

    expect(wrapper.html()).not.toContain("Search");
  });

  it("renders the title when the title prop is set", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items,
        header: header,
        title: "Test Title"
      }
    });

    expect(wrapper.html()).toContain("Test Title");
  });

  it("filters the items baised on what is typed into the search box, exact match", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items,
        header: header,
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
        header: header,
        title: "Test Title"
      }
    });

    const input = wrapper.find("input");
    //Set the search input to the exact 'In' string
    await input.setValue("In");

    // Intro to CSS
    expect(wrapper.html()).toContain(items[0].title);
    expect(wrapper.html()).toContain(items[0].name);
    expect(wrapper.html()).toContain(items[0].price);

    //Backend API's
    expect(wrapper.html()).not.toContain(items[1].title);
    expect(wrapper.html()).not.toContain(items[1].name);
    expect(wrapper.html()).not.toContain(items[1].price);

    //Intro to JavaScript
    expect(wrapper.html()).toContain(items[2].title);
    expect(wrapper.html()).toContain(items[2].name);
    expect(wrapper.html()).toContain(items[2].price);

    //Learning SQL
    expect(wrapper.html()).toContain(items[3].title);
    expect(wrapper.html()).toContain(items[3].name);
    expect(wrapper.html()).toContain(items[3].price);
  });

  it("uses the text key in the header", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items,
        header: header,
        title: "Test Title"
      }
    });

    expect(wrapper.html()).toContain(header[0].text);
  });

  it("uses the value header key to show the value from the items in the table", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items,
        header: header,
        title: "Test Title"
      }
    });

    expect(wrapper.html()).not.toContain("do not show");
    expect(wrapper.html()).toContain(858);
  });

  it("only shows the number of times in the itemsPerPage prop", async () => {
    const wrapper = mount(DataTable, {
      props: {
        items: items,
        itemsPerPage: 2,
        header: header,
        searchable: false,
        title: "Test Title"
      }
    });

    //Make sure the table is showing 1 header tr tag and 2 row tr tags
    expect(wrapper.findAll("tr")).toHaveLength(3);
  });

  //TODO add pagination tests
  //TODO add boolean to disable pagination
  //TODO add test for next button
  //TODO add test for previous button
});
