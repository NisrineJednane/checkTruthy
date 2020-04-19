function tCheck(col, pre) {
  return col.every(function(x){
   return x.hasOwnProperty(pre) && Boolean(x[pre]);
  });
}
