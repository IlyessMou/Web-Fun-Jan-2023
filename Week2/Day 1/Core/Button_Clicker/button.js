function logging(element) {
    if (element.innerText=="Login"){
    element.innerText = "Logout";
    }else{
        element.innerText='Login'
    }
}
function destruct(element) {
    element.remove();
}
