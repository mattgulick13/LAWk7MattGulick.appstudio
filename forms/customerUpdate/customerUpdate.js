customerUpdate.onshow = function() {
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    let message = ""
    for (i = 0; i < results.length; i++)
      message = message + results[i][1] + "\n"
    inptCustomerUpdate.value = message
  }
}
btnUpdate.onclick = function() {
  let updatedName = inptNew.value
  let oldName = inptOld.value
  query = "SELECT * FROM customer WHERE `name` = '" + oldName + "'"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database==" + query)
  if (req.status == 200) {
    allCustomerData = JSON.parse(req.responseText)
    if (allCustomerData.length > 0) {
      query = "UPDATE customer SET `name` ='" + updatedName + "' WHERE `name` = '" + oldName + "'"
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + query)
      if (req.status == 200)
        if (req.responseText == 500)
          lbl3.value = `You have updated ${oldName} to ${updatedName}.`
      else
        lbl3.value = `There was a problem updating ${oldName} to ${updatedName}.`
      else
        lbl3.value = `Error: ${req.status}`
    }
  }
}