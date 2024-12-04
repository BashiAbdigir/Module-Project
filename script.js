let salary = document.getElementById("salaryIn");
let hour = document.getElementById("hourIn");
let day = document.getElementById("dayIn");
let holiday = document.getElementById("holidayIn");
let vacation = document.getElementById("vacIn");
let out1 = document.getElementById("output1");
let out2 = document.getElementById("output2");
let out3 = document.getElementById("output3");
let out4 = document.getElementById("output4");
let out5 = document.getElementById("output5");
let out6 = document.getElementById("output6");
let out7 = document.getElementById("output7");
let out8 = document.getElementById("output8");
let out9 = document.getElementById("output9");
let out10 = document.getElementById("output10");

let daily;
let weekly;
let monthly;
let yearly;

let hourlyA;
let dailyA;
let weeklyA;
let monthlyA;
let yearlyA;

let daysOff;
let daysWorked;
let daysTotal;
let misedO;

document.getElementById("calc").addEventListener("click", calculate);

function calculate() {
  // Input
  s = +salary.value;
  h = +hour.value;
  d = +day.value;
  ho = +holiday.value;
  v = +vacation.value;

  // Unadjusted
  // Process
  daysWorked;

  daily = s * h;
  weekly = daily * d;
  monthly = weekly * (4 + 1 / 3);
  yearly = weekly * 52;

  monthly = monthly.toFixed(0);
  yearly = yearly.toFixed(0);

  // Output
  out1.innerHTML = s;
  out2.innerHTML = daily;
  out3.innerHTML = weekly;
  out4.innerHTML = monthly;
  out5.innerHTML = yearly;

  // Adjusted

  // Processing
  daysOff = v + ho;
  daysWorked = 260;
  daysTotal = daysWorked - daysOff;
  let misedO = daysOff / 7;

  yearlyA = (52 - misedO).toFixed(2) * weekly;
  yearlyA = yearlyA.toFixed(0);
  weeklyA = yearlyA / 52;
  weeklyA = weeklyA.toFixed(0);
  dailyA = weeklyA / d;
  hourlyA = weeklyA / (h * d);
  monthlyA = weeklyA * (4 + 1 / 3);
  monthlyA = monthlyA.toFixed(0);

  // Output
  out6.innerHTML = hourlyA;
  out7.innerHTML = dailyA;
  out8.innerHTML = weeklyA;
  out9.innerHTML = monthlyA;
  out10.innerHTML = yearlyA;
}

document.getElementById("clar").addEventListener("click", clear);

function clear() {
  salary.value.innerHTML = " ";
}

document.getElementById("dark").addEventListener("click", darkMode);
function darkMode() {
  document.getElementById("HTML").style.background = "#08043d";
  document.body.style.backgroundColor = "#171263";
  document.body.style.color = "white";
  document.body.style.borderColor = "white";
  document.getElementById("ph").style.borderColor = " white";
  document.getElementById("ph2").style.color = " black ";
  document.getElementById("th1").style.borderColor = " white";
  document.getElementById("th2").style.borderColor = " white";
  document.getElementById("td1").style.borderColor = " white";
  document.getElementById("td2").style.borderColor = " white";
  document.getElementById("td3").style.borderColor = " white";
  document.getElementById("td4").style.borderColor = " white";
  document.getElementById("td5").style.borderColor = " white";
  document.getElementById("td6").style.borderColor = " white";
  document.getElementById("td7").style.borderColor = " white";
  document.getElementById("td8").style.borderColor = " white";
  document.getElementById("td9").style.borderColor = " white";
  document.getElementById("td10").style.borderColor = "white";
  document.getElementById("td11").style.borderColor = "white";
  document.getElementById("td12").style.borderColor = "white";
  document.getElementById("td13").style.borderColor = "white";
  document.getElementById("td14").style.borderColor = "white";
  document.getElementById("td15").style.borderColor = "white";
  document.getElementById("td16").style.borderColor = "white";
}

document.getElementById("light").addEventListener("click", lightMode);
function lightMode() {
  document.body.style.backgroundColor;
  document.getElementById("HTML").style.background = "#6edb6e";
  document.body.style.color = " black";
  document.body.style.background = " rgba(255, 255, 255, 0.5)";
  document.body.style.borderColor = "white";
  document.getElementById("ph").style.borderColor = " green";
  document.getElementById("ph2").style.color = " black ";
  document.getElementById("th1").style.borderColor = " black";
  document.getElementById("th2").style.borderColor = " black";
  document.getElementById("td1").style.borderColor = " black";
  document.getElementById("td2").style.borderColor = " black";
  document.getElementById("td3").style.borderColor = " black";
  document.getElementById("td4").style.borderColor = " black";
  document.getElementById("td5").style.borderColor = " black";
  document.getElementById("td6").style.borderColor = " black";
  document.getElementById("td7").style.borderColor = " black";
  document.getElementById("td8").style.borderColor = " black";
  document.getElementById("td9").style.borderColor = " black";
  document.getElementById("td10").style.borderColor = " black";
  document.getElementById("td11").style.borderColor = " black";
  document.getElementById("td12").style.borderColor = " black";
  document.getElementById("td13").style.borderColor = " black";
  document.getElementById("td14").style.borderColor = " black";
  document.getElementById("td15").style.borderColor = " black";
  document.getElementById("td16").style.borderColor = " black";
}
