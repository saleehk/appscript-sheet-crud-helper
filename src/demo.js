var SHEET_URL_KEY = "___sheet_url";
import SheetHelper from './index';

function createOrGetSheet() {
  var userProperties = PropertiesService.getUserProperties();
  //userProperties.deleteAllProperties();
  var sheetUrl = userProperties.getProperty(SHEET_URL_KEY);
  var sheet;
  if (sheetUrl == undefined) {
    sheet = SpreadsheetApp.create("Sample CRUD sheet");
    sheetUrl = sheet.getUrl();
    userProperties.setProperty(SHEET_URL_KEY, sheetUrl);
    createInitialSheet(sheet)
  } else {
    sheet = SpreadsheetApp.openByUrl(sheetUrl);
  }

  return sheet;
}

function createInitialSheet(sheet) {
  sheet.appendRow(["Thread Id", "Days", "Condition", "Email content", "Subject", "Message count", "Status", "Added At"])

}

function test() {
  var sheet = createOrGetSheet();
  var item = [2, "Ajith", "appmaker"];
  var sheetHelper = new SheetHelper(sheet, {});
  //sheetHelper.create(item);
  var sheetItem = sheetHelper.read(item[0]);
  Logger.log(sheetItem);
}
