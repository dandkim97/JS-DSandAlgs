// Check if string matches US phone number 

function telephoneCheck(str) {
  // Hardcoded :(
  // var regex =/^1 \d{3} \d{3} \d{4}$|^\d{3}-\d{3}-\d{4}$|^\d{10}$|^\d{3} \d{3} \d{4}$|^\(\d{3}\)\d{3}-\d{4}$|^\(\d{3}\) \d{3}-\d{4}|^1 \d{3}-\d{3}-\d{4}$|^1 \(\d{3}\) \d{3}-\d{4}$|^1\(\d{3}\)\d{3}-\d{4}$/
  
  // Read more about regex :)
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/

  console.log(regex.test(str))
  return regex.test(str);
}

telephoneCheck("555 555 5555");
