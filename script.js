const steps = document.getElementsByClassName("step");
const stepsContent = document.getElementsByClassName("step-content");
const doubleArrow = document.getElementsByTagName("i");
const stepWrapper = document.getElementsByClassName("steps");
console.log(typeof(stepsContent));
console.log(doubleArrow);
console.log(stepsContent);
console.log(stepWrapper);
var i;
var height=stepWrapper[0].offsetHeight;
console.log(height);
const toggle = (index) => {
   
    var x = stepsContent[index];
    var y = doubleArrow[index];
    var z = stepWrapper[0];
    

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

for(i=0;i<steps.length;i++){
    const count = i;
    steps[i].addEventListener("click",(event)=>{
        toggle(count);
    });
}

