import safelist from "@/lib-components/utils/safelist";

describe("Safelist Util", () => {
  it("contains only the colors in the safelist", async () => {
    expect(safelist(['red'])).toContain(
      "bg-red-500",
      "text-red-500",
      "border-red-500",
      "ring-red-500"
    );
    expect(safelist(['red'])).not.toContain(
      "bg-blue-500",
      "text-blue-500",
      "border-bue-500",
      "ring-blue-500"
    );
  });

  it("it allows all colors by using the '*' character", async () => {
    expect(safelist('*')).toContain(
      "bg-red-500",
      "text-red-500",
      "border-red-500",
      "ring-red-500",
      "bg-bue-500",
      "text-blue-500",
      "border-bue-500",
      "ring-blue-500"
    );
  });

  it("contains only the height and width classes by default", async () => {
    expect(safelist(['red'])).toContain(
      "h-1",
      "h-4",
      "w-1",
      "w-4",
    );
  });
  
  it("contains only the shadow classes by default", async () => {
    expect(safelist(['red'])).toContain(
      "shadow-xs",
      "shadow-sm",
      "shadow",
      "shadow-md",
      "shadow-lg",
      "shadow-xl",
      "shadow-2xl",
      "shadow-inner",
      "shadow-none"
    );
  });
  
  it("contains only the border radius classes by default", async () => {
    expect(safelist(['red'])).toContain(
      "rounded-none",
      "rounded-sm",
      "rounded",
      "rounded-md",
      "rounded-lg",
      "rounded-xl",
      "rounded-2xl",
      "rounded-3xl",
      "rounded-full"
    );
  });
});