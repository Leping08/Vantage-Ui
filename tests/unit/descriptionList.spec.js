import { mount } from "@vue/test-utils";
import DescriptionList from "@/lib-components/descriptionList.vue";

describe("DescriptionList.vue", () => {

  it("renders the description list items through the items prop", async () => {

    const items = [
      {
        key: "First Item",
        value: "$1500"
      },
      {
        key: "Second Item",
        value: "150 Subscribers"
      },
      {
        key: "Third Item",
        value: "Hail Dale"
      },
      {
        key: "Fourth Item",
        value: "Number 4 is the best."
      }
    ]

    const wrapper = mount(DescriptionList, {
      props: {
        items: items
      }
    });

    expect(wrapper.html()).toContain(items[0].key);
    expect(wrapper.html()).toContain(items[1].key);
    expect(wrapper.html()).toContain(items[2].key);
    expect(wrapper.html()).toContain(items[3].key);
    expect(wrapper.html()).toContain(items[0].value);
    expect(wrapper.html()).toContain(items[1].value);
    expect(wrapper.html()).toContain(items[2].value);
    expect(wrapper.html()).toContain(items[3].value);
  });

  it("renders the items with a different item key through a prop", async () => {

    const items = [
      {
        newKeyName: 'Testing',
        value: 56 
      }
    ];

    const wrapper = mount(DescriptionList, {
      props: {
        items: items,
        itemKey: 'newKeyName'
      }
    });

    expect(wrapper.html()).toContain(items[0].newKeyName);
    expect(wrapper.html()).toContain(items[0].value);
  });

  it("renders the items with a different value key through a prop", async () => {

    const items = [
      {
        key: 'Testing',
        newValueName: 56
      }
    ];

    const wrapper = mount(DescriptionList, {
      props: {
        items: items,
        itemValue: 'newValueName'
      }
    });

    expect(wrapper.html()).toContain(items[0].key);
    expect(wrapper.html()).toContain(items[0].newValueName);
  });
});
