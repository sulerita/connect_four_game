function selCol(w){
    // console.log(w);
    i = document.getElementsByClassName(w);
    // console.log(i);
    for(var x=0; x < i.length; x++){
        // console.log(i[x]);
        i[x].style.opacity=1;
    }
}
function leaveCol(w){
    // console.log(w);
    i = document.getElementsByClassName(w);
    // console.log(i);
    for(var x=0; x < i.length; x++){
        // console.log(i[x]);
        i[x].style.opacity=0.6;
    }
}
var board = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
];
var players ={
    'p1': 'red',
    'p2': 'green',
    'turn':true
};
function changeTurn(info){
    document.getElementById(info.played).style.backgroundColor = "white";
    document.getElementById(info.nextPlayer).style.backgroundColor = info.nextPlayer;
}
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

          changeTurn(turnInfo);
          
          break;

          
        }
        // column.push(matrix[1][col]);
    }
    
    console.log(board);
    // return column;

}