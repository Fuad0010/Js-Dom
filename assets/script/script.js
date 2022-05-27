
let listsDiv=document.getElementById("listsDiv");
let btn=document.getElementById("btn");
let list1=document.getElementsByClassName("list1");
let liSecond=document.getElementsByClassName("second");  
let liFirst=document.getElementsByClassName("first");

btn.onclick=_=>{
    let arr1=[]
    let arr2=[]
    for (let i = 0; i < liFirst.length; i++) {
        let text1=liFirst[i].childNodes[0].nodeValue;  
        arr1.push(text1);
      }
    
      for (let i = 0; i < liSecond.length; i++) {
        let text2=liSecond[i].childNodes[0].nodeValue;  
        arr1.push(text2);
      }
      arr2= arr1.filter((item,index) => arr1.indexOf(item) ===index);
      console.log(arr2);
}

    