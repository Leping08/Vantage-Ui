import content from "@/lib-components/utils/content";

describe("Content Util", () => {
  it("changes color through the color prop", async () => {
    expect(content()).toEqual([
      "./node_modules/vantage-ui/src/lib-components/**/*.vue",
      "./node_modules/vantage-ui/src/lib-components/**/*.js"
    ]);
  });
});
