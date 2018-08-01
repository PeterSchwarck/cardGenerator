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
    document.querySelector("#daButton").addEventListener("click", generateCard);
    document.querySelector('#daButton').innerHTML = "<h1>" + 'Click Here' + '</h1>';
     generateCard();
};

function generateCard(){
    var randomSuit = Math.floor(Math.random() * 4);
    var randomNum = Math.floor(Math.random() * 13);
    
    
    var arrayNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    var arraySuit = ["diamond", "heart", "club", "spade"];
    
    
    var images = document.querySelector(".symbol");
    
    var h2s = document.querySelectorAll("h2");
    for (let i=0; i<h2s.length; i++) {
        h2s[i].innerHTML = arrayNumbers[randomNum];
    }
    document.querySelector(".mainDiv").classList.add(arraySuit[randomSuit]);
    return null;
}

