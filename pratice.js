

var randnumber=Math.random()*6;
randnumber=Math.floor(randnumber)+1;


var source="images.jpg/d"+randnumber+".png";

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",source);





var randnumber2=Math.random()*6;
randnumber2=Math.floor(randnumber2)+1;

var source2="images.jpg/d"+randnumber2+".png";

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",source2);



if(randnumber>randnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 🚩🚩🚩";
}
else if(randnumber<randnumber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩🚩🚩";
}
else{
   document.querySelector("h1").innerHTML="Game was drawn!!!!";
}


