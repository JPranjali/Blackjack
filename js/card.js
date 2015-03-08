var deal = function() {
  card = Math.floor(Math.random()*52+1);
  return card;
};

// This function takes a card as a parameter and returns the value
// of that card
var message=document.getElementById("message");
var getValue = function(card) {
  // if its a face card, number should be set to 10        
    if( card%13 > 10 || card % 13 ==0 ) {
        return 10;
    }
  // What if it's an ace?
    else if(card%13 == 1){
        return 11;
    }
  // Otherwise, we just want its number value
  else {
        return card % 13;
    }
}
        
// Score the hand
function score() {
  return getValue(card1) + getValue(card2);
}

var x; var playerScore=[]; var dealerScore = [];
var totalPlayerScore; var totalDealerScore;
	
document.getElementById("start").onclick =
function startGame(){
	x=0;
	document.getElementById("start").disabled = true;
	var c =document.getElementById('s1')
	rotate_container(c);
	setTimeout(m1,600);
				
	}
function m1(){
	var dealercard1=deal();
	dealerScore[0]=getValue(dealercard1);
	console.log(dealerScore[0]);
	document.getElementById('s1').src = 'images/'+dealercard1+'.png';
	setTimeout(next, 1000);
	}
function next(){
	x=400;
	var d =document.getElementById('s2')
	rotate_container(d);
	setTimeout(m2,600);
	}
function m2(){
	var playercard1 = deal();
	playerScore[0]=getValue(playercard1);
	console.log(playerScore[0]);
	document.getElementById('s2').src ='images/'+ playercard1+'.png';
	setTimeout(next1, 1000);
	}
			
function next1(){
	x=30;
	var f =document.getElementById('s4')
	rotate_container(f);
	document.getElementById('s4').src = 'images/deck.png';
	setTimeout(next2, 1000);
	}
function next2(){
	x=430;
	var e =document.getElementById('s3')
	rotate_container(e);
	setTimeout(m3,600);
	}
function m3(){
	var playercard2 = deal();
	playerScore[1]=getValue(playercard2);
	console.log(playerScore[0]);
	document.getElementById('s3').src = 'images/'+playercard2+'.png';
	setTimeout(change, 1000);
	}
var d=430;var j=4; var index=1;

document.getElementById("hit").onclick =
function hit(){
	d=d+30; j=j+1; index=index+1;
	x=d;
	var e =document.getElementById('s'+j);
	rotate_container(e);
	setTimeout(m4,600);

}
function m4(){
	var card3 = deal();
	playerScore[index]=getValue(card3);
	document.getElementById('s'+j).src ='images/'+ card3+'.png';
	//setTimeout(change, 1000);
	setTimeout(calculatePlayerScore(),800);
	

}

document.getElementById("stay").onclick =
function stay(){
	var c=document.getElementById('s4');
	x=40;
	rotate_container(c);
	var dealercard2=deal();
	dealerScore[1]=getValue(dealercard2);
	console.log(dealerScore[1]);
	document.getElementById('s4').src ='images/'+ dealercard2+'.png';
	calculatePlayerScore();
	calculateDealerScore();
}

document.getElementById("reset").onclick =
function reset(){
	location.reload();
	console.log("rel");
	//startGame();
	console.log("str");

}
function calculatePlayerScore(){
	var totalPlayerCards=playerScore.length;
	totalPlayerScore=0;
	for(i=0;i<totalPlayerCards;i++){
		totalPlayerScore=totalPlayerScore+playerScore[i];
	}
	console.log(totalPlayerScore);
	if(totalPlayerScore>21){
		message.innerHTML="Player, you are busted..";
		document.getElementById("hit").disabled = true;
		document.getElementById("stay").disabled = true;
	}
	}
function calculateDealerScore(){
	//var totalPlayerScore;
	totalDealerScore=dealerScore[0]+dealerScore[1];
	console.log(totalDealerScore);
	determineWinner();
}
function determineWinner(){
document.getElementById("hit").disabled = true;
document.getElementById("stay").disabled = true;
if(totalDealerScore>totalPlayerScore)
	message.innerHTML="Oops..Player losses...";
else
	if(totalPlayerScore>21)
		message.innerHTML="You are busted player..";
	else
		message.innerHTML="Congratulations Player, you win!!!";

}

	function rotate_container(container) {
 // var container = document.getElementById('stack');
  t = snabbt(container, {
  position: [307+x, 200, 0],
  easing: 'ease',
	//});
 // t.then({
    rotation: [0, Math.PI, 0],
    duration: 700,
    perspective: 2000,
    loop: 1
  });
//	change();
setTimeout(change, 900);
	
}

function change(){
	
   // console.log("0");
}
	

