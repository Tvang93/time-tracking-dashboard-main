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
    return data;
}

function setWeeklyActice(){
    dailyToggle.className = '';
    weeklyToggle.className = 'setActiveToggle';
    monthlyToggle.className = '';
    workCurrent.className = '';
    toggleInnerText('weekly', 'Last Week');
}

setWeeklyActice();

async function toggleInnerText(timeValue, previousValue){
    localData = await getData();
    workCurrent.innerText = `${localData[0].timeframes[timeValue].current}hrs`;
    workPrevious.innerText = `${previousValue} - ${localData[0].timeframes[timeValue].previous}hrs`;
    playCurrent.innerText = `${localData[1].timeframes[timeValue].current}hrs`;
    playPrevious.innerText = `${previousValue} - ${localData[1].timeframes[timeValue].previous}hrs`;
    studyCurrent.innerText = `${localData[2].timeframes[timeValue].current}hrs`;
    studyPrevious.innerText = `${previousValue} - ${localData[2].timeframes[timeValue].previous}hrs`;
    exerciseCurrent.innerText = `${localData[3].timeframes[timeValue].current}hrs`;
    exercisePrevious.innerText = `${previousValue} - ${localData[3].timeframes[timeValue].previous}hrs`;
    socialCurrent.innerText = `${localData[4].timeframes[timeValue].current}hrs`;
    socialPrevious.innerText = `${previousValue} - ${localData[4].timeframes[timeValue].previous}hrs`;
    selfCareCurrent.innerText = `${localData[5].timeframes[timeValue].current}hrs`;
    selfCarePrevious.innerText = `${previousValue} - ${localData[5].timeframes[timeValue].previous}hrs`;
}

dailyToggle.addEventListener('click', function(){
    dailyToggle.className = 'setActiveToggle';
    weeklyToggle.className = '';
    monthlyToggle.className = '';
    workCurrent.className = '';
    toggleInnerText('daily', 'Yesterday');
})

weeklyToggle.addEventListener('click', function(){
    setWeeklyActice();
})

monthlyToggle.addEventListener('click', function(){
    dailyToggle.className = '';
    weeklyToggle.className = '';
    monthlyToggle.className = 'setActiveToggle';
    workCurrent.className = 'work-current-fit';
    toggleInnerText('monthly', 'Last Month');
})