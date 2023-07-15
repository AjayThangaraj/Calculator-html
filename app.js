var a="";
function get_input(value) {
  a +=value;
  document.getElementById("main1").innerHTML = a;  
}
function submit() {
    var expr = a;
    var out= eval(expr);
    document.getElementById("main1").innerHTML= out;
    a =out;
}
function clr() {
    a="0";
    document.getElementById("main1").innerHTML=a;
    a ="";
}
function bks() {
    var l= a.length;
    var e=l-1;
    var slice=a.slice(0,e)
    a=slice;
    document.getElementById("main1").innerHTML=a;

}