var likes1=9;
var likes2=12;
var likes3=9;
var likesPost1=document.querySelector(".posthead1 p");
var likesPost2=document.querySelector(".posthead2 p");
var likesPost3=document.querySelector(".posthead3 p");
function addLike(element){
    if (element.id=="button1"){
        likes1++;
        likesPost1.innerText=likes1+ " like(s)";
    }
    if (element.id=="button2"){
        likes2++;
        likesPost2.innerText=likes2+ " like(s)";
    }
    if (element.id=="button3"){
        likes3++;
        likesPost3.innerText=likes3+ " like(s)";
    }
}
