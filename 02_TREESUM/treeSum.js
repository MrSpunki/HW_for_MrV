var arrForEx = [ 5, 7, 
                  [ 4, [2], 8, [1,3], 2 ], 
                  [ 9, [] ],
                  1, 8
               ];
           
function treeSum (arr) {
  var sum = 0;  
  for (var i = 0; i < arr.length; i++) {  
    if (Array.isArray(arr[i])) {      
      sum += treeSum (arr[i]);
    }else {
      sum +=arr[i];
      console.log(sum)
    }
  }
  return sum;
}

treeSum (arrForEx);
