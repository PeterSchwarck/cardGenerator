/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){
    console.log('Hello Rigo from the console!');
    document.querySelector('.error').style.display = "none";
};

var randomSuit = Math.floor(Math.random() * 4);
var randomNum = Math.floor(Math.random() * 13);


var arrayNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var arraySuit = ["https://www.wpclipart.com/signs_symbol/assorted/playing_card_icons/card_diamond.png", "https://www.homemade-gifts-made-easy.com/image-files/homemade-valentine-card-heart-template-800x524.gif", 
"https://cdn3.iconfinder.com/data/icons/basic-mobile-part-2/512/clubs-256.png", "https://image.freepik.com/free-icon/spades-symbol_318-40683.jpg"
];
//var arrayColor = ['#FF0000', '#000000'];


var images = document.getElementsByTagName("img");
//console.log(images.length);
for (let i=0; i<images.length; i++) {
    images[i].src = arraySuit[randomSuit]; 

    }
    
if (randomSuit===2 || randomSuit ===3) {
    console.log("black");
    } else 
    {
    console.log("red");
    }

var h2s = document.getElementsByTagName("h2");
for (let i=0; i<h2s.length; i++) {
    h2s[i].innerHTML = arrayNumbers[randomNum];
}

//for (let x=0; x<100; x++) {
    console.log(Math.floor(Math.random() * 13));
//}
//console.log(randomSuit);
//console.log(randomNum);