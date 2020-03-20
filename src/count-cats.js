module.exports = function countCats(matrix) {
  let count = 0;
  matrix.map(function(elem){
    elem.forEach(function(elem){
      if(/^\^\^$/.test(elem)){
        count++;
      }
    });
  });
  return count;
};
