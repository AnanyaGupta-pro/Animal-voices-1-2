var cow=0
var tiger=0
var lion=0
var crow=0
var duck=0
var wolf=0
var sheep=0
var horse=0
var frog=0
var elephant=0
var cat=0

function start(){
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qa84WxKG_/model.json', modelReady); 

}
function modelReady(){ 
    classifier.classify( gotResults);
   }
   function gotResults(error,results){
       if (error){
           console.error(error)
       }
else{
console.log(results)
random_number_r=Math.floor(Math.random()*255)+1;
random_number_g=Math.floor(Math.random()*255)+1;
random_number_b=Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML="Detected voice is of -"+results[0].label;
document.getElementById("result_count").innerHTML="Detected Cow -"+cow+" Detected Tiger-"+tiger+" Dtected Lion -"+lion+" Detected Crow-"+crow+" Detected Duck-"+duck+" Detected Wolf-"+wolf+" Detcted Sheep-"+sheep+" Detected Horse-"+horse+" Detected Frog-"+frog+" Detected Elephant-"+elephant+" Detected Cat-"+cat;

document.getElementById("result_label").style.color=
"rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

document.getElementById("result_count").style.color=
"rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

img=document.getElementById("animals");

if(results[0].label=="cow"){
  img.src="cow.png";
  cow=cow+1;
}
else if(results[0].label=="tiger"){
    img.src="tiger.jpeg";
    tiger=tiger+1;
  }
  else if(results[0].label=="lion"){
    img.src="lion.jpeg";
   lion=lion+1;
  }
  else if(results[0].label=="crow"){
    img.src="crow.jpeg";
    crow=crow+1;
  }
  else if(results[0].label=="duck"){
    img.src="duck.jpeg";
    duck=duck+1;
  }
  else if(results[0].label=="wolf"){
    img.src="wolf.jpeg";
    wolf=wolf+1;
  }
  else if(results[0].label=="sheep"){
    img.src="sheep.jpeg";
    sheep=sheep+1;
  }
  else if(results[0].label=="horse"){
    img.src="horse.jpeg";
    horse=horse+1;
  }
  else if(results[0].label=="frog"){
    img.src="frog.gif";
    frog=frog+1;
  }
  else if(results[0].label=="elephant"){
    img.src="elephant.jpeg";
    elephant=elephant+1;
  }
  else if(results[0].label=="cat"){
    img.src="cat.jpeg";
    cat=cat+1;
  }
  else{
      img.src="default.gif";
  }

}

   }