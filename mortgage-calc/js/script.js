function domath() {
    var P = Number(document.getElementById("princ").value);
    var r = Number(document.getElementById("ir").value);
    var t = Number(document.getElementById("ny").value);
    var m = Number(document.getElementById("mp").value);
    var n = Number(12);
    var B = (P*Math.pow(1 + (r/n), n*t)) - ((m*((Math.pow(1 + (r/n), n*t))-1))/(r/n));
    var p = document.getElementById("out");
    p.innerHTML = B.toFixed(2);
}
function reset(){
    var p = document.getElementById("out");
    p.innerHTML = " "; 
}