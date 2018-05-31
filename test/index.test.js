import SheetHelper from "../src";
import SheetApp, {
  appendRow,
  getDataRange,
  getValues,
  getRange,
  deleteRow
} from "./__mocks__/sheet";

describe("sheetHelper", () => {
  it("create", () => {
    const item = [123, "Sample", true];
    const sheet = new SheetApp();

    const sheetHelper = new SheetHelper(sheet, {});
    sheetHelper.create(item);
    expect(appendRow).toHaveBeenCalledWith(item);
  });
  it("read", () => {
    const id = 123;
    const sheet = new SheetApp();
    const sheetHelper = new SheetHelper(sheet, {});
    sheetHelper.read(id);
    expect(getDataRange).toBeCalled();
    expect(getDataRange().getValues).toBeCalled();
  });
  it("find", () => {
    const id = 123;
    const sheet = new SheetApp();
    const sheetHelper = new SheetHelper(sheet, {});
    sheetHelper.find(1, id);
    expect(getDataRange).toBeCalled();
    expect(getDataRange().getValues).toBeCalled();
  });
  it("updateupdateById", () => {
    const id = 123;
    getValues.mockReturnValue([[123, 1, 2]]);
    const sheet = new SheetApp();
    const sheetHelper = new SheetHelper(sheet, {});
    sheetHelper.updateById(id, [1, 2, 3]);
    expect(getRange).toBeCalled();
    expect(getRange().setValues).toBeCalled();
  });
  it("deleteById", () => {
    const id = 123;
    const sheet = new SheetApp();
    const sheetHelper = new SheetHelper(sheet, {});
    sheetHelper.deleteById(id);
    expect(deleteRow).toBeCalled();

  });
});
