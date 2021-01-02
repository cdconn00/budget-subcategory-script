function onEdit() {
  var currentSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  var current = currentSheet.getActiveCell()
  
  if (isValidCategoryCell(current, currentSheet)) {
    var choice = current.getValue()
    var subCatCell = current.offset(0, 1)
    
    if (choice != '') {
      // The cell has a value (the user has selected a drop down option) so set subCatCell data validation with items from named list corresponding to choice value
      var items = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(choice.replace(/\s+/g, ''));
      var rule = SpreadsheetApp.newDataValidation().requireValueInRange(items, true).build()
    
      subCatCell.clearContent()
      subCatCell.clearDataValidations()
      subCatCell.setDataValidation(rule)
    } else {
      // The cell was cleared, so delete the dropdown options in the subCatCell and clear the cell
      subCatCell.clearDataValidations()
      subCatCell.clearContent()
    }
  }
}

function isValidCategoryCell(current, currentSheet) {
  return current.getColumn() == 4 && current.getRow() > 2 && currentSheet.getSheetName() == "Expense Log"
}
