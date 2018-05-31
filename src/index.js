export default class SheetHelper {
  constructor(sheet, {idColumn}) {
    this.sheet = sheet;
    this.idColumn = idColumn || 0;
  }

  /**
   * Create an item in sheet as Row,
   * @param item
   */
  create(item) {
    this.sheet.appendRow(item);
  }

  /**
   * Read A Row by id
   * @param id
   * @returns {*}
   */

  read(id) {
    return this.findByColumnName(this.idColumn, id)[0];
  }

  /**
   * This will find a value in a specif column, Will return an array of all matches
   * @param column
   * @param value
   * @returns {Array}
   */

  findByColumnName(column, value) {

    const values = this.sheet.getDataRange().getValues();
    const rows = [];
    values.forEach((item, row) => {
      if (item[column] == value) {
        rows.push({item, row: row + 1});
      }
    });
    return rows;
  }

  /** *
   * This will find a value in a specif column, Will return an array of all matches
   * @param column
   * @param value
   * @returns {Array}
   */

  find(column, value) {
    return this.findByColumnName(column, value);
  }

  /**
   * Update a row by Row
   * @param row
   * @param item
   */
  updateByRow(row, item) {
    const range = this.sheet.getRange(row, 1, 1, item.length);
    range.setValues([item]);
  }

  /**
   * Update a row by ID
   * @param id
   * @param item
   */
  updateById(id, item) {
    const sheetItem = this.read(id);
    if (sheetItem.row !== undefined) {
      return this.updateByRow(sheetItem.row, item);
    }

    return false;
  }

  /**
   * Delete a row by ID
   * @param id
   * @returns {boolean}
   */

  deleteById(id) {
    const item = this.read(id);
    if (item && item.row) {
      this.sheet.deleteRow(item.row);
      return true;
    }

    return false;
  }
}
