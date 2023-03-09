import { expect, test } from "vitest";
import { getColors } from "./getColors";

test("when getColors gets an even number", () => {
  expect(getColors(4)).toBe("black");
});

test("when getColors gets an odd number", () => {
  expect(getColors(1)).toBe("hotpink");
});
