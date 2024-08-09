console.log("Hello!");

/* Exercise Plans & Week section js */
let openExercises = document.getElementById('exerciseplan');
let ExerciseWeeks = document.getElementById('week');
let Title = document.getElementById("titel");
let beginnerExeday = document.getElementById("beginnerExercisesday")
/* Selection Level of Exercise */
 function OpenExercise(){
     openExercises.style.display = "none";
     ExerciseWeeks.style.display = "flex"
     Title.style.display="none";
     beginnerExeday.style.display= "block";
 }
/* Back to exercise level section*/
 function goBackToLevel(){
     Title.style.display="block";
   openExercises.style.display = "block";
   ExerciseWeeks.style.display = "none";
     beginnerExeday.style.display= "none";
 }



// Get all week buttons
const weekButtons = document.querySelectorAll('.ExerciseWeeks .week');
let getWeek;

// Add click event listener to each button
weekButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        weekButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
           button.classList.add('active');
    });
});


let DaySelect = document.querySelectorAll('.Days');
let Exercises = document.getElementById('execises');
let DayWeek = document.querySelector('.Exercisepage');
let getDayAndWeek = document.querySelector('.ExeciseDayWeek');

DaySelect.forEach(Days => {
     Days.addEventListener('click', ()=>{
  Exercises.style.display="block"
  ExerciseWeeks.style.display = "none";
  beginnerExeday.style.display= "none";
  DayWeek.style.display="flex"
  let day = Days.innerText;
  getDayAndWeek.innerHTML=day;

//   getDayAndWeek.innerHTML = getWeek;
     })
});


/* Back to week and day section */

function goBackToWeek(){
    Exercises.style.display="none"
    ExerciseWeeks.style.display = "flex";
    beginnerExeday.style.display= "block";
}



