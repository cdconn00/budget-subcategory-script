function onEdit() {
  var currentSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  var current = currentSheet.getActiveCell()
  
  handleCategories(current, currentSheet)
  handleDefaultPaymentAction(current, currentSheet)
}

function handleCategories(current, currentSheet) {
  if (current.getColumn() == 4 && current.getRow() > 2 && currentSheet.getSheetName() == "Expense Log") {
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

function handleDefaultPaymentAction(current, currentSheet) {
  if (current.getColumn() == 6 && current.getRow() > 2 && currentSheet.getSheetName() == "Expense Log") {
    var choice = current.getValue()
    var subCatCell = current.offset(0, 1)
    var paidDate = current.offset(0, 2)
    
    if (choice != '') {
      subCatCell.clearContent()
      
      if (choice == 'Chase Debit' || choice == 'ACH' || choice == 'Cash'){
        // The choice is automatically paid, set paid to yes and add payment date
        subCatCell.setValue('Yes')
        paidDate.setValue(current.offset(0, -5).getValue())
      } else {
        subCatCell.setValue('No')
        paidDate.clearContent()
      }
    } else {
      // The cell was cleared, so delete the paid and payment date values
      subCatCell.clearContent()
      paidDate.clearContent()
    }
  }
}
