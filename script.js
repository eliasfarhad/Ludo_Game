var player1 = "Farhad";
var player2 = "Jen";

function setName() {
//    player1 = prompt("Please enter the name of Player 1");
//    player2 = prompt("Please enter the name of Player 2");
    
    document.getElementById('player1').innerHTML = player1;
    document.getElementById('player2').innerHTML = player2;
}

setName();

var total1 = 0;
var total2 = 0;
var round = 1;

var code1 = 1;
var code2 = 2;
var temp1 = 0;
var temp2 = 0;

console.log("Click Play to roll the dice");


$(document).ready(function() {
    $('#play').click(function() {
        if ((total1 < 100) && (total2 < 100)) {
            document.getElementById('demo1').innerHTML = "Round " + round + ": ";
            round++;
            total1 = start(total1, player1, code1);
            document.getElementsByTagName("p").item(temp1-1).style.color = "Lime";
            document.getElementsByTagName("p").item(temp1-1).innerHTML = "*";
        }
    });
});

$(document).ready(function() {
    $('#play2').click(function() {
        if ((total1 < 100) && (total2 < 100)) {
           total2 = start(total2, player2, code2);
           document.getElementsByTagName("p").item(temp2-1).style.color = "Cyan";
           document.getElementsByTagName("p").item(temp2-1).innerHTML = "*";
        }
    });
});



function start(total, name, code) {
    document.getElementById('demo2').innerHTML = name + "'s turn_";
    
    if (code == 1) {
        temp1 = total;
    }
    else {
        temp2 = total;
    }
    
    var dice_value = 0;
    dice_value = diceRolling();
    total = total + dice_value;
    
    if (code == 1) {
        document.getElementsByTagName("p").item(total-1).style.color = "Lime";
    }
    else {
        document.getElementsByTagName("p").item(total-1).style.color = "Cyan";
    }
    
    if (total > 100) {
        document.getElementById('demo6').innerHTML = "Oops! Dice value need to be " + (100 - (total - dice_value)) + " to go HOME or less to Move the Token.";
        total = total - dice_value;
        document.getElementById('demo5').innerHTML = "You are in location: " + total;
        return total;
    }
    else if (total == 100) {
        document.getElementById('demo5').innerHTML = "You are in location: " + total;
        document.getElementById('demo6').innerHTML = "Congratulations! You are at Home!";
        document.getElementById('demo7').innerHTML = "Game Over!!" + name + " wins!!!";
        document.getElementsByTagName("p").item(total-1).innerHTML = name;
        return 100;
    }
    else {
        document.getElementById('demo5').innerHTML = "You are in location: " + total;
        document.getElementById('demo6').innerHTML = "_";
        document.getElementsByTagName("p").item(total-1).innerHTML = name;
    }
    return total;
}


var flag = true;

function diceRolling() {
    var dice_value = 0;
    var rand_num = 0;

    rand_num = Math.floor((Math.random() * 6) + 1);
    dice_value = rand_num;
    var round_total = dice_value;
    var count = 1;
    
    while ((dice_value == 6) && (count < 3)) {
        document.getElementById('demo3').innerHTML = "Dice Value = " + dice_value;
        window.alert("You had a Six! Close the alert box to Roll again.");
            
        rand_num = Math.floor((Math.random() * 6) + 1);
        dice_value = rand_num;
        round_total = round_total + dice_value;
        count++;

        if ((dice_value < 6) && (count == 3)) {
            return round_total;
        }

        if ((dice_value == 6) && (count == 3)) {
            document.getElementById('demo3').innerHTML = "Dice Value = " + dice_value;
            window.alert("Oh No! " + name + " had 3 Sixes in a row. Entire round spoiled. Roll again.");
            
            rand_num = Math.floor((Math.random() * 6) + 1);
            dice_value = rand_num;
            round_total = dice_value;
            count = 1;
        }
    }
    
    if (dice_value != 6) {
        document.getElementById('demo3').innerHTML = "Dice Value = " + dice_value;
        document.getElementById('demo4').innerHTML = "Total dice value in this round = " + round_total;
    }
    
    return round_total;
}

$(document).ready(function() {
    $('#play').mouseenter(function() {
        $('#play').css("background-color", "green");
    });
});

$(document).ready(function() {
    $('#play').mouseleave(function() {
        $('#play').css("background-color", "#8B0000");
    });
});

$(document).ready(function() {
    $('#play2').mouseenter(function() {
        $('#play2').css("background-color", "green");
    });
});

$(document).ready(function() {
    $('#play2').mouseleave(function() {
        $('#play2').css("background-color", "#8B0000");
    });
});