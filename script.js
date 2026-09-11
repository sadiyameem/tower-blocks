for(var i=0;i<20;i++){
    document.getElementById("box").innerHTML=document.getElementById("box").innerHTML+
    "<div><div> class='1'><div><div> class='2'><div><div> class='3'><div><div> class='4'><div><div> class='5'><div><div> class='6'><div><div> class='7'><div><div> class='8'><div><div> class='9'><div><div> class='10'></div></div>"
}

var x= 10;
var length = 10;
var score = 0;
var s= 0;

function start() {
    fill_box(x,length);
    moveBy(x,length,s);
    document.getElementById("start").removeAttribute("onclick");
}

function fill_box(row,length) {
    for(var i=0;i<length;i++) {
        document.getElementsByClassName(row.toString())[i].style.backgroundColor='firebrick';
    }
}

var id;
var turn = 'forward';
function move(row,length,s) {
    id=setInterval(() => {
        if(length<20 && turn=='forward'){
            document.getElementsByClassName(row.toString())[length].style.backgroundColor='firebrick';
            length++;
            document.getElementsByClassName(row.toString())[s].style.backgroundColor='';
            s++;
        }
        else if (length==20) {
            length=s-1
            s=19;
            turn='backward';
        }

        else if(length<20 && turn=='backward'){
            document.getElementsByClassName(row.toString())[length].style.backgroundColor='firebrick';
            length--;
            document.getElementsByClassName(row.toString())[s].style.backgroundColor='';
            s--;
            if(length==-1){
                length=s+1;
                s=0;
                turn='forward';
            }
        }
    }, 100);
}

document.addEventListerner("keypress", event => {
    if(event.key=='w') {
        x=x-1;
        if(x==0) {
            alert("You Won the Game!");
            window.location.reload();
        }
        s=0;
        turn='forward';
        clearInterval(id);
        cutting_extra(x-1);
        start();
    }
})

function cutting_extra(block) {
    var sum = 0;
    if(block==10) {
        sun=10;
    }
    else {
        for (var i=0; i<=19; i++) {
            elem1 = document.getElementsByClassName(block.toString())[i];
            elem2 = document.getElementsByClassName((block+1).toString())[i];
        }

        if(window.getComputedStyle(elem1).getPropertyValue("background-color")!=window.getComputedStyle(elem2).getPropertyValue("background-color")){
            if(window.getComputedStyle(elem2).getPropertyValue("background-color")=='rgba(0,0,0,0') {
                elem1.style.backgroundColor=elem2.style.backgroundColor;
            }
        }
        else {
            if(window.getComputedStyle(elem2).getPropertyValue("background-color")!='rgba(0,0,0,0)')
                sun++;
        }
    }
}

length=sum;
if(length!=0) {
    score=score+10;
    document.getElementById("scr").innerHTML=score;
}
else {
    setTimeout(() => {
        alert("Game Over !! Your Score is :- "+score);
        window.location.reload();
    }, 100);
}