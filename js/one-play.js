		var w = $('.container').width();
		var main_value = 0,t_nop = 1;
		var diceAudio = null, pieceAudio = null;
		var currPos = 0;
		var currcolor = "";
		var NumOfPaw = "";
		var num = 0;
		var clicked = false;
		var currpawn = "";
		var allcolor = ["red", "blue", "green", "yellow"];
		var pawnOut = {red:0,blue:0,green:0,yellow:0};
		var paw = 0;
		
var positions = {
		redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
		bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
		greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
		yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
var onboard = {
		redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
		bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
		greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
		yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};	
		
		
		diceAudio = document.createElement('audio');
		diceAudio.setAttribute('src', 'diceAudio.wav');
		pieceAudio = document.createElement('audio');
		pieceAudio.setAttribute('src', 'pieceAudio.wav');
		
function HaveHover() {						
		var count = 0;
		var toKill = "";
		for (var i = 0; i < allcolor.length; i++) {
        for (var n = 1; n <= 4; n++) {
            var firstPawn = document.getElementById(allcolor[i] + "pawn" + n);
            var secondPawn=document.getElementById(currpawn);
				
				if (firstPawn.style.top==secondPawn.style.top&&firstPawn.style.left ==secondPawn.style.left&&currcolor!=allcolor[i]&&currPos+num<56) {	
                count++;
                toKill = allcolor[i] + "pawn" + n;
                return toKill;
            }
        }
    }
	
    return false;
}


function Stuck() {
var text = document.getElementById('player');
    if (onboard[currpawn] == 0||currPos+num>56) {
        if (DontHaveOtherFree()||currPos+num>56) {
			
			if (num == 6 && Haveroginpawns()){
				if(text.innerText == "red"){
					console.log("getting 6 for red players and user will select piece : "+text.innerText);
					setTimeout(function(){ triggeringchance(); }, 5000);
					return;
				}
					console.log("getting 6 for computer players and moving piece : "+text.innerText);
			for (var i = 1; i <=4; i++) {
				if (onboard[text.innerText + "pawn" + i] == 0 ){
				paw = i;
				console.log("moving piece no from origin is : "+paw);
				setTimeout(function(){ randomMove(text.innerText,paw); }, 5000);
				return;
			}
		}
	}
			for (var i = 1; i <=4; i++) {	
				if(onboard[text.innerText + "pawn" + i] == 1 &&  positions[text.innerText + "pawn" + i]+num<56){ 
					console.log("i is : "+i);
					paw = i;
					console.log("moving piece no from origin is : "+paw);
					setTimeout(function(){ console.log("after 4sec pawn enter in randomMove"); randomMove(text.innerText,paw); },5000);
					return;
				}
			}
		    
			clicked = false;
			setTimeout(function(){
			console.log("in stuck change player");
			changePlayer();
			},3000);
        }
    }
}

function DontHaveOtherFree() {
    var text = document.getElementById('player');
    for (var i = 1; i <=4; i++) {
        if (onboard[text.innerText + "pawn" + i] == 1 || positions[text.innerText + "pawn" + i]+num>=56) return false;	 
    }
	return true;
   
}

function Haveroginpawns(){
    var text = document.getElementById('player');
    for (var i = 1; i <=4; i++) {
        if (onboard[text.innerText + "pawn" + i] == 0 ){
			return true;
		}
    }
	return false;
   
}

	

function CheckForWinner() {
    if (pawnOut[currcolor] == 4) {
        var dice = document.getElementById("dice");
        var player = document.getElementById("player");
        var uselesstext1 = document.getElementById("uselesstext1");
        var uselesstext2 = document.getElementById("uselesstext2");
		var hide= document.getElementById("back");
        dice.innerText = "";
        dice.style.visibility = "hidden";
		hide.style.visibility = "hidden";
        uselesstext1.innerText = "";
        uselesstext2.innerText = "";
		alert("The Winner is the "+currcolor+" player");
        player.innerText = "The Winner is the "+currcolor+" player";
    }
}
	
function stepDown() {
    var doc = document.getElementById(currcolor + "pawn"+NumOfPaw);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr+ w/15).toFixed(0)+'px';
    currPos++;
}
function stepUp() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr- w/15).toFixed(0) + 'px';
    currPos++;
}
function stepLeft() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr- w/15).toFixed(0) + 'px';
    currPos++;
}
function stepRight() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr+ w/15).toFixed(0) + 'px';
    currPos++;
}

function stepDownImproved() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr+ w/15).toFixed(0)+'px';
    currPos++;
    doc.style.left = (w/1.875)+ 'px';
}

function stepUpImproved() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr- w/15).toFixed(0) + 'px';
    currPos++;
    doc.style.left = (w/2.5) + 'px';
}

function stepLeftImproved() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr- w/15).toFixed(0) + 'px';
    currPos++;
   doc.style.top = (w/1.875) + 'px';
}

function stepRightImproved() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left =(curr+ w/15).toFixed(0) + 'px';
    currPos++;
   doc.style.top = (w/2.5)+ 'px';
}



/*Pawn Path*/
var stepsRed = [];
var stepsYellow = [];
var stepsBlue =[];
var stepsGreen =[];
function pushSteps(value, steps, count) {
    for (i = 0; i < count; i++) steps.push(value);
}
//Red pawns path
pushSteps(stepDown,stepsRed,4);
pushSteps(stepRightImproved,stepsRed,6);
pushSteps(stepDown, stepsRed,2);

pushSteps(stepLeft, stepsRed,5);
pushSteps(stepDownImproved, stepsRed,6);
pushSteps(stepLeft, stepsRed,2);

pushSteps(stepUp, stepsRed,5);
pushSteps(stepLeftImproved, stepsRed,6);
pushSteps(stepUp, stepsRed,2);

pushSteps(stepRight, stepsRed,5);
pushSteps(stepUpImproved, stepsRed,6);
pushSteps(stepRight, stepsRed,1);
pushSteps(stepDown, stepsRed,6);


//Yellow pawns path

pushSteps(stepUp, stepsYellow,4);
pushSteps(stepLeftImproved, stepsYellow,6);
pushSteps(stepUp, stepsYellow,2);

pushSteps(stepRight, stepsYellow,5);
pushSteps(stepUpImproved, stepsYellow,6);
pushSteps(stepRight, stepsYellow,2);

pushSteps(stepDown, stepsYellow,5);
pushSteps(stepRightImproved, stepsYellow,6);
pushSteps(stepDown, stepsYellow,2);

pushSteps(stepLeft, stepsYellow,5);
pushSteps(stepDownImproved, stepsYellow,6);
pushSteps(stepLeft, stepsYellow,1);
pushSteps(stepUp, stepsYellow,6);


//Blue pawns path
pushSteps(stepLeft, stepsBlue,4);
pushSteps(stepDownImproved, stepsBlue,6);
pushSteps(stepLeft, stepsBlue,2);

pushSteps(stepUp, stepsBlue,5);
pushSteps(stepLeftImproved, stepsBlue,6);
pushSteps(stepUp, stepsBlue,2);

pushSteps(stepRight, stepsBlue,5);
pushSteps(stepUpImproved, stepsBlue,6);
pushSteps(stepRight, stepsBlue,2);

pushSteps(stepDown, stepsBlue,5);
pushSteps(stepRightImproved, stepsBlue,6);
pushSteps(stepDown, stepsBlue,1);
pushSteps(stepLeft, stepsBlue,6);

//Green pawns path
pushSteps(stepRight, stepsGreen,4);
pushSteps(stepUpImproved, stepsGreen,6);
pushSteps(stepRight, stepsGreen,2);

pushSteps(stepDown, stepsGreen,5);
pushSteps(stepRightImproved, stepsGreen,6);
pushSteps(stepDown, stepsGreen,2);

pushSteps(stepLeft, stepsGreen,5);
pushSteps(stepDownImproved, stepsGreen,6);
pushSteps(stepLeft, stepsGreen,2);

pushSteps(stepUp, stepsGreen,5);
pushSteps(stepLeftImproved, stepsGreen,6);
pushSteps(stepUp, stepsGreen,1);
pushSteps(stepRight, stepsGreen, 6);

/*Positioning Pawn To Original Position After Beat by Another Pawn*/
function ResetPawn(victim) {
    onboard[victim] = 0;
    positions[victim] = 0;
    var pawnToMove = document.getElementById(victim);
    switch (victim) {
        case "redpawn1": pawnToMove.style.top = w/4.21978021978 + "px"; pawnToMove.style.left = w/1.30030643514 + "px"; break;
        case "redpawn2": pawnToMove.style.top =  w/5.89351851852 + "px"; pawnToMove.style.left = w/1.42393736018 + "px"; break;
        case "redpawn3": pawnToMove.style.top = w/9.61538461538 + "px"; pawnToMove.style.left =  w/1.30030643514 + "px"; break;
        case "redpawn4": pawnToMove.style.top = w/5.89351851852+ "px"; pawnToMove.style.left =  w/1.19642857143 + "px"; break;
		
        case "bluepawn1": pawnToMove.style.top = w/1.2 + "px"; pawnToMove.style.left = w/1.30030643514 + "px"; break;
        case "bluepawn2": pawnToMove.style.top =w/1.30169491525 + "px"; pawnToMove.style.left = w/1.42393736018 + "px"; break;
        case "bluepawn3": pawnToMove.style.top = w/1.42750929368 + "px"; pawnToMove.style.left =  w/1.30030643514 + "px"; break;
        case "bluepawn4": pawnToMove.style.top =  w/1.30169491525 + "px"; pawnToMove.style.left = w/1.19642857143 + "px"; break;
		
        case "greenpawn1": pawnToMove.style.top = w/4.21978021978 + "px"; pawnToMove.style.left = w/5.90769230769 + "px"; break;
        case "greenpawn2": pawnToMove.style.top = w/5.89351851852 + "px"; pawnToMove.style.left =  w/4.21978021978+ "px"; break;
        case "greenpawn3": pawnToMove.style.top = w/9.61538461538 + "px"; pawnToMove.style.left =  w/5.90769230769 + "px"; break;
        case "greenpawn4": pawnToMove.style.top =  w/5.89351851852 + "px"; pawnToMove.style.left =  w/9.6 + "px"; break;
		
        case "yellowpawn1": pawnToMove.style.top = w/1.30169491525 + "px"; pawnToMove.style.left = w/9.6 + "px"; break;
        case "yellowpawn2": pawnToMove.style.top = w/1.30169491525 + "px"; pawnToMove.style.left =w/4.21978021978+ "px"; break;
        case "yellowpawn3": pawnToMove.style.top = w/1.42750929368 + "px"; pawnToMove.style.left =  w/5.90769230769 + "px"; break;
        case "yellowpawn4": pawnToMove.style.top = w/1.2 + "px"; pawnToMove.style.left =w/5.90769230769 + "px"; break;

    }
}


function changePlayer(){    
		var text = document.getElementById('player');
		var change1 = document.getElementById('player1-display-name');
		var change2 = document.getElementById('player2-display-name');
		var change3 = document.getElementById('player3-display-name');
		var change4 = document.getElementById('player4-display-name');
		$(".pawns").removeClass('pawnzindex');
		var hide= document.getElementById('hidden-wrapper');
		switch (text.innerText) {
			case "red":text.innerText = text.style.background = "blue";change1.style.color="black";change2.style.color="red";change3.style.color="black";change4.style.color="black"; $('.pawns-blue').addClass('pawnzindex'); $('#dice').trigger("click");hide.style.display="block"; break;
			case "blue":text.innerText = text.style.background = "yellow"; change1.style.color="black";change2.style.color="black";change3.style.color="red";change4.style.color="black";$('.pawns-yellow').addClass('pawnzindex'); $('#dice').trigger("click");hide.style.display="block"; break;
			case "yellow":text.innerText = text.style.background = "green";change1.style.color="black";change2.style.color="black";change3.style.color="black";change4.style.color="red";$('.pawns-green').addClass('pawnzindex'); $('#dice').trigger("click");hide.style.display="block"; break;
			case "green":text.innerText = text.style.background = "red";change1.style.color="red";change2.style.color="black";change3.style.color="black";change4.style.color="black";$('.pawns-red').addClass('pawnzindex');hide.style.display="none"; break;
		}	
}


var randomize = function() {
		var total = 0;
		total = Math.floor((Math.random() * 6) + 1);	
		return total;
	}
	
var roll = function() {		
		var shape = $('#shape');
		diceAudio.play();
		if (shape.hasClass('static')) {		  		
			$('#shape .plane').css('zIndex', '1');
			shape.removeClass('static');
			shape.addClass('cube');
			timer = setTimeout(function(){
				shape.removeClass('cube');
				shape.addClass('static');
				var rr =  $('#shape .plane').eq(6);
				//rr.css('zIndex', '2');
			}, 1000);	
		}
	}

function randomNum() {
    if (!clicked) {
		$('#dice').css({'display': 'none'});
		$('#back').css({'display': 'none'});
		$('#shape').css({'display': 'block'});
		roll();
        num = randomize();
        var dice = document.getElementById('dice');
        dice.style.backgroundImage = "url(images/d" + num + ".png)";
        clicked = true;
		setTimeout(function(){
		$('#dice').show();
		$('#back').show();
		$('#shape').hide();},1500);	
    }
	if (num != 6 && DontHaveOtherFree()) {
    var hide= document.getElementById('hidden-wrapper');
		hide.style.display="block";
		window.setTimeout(changePlayer,3000);
		clicked = false;
	}
	
	if (num == 6 && Haveroginpawns()){
		var text = document.getElementById('player');
		if(text.innerText == "red"){
			console.log("getting 6 for red players and user will select piece : "+text.innerText);
			setTimeout(function(){ triggeringchance(); }, 5000);
			return;
		}
		console.log("getting 6 for computer players and moving piece : "+text.innerText);
		for (var i = 1; i <=4; i++) {
			if (onboard[text.innerText + "pawn" + i] == 0 ){
				paw = i;
				console.log("moving piece no from origin is : "+paw);
				setTimeout(function(){ randomMove(text.innerText,paw); }, 5000);
				return;
			}
		}
	}
	
	setTimeout(function(){ triggeringchance(); }, 5000);
	return;
	//triggeringchance();
}

function triggeringchance(){
	var text = document.getElementById('player');
	console.log("ready to move piece "+text.innerText);
	
	switch(text.innerText){
		case "red":			
			break;
		case "blue":
			for (var i = 1; i <=4; i++){
				if (onboard[text.innerText + "pawn" + i] == 1 ){
					paw = i;
					console.log("moving piece blue and id is bluepawn : "+paw);
					randomMove("blue",paw);
					return;
				}
			}			
			break;
		case "yellow":
			for (var i = 1; i <=4; i++){
				if (onboard[text.innerText + "pawn" + i] == 1 ){
					paw = i;
					console.log("moving piece yellow and id is yellowpawn : "+paw);
					randomMove("yellow",paw);
					return;
				}
			}
			break;
			
		case "green":
			for (var i = 1; i <=4; i++){
				if (onboard[text.innerText + "pawn" + i] == 1 ){
					paw = i;
					console.log("moving piece green and id is greenpawn : "+paw);
					randomMove("green",paw);
					return;
				}
			}
			break;
		default:
			alert("wrong color");
			break;
	}
	}


function randomMove(Color, paw) {
    var text = document.getElementById('player');
    NumOfPaw = paw;
    currcolor = Color;
    currpawn = currcolor + "pawn" + NumOfPaw;
    currPos = positions[currpawn];
	if (num + currPos > 56) {
        if(clicked){Stuck();}
		return;
    }
    else {
        if (clicked) {
            var position = currPos;
            if (text.innerText == currcolor) {
                if (onboard[currpawn] === 1 || num === 6) {
					if(onboard[currpawn] === 2){ console.log("you clicked pawn status 2 not valid"); return; }
                    if (onboard[currpawn] === 0) {
                        var doc = document.getElementById(currpawn);
                        var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
                        switch (Color)
							{
								case "red":
                         		doc.style.left = (w/1.875) + 'px';   /*dice 6 Initial position */
                         		doc.style.top = (w/15) + "px";
								
                         		break;
 
                         		case "yellow":  
                         		doc.style.left = (w/2.5)+ 'px';
                         		doc.style.top = (w/1.15384615385).toFixed(0)+ "px";
								
                         		break;
	
                            	case "blue": 
                                doc.style.left = (w/1.15384615385).toFixed(0) + 'px';
                                doc.style.top = (w/1.875) + "px";
									
                                break;

                            	case "green": 
                                doc.style.left =(w/15) + 'px';
                                doc.style.top = (w/2.5) + "px";
									
                                break;
                        	 }
                        onboard[currpawn] = 1;
                    }
                    else {
                        switch (Color) {
                            case "red":
                                for (i = currPos; i < position + num; i++) {
                                    stepsRed[i]();
                                }
                                break;

                            case "yellow":
                                for (i = currPos; i < position + num; i++) {
                                    stepsYellow[i]();
                                }
                                break;

                            case "blue":
                                for (i = currPos; i < position + num; i++) {
                                    stepsBlue[i]();
                                }
                                break;

                            case "green":
                                for (i = currPos; i < position + num; i++) {
                                    stepsGreen[i]();
                                }
                                break;
                        }
                        positions[currpawn] = currPos;
                    }
                    num = 0;
                    clicked = false;
					var victim = HaveHover();
						if (victim != false) {
                        ResetPawn(victim);
						}
					if (currPos == 56) { pawnOut[currcolor]++; onboard[currpawn] = 2; positions[currpawn] = 0; };
					console.log("moving or increasing piece and call change player normal");
                    CheckForWinner();    
					var hide= document.getElementById('hidden-wrapper');
					hide.style.display="block";
					window.setTimeout(changePlayer,1500);
					
                }
                //else{ alert("in else "); }
            }
		}
    }
	
}
	
var getPlayer = function() {
		$('#playerModal').modal({backdrop:"static"});
		$('#player-name-btn').on('click',function() {
			for( var i = 1; i <= t_nop; i++ ) {
				if($('#player'+i).val().length == 0 ){
					return;
				}
				$('#player'+i+'-display-name').html($('#player'+i).val());
				$('#player'+i+'_dice').attr('data-name',$('#player'+i).val());
			}
			
			$('#playerModal').modal('hide');
		});
	}
