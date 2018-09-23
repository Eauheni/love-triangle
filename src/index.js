/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 
  var triangles = 0;
    for (var i = 0; i < preferences.length-2; i++){
    
    var firstSpichonee = preferences [i];
    var secondSpichonee = preferences [firstSpichonee-1];
    var thirdSpichonee = preferences [secondSpichonee-1];
    if (thirdSpichonee == i+1 && firstSpichonee > i+1 && secondSpichonee > i+1){
       triangles++;
    }
  }
  return triangles;
  
};

