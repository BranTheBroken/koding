var contentWrapper = document.getElementsByClassName("content-wrapper");
var options = document.getElementsByClassName("option");
var scoreBox = document.getElementsByClassName("score");
var scoreText = document.createElement("h3");
var review = document.createElement("h3");
var back = document.getElementsByClassName("back");
var ans = [1,5,7];
var i;
var score = 0;
contentWrapper[0].style.display = "flex";
var contentInd = -1;
const display = (index)=>{
    console.log(contentWrapper);
    
    if(index != contentWrapper.length -1){
    
    contentWrapper[index].style.display = "none";
    contentWrapper[index+1].style.display = "flex";
   }
   else{
    contentWrapper[index].style.display = "none";
    scoreBox[0].style.display = "block";
    var scoreNode = document.createTextNode("Score:"+score.toString());
    var node = document.createTextNode("");
    scoreText.appendChild(scoreNode);
    scoreBox[0].appendChild(scoreText);
    back[0].style.display = "block";
    switch(score){
        case 0:
            node.nodeValue = "TRY AGAIN!"
            break;
        case 1:
            node.nodeValue = "YOU CAN DO BETTER!";
            break;
        case 2:
            node.nodeValue = "GOOD WORK!";
            break;
        case 3:
            node.nodeValue = "EXCELLENT!";
            break;
    }
    review.appendChild(node);
    scoreBox[0].appendChild(review);
   }
}

for(i=0;i<options.length;i++){
     const k =i;    
    
    options[i].addEventListener("click",(event)=>{
    
        contentInd++;
        options[k-contentInd].className = "selected";
        if(ans[contentInd]==k)
        score++;
        setTimeout(display,1000,contentInd);
 
    });
}
