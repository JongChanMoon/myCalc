var para = document.createElement("p");
var node = document.createTextNode("new");

var element = document.getElementById("div1");
for(var i=0;i<10;i++){
  for(var m=0;m<i;m++){
   
    var node = document.createTextNode("new");
    para.appendChild(node);
    element.appendChild(para);
  }
    para = document.createElement("p");
}
