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
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qa84WxKG_/model.json', modelReady); 

}
function modelReady(){ 
    classifier.classify( gotResults);
   }
   function gotResults(error,results){
   }