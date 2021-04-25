function rot13(str) {
  str.toUpperCase(); 
  var set1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  var set2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var arr = str.split(""); 

    for (var i = 0; i < arr.length; i++) { 
      for (var j = 0; j < set1.length; j++) { 
      if (arr[i] === set1[j]) {
        arr[i] = set2[j]; 
      } else if (arr[i] === set2[j]) {
        arr[i] = set1[j];
      }
    }
  }

  return arr.join("");
}

rot13("FHCRE FRPERG!!!");