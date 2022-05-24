
let listsDiv=document.getElementById("listsDiv");
let btnCombine=document.getElementById("btnCombine");
let list1=document.getElementById("list1");


btnCombine.onclick=function () {
    var result = [];
    for (var i = 0; i < first.length; i++) {
      for (var j = 0; j < second.length; j++) {
        if (first[i] === second[j]) {
          result.push(first[i]);
        }
      }
    }
    console.log(result);
}
