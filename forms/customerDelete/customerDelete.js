 btnDelete.onclick = function() {
   let nameDelete = inptCustomerDelete.value
   let found = false
   for (i = 0; i < results.length; i++) {
     if (customerNameDel == results[i][1]) {
       found = true
       break
     }
   }
   if (found == false)
     lbl2.value = "That customer name is not in the database."
   else if (found == true) {
     query = "DELETE FROM customer WHERE name = '" + nameDelete + "'"
     req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + query)
     if (req.status == 200)
       if (req.responseText == 500)
         lbl2.value = `You have deleted the customer named ${nameDelete}`
     else
       lbl2.value = `You were unable to delete ${nameDelete} from the database.`
     else
       lbl2.value = `Error: ${req.status}`
   }
 }