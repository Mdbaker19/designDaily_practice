(function(){

    let subFree = document.getElementById("freeButton");
    let subPro = document.getElementById("proButton");
    let free = false;
    let pro = false;

    subFree.addEventListener("click", function(){
        if(!pro) {
            alert("Free subscription added!");
        } else alert("looks like you already subscribed to pro");
        free = true;
    });

    subPro.addEventListener("click", function(){
        if(!free) {
            alert("Pro subscription added!");
        } else alert("looks like you already subscribed to free");
        pro = true;
    });
})();