import locationsInstance, { Locations } from "../locations";
import { formatDate } from "../../helpers/date";
import api, { Api } from "../../services/apiService";

const countries = [{ code: "UKR", name: "Ukraine" }];

describe("Location store test", () => {
  it("check between locationInstacse is instance of Locations class", () => {
    expect(locationsInstance).toBeInstanceOf(Locations);
  });

  it("Checking for success Locations instance create ", () => {
    const instance = new Locations(api, { formatDate });

    expect(instance.countries).toBe(null);
    expect(instance.shortCitiesList).toEqual({});
    expect(instance.lastSearch).toEqual({});
    expect(instance.airlines).toEqual({});
    expect(instance.formatDate).toEqual(formatDate);
  });

  it("Check correct countries serialize", () => {
    const res = locationsInstance.serializeCountries(countries);
    const expectedData = {
      UKR: { code: "UKR", name: "Ukraine" },
    };
    expect(res).toEqual(expectedData);
  });

  it("Check serialize with incorrect data", () => {
    const res = locationsInstance.serializeCountries(null);
    const expectedData = {};
    expect(res).toEqual(expectedData);
  });

  // it("Check City by City code", () => {

  // });
});
