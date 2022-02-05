//click on start

var playing=false;
var score;
var remain;
var action;
var ans;

document.getElementById("startreset").onclick=function(){
    //if v r playing
    if(playing==true){
        location.reload()
    }else{

        playing=true;
        score=0;//set score to 0
        document.getElementById("scorevalue").innerHTML=score;
        document.getElementById("time").style.display="block";//display countdown
        //change button to reset
        remain=30;
        document.getElementById("remain").innerHTML=remain
        document.getElementById("gameover").style.display="none";
        document.getElementById("startreset").innerHTML="Reset Game"
        countdown();
        generate();     
    }

}
for(let i=1;i<5;i++){
    document.getElementById("box"+
    i).onclick=function(){
        if(playing==true){
            if(this.innerHTML==ans){
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                document.getElementById("wrong").style.display="none";
                document.getElementById("correct").style.display="block";
                setTimeout(function(){
                    document.getElementById("correct").style.display="none";
                },1000);
                generate();
    
            }else{
                document.getElementById("correct").style.display="none";
                document.getElementById("wrong").style.display="block";
                setTimeout(function(){
                    document.getElementById("wrong").style.display="none";
                },1000);
            }
        }
    }
}
function countdown(){
    action=setInterval(function(){
        remain -=1;
        document.getElementById("remain").innerHTML=remain;
        if(remain == 0){
            stop();
         document.getElementById("gameover").style.display="block";   
         document.getElementById("gameover").innerHTML="<p> game over</p><p> Your score is " + score + ".</p>" ;   
         document.getElementById("time").style.display="none";
         document.getElementById("correct").style.display="none";
         document.getElementById("wrong").style.display="none";
         playing == false;
         document.getElementById("startreset").innerHTML="Start Game"
        }
    },1000)
    
}
function stop(){
    clearInterval(action);

}
function generate(){

    var x=Math.round( 20*Math.random())+1;
    var y=Math.round( 18*Math.random())+1;
    ans= x*y;
    document.getElementById("question").innerHTML=x + "x" + y;
    
     var positon= Math.round( Math.random()*3)+1;
     document.getElementById("box"+ positon).innerHTML= ans;
     var answers=[ans]
     // wrong answer filling
       var wrans
for( let i=1; i<5; i++){
    if(i!==positon){
        do{
            wrans=(Math.round( 19*Math.random())+1)*(Math.round( 18*Math.random())+1)
        } while(answers.indexOf(wrans)>-1)
         
        document.getElementById("box"+i).innerHTML=wrans;
        answers.push(wrans);
    }
}

}