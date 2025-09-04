let turn ='x';
let title = document.querySelector('.title');
let square =[];
function turnof(id)
{
let t = document.getElementById(id);
    if(turn==='x' && t.innerHTML =='')
{
    t.innerHTML = 'X';
    turn ='o';
    title.innerHTML = 'turn of O';
}
else if(turn ==='o'&& t.innerHTML=='')
{
t.innerHTML ='O';
turn ='x';
title.innerHTML = 'turn of X'
}
win();

}





function rel(n1,n2,n3)
{
title.innerHTML = `${square[n1]} Winner`;
document.getElementById('b'+n1).style.background ='#000';
document.getElementById('b'+n2).style.background ='#000';
document.getElementById('b'+n3).style.background ='#000';
setInterval(function(){title.innerHTML += '.'},1000);
setTimeout(function(){location.reload()},4000)

}


function win(){
for(let i = 1; i < 10 ; i++)
{
   square[i] = document.getElementById('b' + i).innerHTML;
}
if(square[1]==square[2]&&square[2]==square[3] && square[1]!='')
{
rel(1,2,3);
console.log('Done');
}
else if (square[4] == square[5] && square[5] == square[6] && square[5] != '')
{
rel(4,5,6);
}
else if (square[7] == square[8] && square[8] == square[9] && square[9] != '')
{
rel(7,8,9);
}
else if (square[1] == square[4] && square[4] == square[7] && square[7] != '')
{
rel(1,4,7);
}
else if (square[2] == square[5] && square[5] == square[8] && square[8] != '')
{
rel(2,5,8);
}
else if (square[3] == square[6] && square[6] == square[9] && square[9] != '')
{
rel(3,6,9);
}
else if (square[1] == square[5] && square[5] == square[9] && square[9] != '')
{
rel(1,5,9)
}
else if (square[3] == square[5] && square[5] == square[7] && square[7] != '')
{
rel(3,5,7);
}

}