var x = prompt("enter the 1st name");
var y = prompt("enter the 2nd name");
var z = Math.random();
z = z*100;
z = Math.floor(z) + 1;
var t= alert("the love percentage of  " + x + " and " +  y + " is " +  z);
if(z < 20){
    alert("fake love");
}else {
    alert("love each other");
}
