function calc(){
    var kloc = document.getElementById("kloc").value;
    var cocomode = document.getElementById("mode");
    var eff = document.getElementById("effort");
    var development = document.getElementById("time");
    var person = document.getElementById("staff");
    console.log(kloc);
    var table = [[2.4,1.05,2.5,0.38],[3.0,1.12,2.5,0.35],[3.6,1.20,2.5,0.32]];
    var mode = ["Organic","Semi-Detached","Embedded"];
    var effort,time,staff,model;
    if (kloc >= 1 && kloc <= 50)
        model = 0; // organic
    else if (kloc > 50 && kloc <= 300)
        model = 1; // semi-detached
    else if (kloc > 300)
        model = 2; // embedded
    console.log("The mode is ",mode[model]); // Output of Mode currently, depending on kloc.
    cocomode.innerText = "The mode is "+ mode[model];
    effort = table[model][0] * (kloc ** table[model][1]);
    time = table[model][2] * (effort ** table[model][3]);
    staff = effort / time;
    console.log("Effort = ",effort," Person-Month"); // Output of effort currently, depending on kloc.
    console.log("Development Time = ",time," Months");// Output of time currently, depending on kloc.
    console.log("Average Staff Required = ",Math.round(staff)," Persons");// Output of staff currently, depending on kloc.
    eff.innerText = "Effort = "+Math.round(effort*1000)/1000+" Person-Month";
    development.innerText = "Development Time = " + Math.round(time*1000)/1000 + " Months";
    person.innerText = "Staff = " + Math.round(staff) + " Persons";
}
const btn = document.getElementById("calc");
btn.addEventListener("click",calc);
var input = document.getElementById("kloc");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("calc").click();
  }
});