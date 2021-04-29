import { vantageSafelist } from "@/lib-components/utils/safelist";

describe("Safelist Util", () => {
  it("contains only the colors in the safelist", async () => {
    expect(vantageSafelist(["red"])).toContain(
      "bg-red-500",
      "text-red-500",
      "border-red-500",
      "ring-red-500"
    );
    expect(vantageSafelist(["red"])).not.toContain(
      "bg-blue-500",
      "text-blue-500",
      "border-bue-500",
      "ring-blue-500"
    );
  });

  it("it allows all colors by using the '*' character", async () => {
    expect(vantageSafelist("*")).toContain(
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

  it("contains the height and width classes by default", async () => {
    expect(vantageSafelist(["red"])).toContain("h-1", "h-4", "w-1", "w-4");
  });

  it("contains the shadow classes by default", async () => {
    expect(vantageSafelist(["red"])).toContain(
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

  it("contains the border radius classes by default", async () => {
    expect(vantageSafelist(["red"])).toContain(
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
