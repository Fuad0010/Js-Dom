
let listsDiv=document.getElementById("listsDiv");
let btnCombine=document.getElementById("btnCombine");
let list1=document.getElementById("list1");
let first=document.getElementById("first");  
let second=document.getElementById("second");  


function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

var array1 = ["Vijendra","Singh"];
var array2 = ["Singh", "Shakya"];
    
var array3 = arrayUnique(array1.concat(array2));

console.log(first);