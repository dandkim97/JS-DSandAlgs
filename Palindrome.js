// Detect if a string is a palindrome, all non-alphanumeric characters are ignored. Letter case is ignored.

function palindrome(str) {
  
  // First Attempt
  // var regex = /[^a-zA-Z\d]+/;
  // var original = str.toLowerCase().split(regex).join("").split("");
  // var reversed = [...original];                  //reverse() is destructive!
  // reversed = reversed.reverse();
  // if(original.join("") === reversed.join("")){
  //   return true;
  // }
  // return false;
  
  // Optimized version
  let front = 0;
  let end = str.length-1;
  var regex = /[\W_]/;

  while(end > front){
    while(regex.test(str[front])){
      front++;
    }
    while(regex.test(str[end])){
      end--;
    }
    if(str[front].toLowerCase() !== str[end].toLowerCase()) return false;
    front++;
    end--;
  }
  
  return true;

}



palindrome("A man, a plan, a canal. Panama");
