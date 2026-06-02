import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("merges class names and filters falsy values", () => {
    expect(cn("px-2", false && "hidden", undefined, "font-bold")).toBe(
      "px-2 font-bold"
    );
  });

  it("resolves conflicting tailwind classes with later values", () => {
    expect(cn("px-2", "px-4", "text-left", "text-center")).toBe(
      "px-4 text-center"
    );
  });
});
