// __mocks__/sound-player.js

// Import this named export into your test file:
export const appendRow = jest.fn();
export const getDataRange = jest.fn();
export const getValues = jest.fn();
getValues.mockReturnValue([]);
getDataRange
  .mockReturnValue({getValues});
export const getRange = jest.fn();
export const setValues = jest.fn();
setValues.mockReturnValue(true);
getRange.mockReturnValue({setValues});
export const deleteRow = jest.fn();
const mock = jest.fn().mockImplementation(() => ({
  appendRow,
  getDataRange,
  getRange,
  deleteRow
}));

export default mock;
