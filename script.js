// =========== Clock 1 =================

const deg = 6;
const hours_1 = document.getElementById('hrs-1');
const minutes_1 = document.getElementById('min-1');
const seconds_1 = document.getElementById('sec-1');



// console.log(hr, min, sec);

setInterval(() => {

  let day_1 = new Date();
  let hr_1 = day_1.getHours() * 30;
  let min_1 = day_1.getMinutes() * deg;
  let sec_1 = day_1.getSeconds() * deg;

  hours_1.style.transform = `rotateZ(${(hr_1) + (min_1/12)}deg)`
  minutes_1.style.transform = `rotateZ(${min_1}deg)`
  seconds_1.style.transform = `rotateZ(${sec_1}deg)`
})

// =========== Clock 2 =================

const hours_2 = document.getElementById('hrs-2');
const minutes_2 = document.getElementById('min-2');
const seconds_2 = document.getElementById('sec-2');



// console.log(hr, min, sec);

setInterval(() => {

  let day_2 = new Date();
  let hr_2 = day_2.getHours() * 30;
  let min_2 = day_2.getMinutes() * deg;
  let sec_2 = day_2.getSeconds() * deg;

  hours_2.style.transform = `rotateZ(${(hr_2) + (min_2/12)}deg)`
  minutes_2.style.transform = `rotateZ(${min_2}deg)`
  seconds_2.style.transform = `rotateZ(${sec_2}deg)`
})

// =========== Toggle =================
const checkbox = document.getElementById('checkbox');
const darkMode = document.querySelector('.clock-1-wrapper');
const lightMode = document.querySelector('.clock-2-wrapper');

checkbox.addEventListener('change', ()=>{
  if(checkbox.checked != true) {
    darkMode.style.display = 'none';
    lightMode.style.display = 'flex';
  } else {
    darkMode.style.display = 'flex';
    lightMode.style.display = 'none';
  }
})