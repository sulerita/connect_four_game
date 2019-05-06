//function to highlight a column
function selCol(w){
    // console.log(w);
    i = document.getElementsByClassName(w);
    // console.log(i);
    for(var x=0; x < i.length; x++){
        // console.log(i[x]);
        i[x].style.opacity=1;
    }
}

//function to release column selection
function leaveCol(w){
    // console.log(w);
    i = document.getElementsByClassName(w);
    // console.log(i);
    for(var x=0; x < i.length; x++){
        // console.log(i[x]);
        i[x].style.opacity=0.6;
    }
}

//board layout for the connect four game
var board = null;

var emptyBoardDOM = null;

//object to hold the colours of players and store players turn
var players ={
    'p1': 'red',
    'p2': 'green',
    'turn':true
};


//function responsible for changing the turn of players by toggling the colours of the players
function changeTurn(info){
    document.getElementById(info.played).style.backgroundColor = "white";
    document.getElementById(info.nextPlayer).style.backgroundColor = info.nextPlayer;
}
function initializeGame(){
    emptyBoardDOM = document.getElementById('board').cloneNode(true);
    board = resetBoard();

}
function resetBoard(){
    return [
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
    ];
}

//function responsible for placing the colours in the tiles once there is a double click and 
//switches to the next player
function boardDblClick(col){
    played = '';
    if(players.turn){
        // alert("It is your turn GREEN!!");
        
        turnInfo = {
                        nextPlayer: players.p2,
                        played: players.p1,
                    };
    }
    else{
        // alert("It is your turn RED!!");
        turnInfo = {
            nextPlayer: players.p1,
            played: players.p2,
        };
    }

    players.turn = !(players.turn);

    // console.log(col);
    var strLocate = parseInt(col[3]) - 1; //or .substr(-1,3);
    // console.log(strLocate);
    var colElements = document.getElementsByClassName(col);
    
    // var column =[];
    console.log(board);
    for(i=colElements.length - 1; i >= 0; i--){

        if(board[i][strLocate] === ''){
            console.log(board[i][strLocate]);
            console.log(i)
          colElements[i].style.backgroundColor = turnInfo.played; 
          board[i][strLocate] = turnInfo.played;

          //check if there is a winner
          var winCheck = checkWinner();
          if(winCheck !== null){
              console.log("Winner is "+winCheck);

              board = resetBoard();
              document.getElementById('board').innerHTML = emptyBoardDOM.innerHTML;
          }
        

          changeTurn(turnInfo);
          
          break;
          
        }
        // column.push(matrix[1][col]);
    }
    
    //console.log(board);
    // return column;
}

function checkWinner(){
    //function performs all checks to search for a winner
    var winner = null;

    //perform horinzontal check
    winner = checkHorinzontal();
    if (winner === null){
        //perform vertical check
        winner = checkVertical();
        
        if(winner === null){

            //perform diagonal check
        }
       
    }

    

    //return result
    return winner;
}
//Game logic
function checkHorinzontal(){
    /*function checks for win on each row of the board and returns colour that 
     satisfy 4 consecutive colours in a row else it returns null*/
    var win = null;
    for(var i = 0; i < board.length; i++){
        var row = board[i];
        var concat = row.join();
        if(concat.includes("green,green,green,green")){
            win = players.p2;
            break;
        }
        else if(concat.includes("red,red,red,red")) {
            win = players.p1;
            break;
        } 
    }
    return win; //no player has won
}

function checkVertical(){
   /*function checks for win on each column of the board and returns colour that 
    satisfy 4 consecutive colours in a column else it returns null */
    var win = null;
    var nCols = board[0].length; //number of columns
    for( var c = 0; c < nCols; c++){
        //loop through columns
        var col = [];
        for(var r = 0; r < board.length; r++){
            //loop through the rows
            col.push(board[r][c]);
            var concat = col.join();
        }
        if(concat.includes("green,green,green,green")){
            win = players.p2;
            break;
        }
        else if(concat.includes("red,red,red,red")) {
            win = players.p1;
            break;
        } 
    } 
    return win; 
}
function resetFunc(){
    var board = [
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
    ];
    return board  
}