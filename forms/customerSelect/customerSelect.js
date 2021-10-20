btnSubmit.onclick=function(){
  name = inptName.value
  address = inptAddress.value
  city = inptCity.value
  state = inptState.value
  zipcode = inptZipcode.value
  query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('" + name + "', '" + address + "', '" + city + "', '" + state + "', '" + zip + "')"
  alert(query)

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + query)
  if (req.status == 200) {
    if (req.responseText == 500)
      Label1.value = "You have added the pet!"
    else
      Label1.value = "There was a problem with adding the pet to the database."
  } else
    Label1.value = "Error: " + req.status
}
