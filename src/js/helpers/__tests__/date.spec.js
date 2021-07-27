import { formatDate } from "../date";

describe("formatDate", () => {
  it("testing format", () => {
    expect(formatDate(1577014368252, "yyyy")).toBe("2019");
  });
});
