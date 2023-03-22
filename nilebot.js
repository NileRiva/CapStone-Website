const servos = ["s1slider","s2slider","s3slider","s4slider","s5slider","s6slider"];
const servoangles = ["s1angle","s2angle","s3angle","s4angle","s5angle","s6angle"];
let slider = new Array();
let output = new Array();



for(let i=0; i<servos.length;i++)
{
    slider[i] = document.getElementById(servos[i]);
    output[i] = document.getElementById(servoangles[i]);
    output[i].innerHTML = slider[i].value;

    slider[i].oninput = function() {
    output[i].innerHTML = this.value;
    }
}


