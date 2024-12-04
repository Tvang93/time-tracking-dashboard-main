// import { getData } from "./fetch.js"; 

const dailyToggle = document.getElementById('dailyToggle');
const weeklyToggle = document.getElementById('weeklyToggle');
const monthlyToggle = document.getElementById('monthlyToggle');
const workSectionBody = document.getElementById('workSectionBody');
const playSectionBody = document.getElementById('playSectionBody');
const studySectionBody = document.getElementById('studySectionBody');
const exerciseSectionBody = document.getElementById('exerciseSectionBody');
const socialSectionBody = document.getElementById('socialSectionBody');
const selfCareSectionBody = document.getElementById('selfCareSectionBody');

let localData = [];

function getData(){
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(data =>{
        return data
    })
}

function setWeeklyActice(){
    dailyToggle.className = '';
    weeklyToggle.className = 'setActiveToggle';
    monthlyToggle.className = '';
    let workWeekly = document.createElement('h1');
    workWeekly.id = 'workWeekly'
    workSectionBody.appendChild(workWeekly);
    getData().then( data => {
        console.log(data);
        localData = data;
        console.log(localData)
        workWeekly.innerText = `${data[0].timeframes.weekly.current} hrs`;
    })
}

setWeeklyActice();
console.log(localData)

function toggleInnerText(time){
    workWeekly.innertext = `${localData[0].timeframes[time].current} hrs`;
}

dailyToggle.addEventListener('click', function(){
    dailyToggle.className = 'setActiveToggle';
    weeklyToggle.className = '';
    monthlyToggle.className = '';
    toggleInnerText('daily')
    console.log(`${workWeekly.innerText}`)
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