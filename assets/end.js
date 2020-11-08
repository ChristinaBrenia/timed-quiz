const username=document.querySelector('#username')
const saceScoreBtn=document.querySelector('#saveScoreBtn')
const finalScore=document.querySelector('#finalScore')
const mostRecentScore=document.querySelector('#mostRecentScore')

//Storing High Scores to local storage
const highScores =JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

//Enabling save btn when something is typed in
username.addEventListener('keyup',() => ) {

}