const ele = document.getElementsByClassName("ele");
const eleContent = document.getElementsByClassName("ele-content");
const doubleArrow = document.getElementsByTagName("i");
const content = document.getElementsByClassName("content");
console.log(typeof(eleContent));
console.log(doubleArrow);
console.log(eleContent);
console.log(content);
var i;
var height=content[0].offsetHeight;
console.log(height);
const toggle = (index) => {
   
    var x = eleContent[index];
    var y = doubleArrow[index+3];
    var z = content[0];
    

    if(x.style.display === ""){
        x.style.display = "block";
        y.className = "fa fa-angle-double-down";
    
         height+=240;
       
        console.log(1);
    }   
    else{
        x.style.display = "";
        y.className = "fa fa-angle-double-right";
        console.log(0);
         height-=240;
    }
    z.style.height = height + "px";
};

for(i=0;i<ele.length;i++){
    const count = i;
    ele[i].addEventListener("click",(event)=>{
        toggle(count);
    });
}

