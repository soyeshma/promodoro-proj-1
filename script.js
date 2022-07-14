const pomodoroTab=document.getElementById("pomodoro");
const shortBreakTab=document.getElementById("shortBreak");
const longBreakTab=document.getElementById("longBreak");

const pomodoroContent=document.getElementById("pomodoro-content");
const shortBreakContent=document.getElementById("short break");
const longBreakContent=document.getElementById("long break");





pomodoroTab.addEventListener("click", function(){
    shortBreakTab.classList.remove("active");
    longBreakTab.classList.remove("active");
    pomodoroTab.classList.add("active");
    pomodoroContent.classList.add("active");
    shortBreakContent.classList.remove("active");
    longBreakContent.classList.remove("active");

    

});

shortBreakTab.addEventListener("click", function(){
    shortBreakTab.classList.add("active");
    longBreakTab.classList.remove("active");
    pomodoroTab.classList.remove("active");
    pomodoroContent.classList.remove("active");
    shortBreakContent.classList.add("active");
    longBreakContent.classList.remove("active");
  
});

longBreakTab.addEventListener("click", function(){
    shortBreakTab.classList.remove("active");
    longBreakTab.classList.add("active");
    pomodoroTab.classList.remove("active");
    pomodoroContent.classList.remove("active");
    shortBreakContent.classList.remove("active");
    longBreakContent.classList.add("active");
  
});


function timer(seconds){
const now=Date.now();
const then=now+(seconds*1000);

const timerinterval=setInterval(function(){
  const secondsLeft=Math.round((then-Date.now())/1000);
  displayTime(secondsLeft,pomodoroTime);
  if(secondsLeft < 1){
  clearInterval(timerinterval);
  return;
  }
}, 1000);

};

function displayTime(seconds,element){
    const minute=Math.floor(seconds/60);
    const second=seconds%60;
    console.log({minute,second});

    element.innerText=minute +":"+second;

};
const pomodoroTime=document.getElementById("pomodoroTime");

const pomodoroButton=document.getElementById("pomodoroButton");

pomodoroButton.addEventListener("click",function(){
    const pomodoroTotalTime=1500;
    timer(pomodoroTotalTime);
});







