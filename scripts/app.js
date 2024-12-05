const dailyToggle = document.getElementById('dailyToggle');
const weeklyToggle = document.getElementById('weeklyToggle');
const monthlyToggle = document.getElementById('monthlyToggle');
const workCurrent = document.getElementById('workCurrent');
const playCurrent = document.getElementById('playCurrent');
const studyCurrent = document.getElementById('studyCurrent');
const exerciseCurrent = document.getElementById('exerciseCurrent');
const socialCurrent = document.getElementById('socialCurrent');
const selfCareCurrent = document.getElementById('selfCareCurrent');
const workPrevious = document.getElementById('workPrevious');
const playPrevious = document.getElementById('playPrevious');
const studyPrevious = document.getElementById('studyPrevious');
const exercisePrevious = document.getElementById('exercisePrevious');
const socialPrevious = document.getElementById('socialPrevious');
const selfCarePrevious = document.getElementById('selfCarePrevious');

let localData = '';

async function getData(){
    const promise = await fetch("../data/data.json");
    const data = await promise.json();
    localData = data;
}

function setWeeklyActice(){
    dailyToggle.className = '';
    weeklyToggle.className = 'setActiveToggle';
    monthlyToggle.className = '';
}

setWeeklyActice();

function toggleInnerText(){
    console.log(workWeekly.innerText)
    workWeekly.innertext = "work";
}

dailyToggle.addEventListener('click', function(){
    dailyToggle.className = 'setActiveToggle';
    weeklyToggle.className = '';
    monthlyToggle.className = '';
    toggleInnerText()
})

weeklyToggle.addEventListener('click', function(){
    dailyToggle.className = '';
    weeklyToggle.className = 'setActiveToggle';
    monthlyToggle.className = '';
    toggleText("weekly");
})

monthlyToggle.addEventListener('click', function(){
    dailyToggle.className = '';
    weeklyToggle.className = '';
    monthlyToggle.className = 'setActiveToggle';
    toggleText("monthly");
})