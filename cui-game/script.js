const keydown1=new Audio("./sounds/keydown1.mp3");
const keydown2=new Audio("./sounds/keydown2.mp3");
document.oncontextmenu=()=>{
    return false;
}
document.addEventListener("keyup",()=>{
    document.querySelector("#txt-cursor").classList.remove("active");
})
document.addEventListener("keydown",(e)=>{
    document.querySelector("#txt-cursor").classList.add("active");
    if(e.keyCode===48){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("♥");return true}
        input("0")
    }
    if(e.keyCode===49){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("!");return true}
        input("1")
    }
    if(e.keyCode===50){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("\"");return true}
        input("2")
    }
    if(e.keyCode===51){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("#");return true}
        input("3")
    }
    if(e.keyCode===52){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("$");return true}
        input("4")
    }
    if(e.keyCode===53){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("%");return true}
        input("5")
    }
    if(e.keyCode===54){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("&");return true}
        input("6")
    }
    if(e.keyCode===55){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("'");return true}
        input("7")
    }
    if(e.keyCode===56){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("(");return true}
        input("8")
    }
    if(e.keyCode===57){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input(")");return true}
        input("9")
    }
    if(e.keyCode===189){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("=");return true}
        input("-")
    }
    if(e.keyCode===222){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("~");return true}
        input("^")
    }
    if(e.keyCode===220){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("|");return true}
        input("\\")
    }
    if(e.keyCode===65){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("A");return true}
        input("a")
    }
    if(e.keyCode===66){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("B");return true}
        input("b")
    }
    if(e.keyCode===67){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("C");return true}
        input("c")
    }
    if(e.keyCode===68){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("D");return true}
        input("d")
    }
    if(e.keyCode===69){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("E");return true}
        input("e")
    }
    if(e.keyCode===70){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("F");return true}
        input("f")
    }
    if(e.keyCode===71){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("G");return true}
        input("g")
    }
    if(e.keyCode===72){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("H");return true}
        input("h")
    }
    if(e.keyCode===73){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("I");return true}
        input("i")
    }
    if(e.keyCode===74){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("J");return true}
        input("j")
    }
    if(e.keyCode===75){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("K");return true}
        input("k")
    }
    if(e.keyCode===76){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("L");return true}
        input("l")
    }
    if(e.keyCode===77){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("M");return true}
        input("m")
    }
    if(e.keyCode===78){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("N");return true}
        input("n")
    }
    if(e.keyCode===79){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("O");return true}
        input("o")
    }
    if(e.keyCode===80){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("P");return true}
        input("p")
    }
    if(e.keyCode===81){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("Q");return true}
        input("q")
    }
    if(e.keyCode===82){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("R");return true}
        input("r")
    }
    if(e.keyCode===83){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("S");return true}
        input("s")
    }
    if(e.keyCode===84){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("T");return true}
        input("t")
    }
    if(e.keyCode===85){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("U");return true}
        input("u")
    }
    if(e.keyCode===86){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("V");return true}
        input("v")
    }
    if(e.keyCode===87){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("W");return true}
        input("w")
    }
    if(e.keyCode===88){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("X");return true}
        input("x")
    }
    if(e.keyCode===89){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("Y");return true}
        input("y")
    }
    if(e.keyCode===90){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("Z");return true}
        input("z")
    }
    if(e.keyCode===32){
        keydown1.currentTime=0;
        keydown1.play();
        input(" ")
    }
    if(e.keyCode===192){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("`");return true}
        input("@")
    }
    if(e.keyCode===219){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("{");return true}
        input("[")
    }
    if(e.keyCode===187){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("+");return true}
        input(";")
    }
    if(e.keyCode===186){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("*");return true}
        input(":")
    }
    if(e.keyCode===221){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("}");return true}
        input("]")
    }
    if(e.keyCode===190){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input(">");return true}
        input(".")
    }
    if(e.keyCode===188){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("<");return true}
        input(",")
    }
    if(e.keyCode===191){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("?");return true}
        input("/")
    }
    if(e.keyCode===226){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.shiftKey){input("_");return true}
        input("\\")
    }
    if(e.keyCode===13){
        keydown2.currentTime=0;
        keydown2.play();
        runcmd(linetxt.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;"));
    }
    // BackSpace
    if(e.keyCode===8){
        keydown1.currentTime=0;
        keydown1.play();
        if(e.ctrlKey&&linetxt!==""){
            var flag=true;
            while(flag){
                linetxt=linetxt.slice(0,(slct_line-1))+linetxt.slice(slct_line);
                slct_line-=1;
                if(linetxt[slct_line-2]===" "||slct_line===0){
                    flag=false;
                    document.querySelector(".cmd-line").innerHTML=`${linetxt.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;")}`;
                }
            }
        }
        input("backspace");
    }
    // Arrow Left
    if(e.keyCode===37){
        if(slct_line>0){
            slct_line-=1;
        }
    }
    if(e.keyCode===39){
        if(slct_line<linetxt.length){
            slct_line++;
        }
    }
})

function input(key){
    if(key==="backspace"){
        if(linetxt!==""&&slct_line!==0){
            linetxt=linetxt.slice(0,(slct_line-1))+linetxt.slice(slct_line);
            slct_line-=1;
            document.querySelector(".cmd-line").innerHTML=`${linetxt.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;")}`;
        }
    }else{
        linetxt=linetxt.slice(0,slct_line)+key+linetxt.slice(slct_line);
        slct_line++;
        document.querySelector(".cmd-line").innerHTML=`${linetxt.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;")}`;
    }
}
const cnsl=document.querySelector("#inputs");
const txtcrsr=document.querySelector("#txt-cursor");

let slct_line=0;
let linetxt="";

window.addEventListener("load",()=>{
    addtxt("コマンドを入力してください...");
    addprmpt();
    setInterval(() => {
        txtcrsr.style.top=`${window.pageYOffset+document.querySelector(".cmd-line").getBoundingClientRect().top+20}px`;
        txtcrsr.style.left=`${30+10*slct_line}px`;
    }, 1);
})
function addtxt(s){
    cnsl.innerHTML+=`<div class="plane-txt">${s}</div><br>`;
}
function addprmpt(){
    cnsl.innerHTML+=`<div class="cmd-line"></div>`;
}
let holdingcmd="";
function runcmd(s){
    console.log(s);



    addtxt(`&gt;&nbsp${s}`);
    linetxt="";
    slct_line=0;
    document.querySelector(".cmd-line").remove();


    if(holdingcmd!==""){
        switch(holdingcmd){
            case "profile":
                if(s==="0"){
                    addtxt("<span style='color: #ff0000'>現実見ろks</span>");
                }
                break;
        }
        holdingcmd="";
    }else{

        let cmd=String(s).split(" ");
        switch(cmd[0]){
            case "settings":
                if(cmd.length===1){
                    addtxt("<div>settings</div><ul><li>sound&nbsp;音量(0~100%)</ul>")
                }else{
                    if(cmd[1]==="sound"){
                        if(cmd[2]===undefined||cmd[2]<0||cmd[2]>100){
                            addtxt("コマンドが間違っています");
                        }else{
                            keydown1.volume=cmd[2]/100;
                            keydown2.volume=cmd[2]/100;
                        }
                    }
                }
                break;
            case "profile":
                addtxt("<div>プロファイル</div><ul><li>0:新しく作る</li></ul>");
                holdingcmd="profile";
                break;
            default:
                addtxt(`コマンド&nbsp;'${cmd[0]}'&nbsp;は実行できません`);
                break;
        }
    }




    addprmpt();
}