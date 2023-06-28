var counter=3;
var likes=document.querySelector(".likes p");
function addLike(){
    counter++;
    likes.innerText=counter+ " like(s)";
}