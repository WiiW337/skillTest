
//pickA
$(document).ready(function() {
    $("#lNum button").click(function() {
        document.getElementById("pickA").innerHTML = this.innerHTML;
    });
});


//pickB
$(document).ready(function() {
    $("#rNum button").click(function() {
        document.getElementById("pickB").innerHTML = this.innerHTML;
    });
});


//Result
function sum(pickA, pickB) {
    if(pickA == number && pickB == number) {
        let ABC = pickA + pickB;
        document.getElementById("result").innerHTML = ABC;
    }




    
}

function min(pickA, pickB) {
    return pickA - pickB;
}

function tim(pickA, pickB) {
    return pickA * pickB;
}

function div(pickA, pickB) {
    return pickA / pickB;
}
