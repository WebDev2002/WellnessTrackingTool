
let selected = document.querySelectorAll('.ExerciseLeve');
let levels = document.getElementById('exerciseplan')
let title = document.getElementById('titel');
let days = document.getElementById('beginnerExercisesday');
let week = document.getElementById('week')

selected.forEach(ExerciseLeve => {
    ExerciseLeve.addEventListener('click', ()=>{
        title.style.display='none';
        levels.style.display='none';
        weekContainer.style.display='flex';
        days.style.display='block';
    })
});

// Create the ExerciseWeeks structure using JavaScript
const weekContainer = document.getElementById('week');

// Back to menu button (using FontAwesome icon)
const backButton1 = document.createElement('i');
backButton1.className = 'fa-solid fa-arrow-left';
backButton1.onclick = goBackToLevel;
weekContainer.appendChild(backButton1);

// Week buttons
const weeks = ["1 Week", "2 Week", "3 Week", "4 Week"];
weeks.forEach((week, index) => {
    const button = document.createElement('button');
    button.className = 'week';
    button.textContent = week;

    // Set the first button as active
    if (index==0) {
        button.classList.add('active');
    }

        // Add event listener to handle click
        button.addEventListener('click', () => {
            // Remove active class from all buttons
          weekbtn =  document.querySelectorAll('.week');
         weekbtn.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            button.classList.add('active');
        });
    

    weekContainer.appendChild(button);
});


/* back button function */
function goBackToLevel() {
    title.style.display='block';
    levels.style.display='block';
    weekContainer.style.display='none';
    days.style.display='none';  

        // Remove active class from all buttons
        document.querySelectorAll('.week').forEach(btn => btn.classList.remove('active'));
    
        // Add active class to the first button
        const firstButton = document.querySelector('.week');
        if (firstButton) {
            firstButton.classList.add('active');
        }
    
}

/* Days Structure creating */

const Daycontainer = document.getElementById('beginnerExercisesday');
    
for (let i = 0; i < 6; i++) {
    const exerciseDayDiv = document.createElement('div');
    exerciseDayDiv.className = 'exercise-day';
    
    const heading = document.createElement('h3');
    heading.innerText = `Day ${i + 1}`;
    
    const paragraph = document.createElement('p');
    paragraph.innerText = `Description for Day ${i + 1}`;
    
    exerciseDayDiv.appendChild(heading);
    exerciseDayDiv.appendChild(paragraph);
    
    Daycontainer.appendChild(exerciseDayDiv);
}


/* Exercises sttructure creating */


 // Get the container to append the elements
 const Execontainer = document.getElementById('exercisepage');
 const Exeheader = document.getElementById('exercises');
    
 // Create and append the arrow icon
 const backButton = document.createElement('i');
 backButton.className = 'fa-solid fa-arrow-left';
 Exeheader.appendChild(backButton);
 
 // Create and append the paragraph
 const paragraph = document.createElement('p');
 paragraph.className = 'ExeciseDayWeek';
 paragraph.textContent = 'Exercise Day Week'; 
 Exeheader.appendChild(paragraph);
 
 // Create and append the "Start Now" button
 const startButton = document.createElement('button');
 startButton.textContent = 'Start Now';
 Exeheader.appendChild(startButton);
 
 // Create and append Exercise divs
 const exercises = 5; // Number of Exercise divs
 for (let i = 0; i < exercises; i++) {
     const exerciseDiv = document.createElement('div');
     exerciseDiv.className = 'Exercise';
     
     // Create and append the image
     const img = document.createElement('img');
     img.src = ''; 
     img.alt = `Exercise ${i + 1}`;
     exerciseDiv.appendChild(img);
     
     // Create and append the details div
     const detailsDiv = document.createElement('div');
     detailsDiv.className = 'Exedetails';
     
     // Create and append the heading
     const heading = document.createElement('h5');
     heading.textContent = `Exercise ${i + 1}`; 
     detailsDiv.appendChild(heading);
     
     // Create and append the paragraph
     const detailParagraph = document.createElement('p');
     detailParagraph.textContent = `Description for Exercise ${i + 1}`; 
     detailsDiv.appendChild(detailParagraph);
     
     exerciseDiv.appendChild(detailsDiv);
     
     Execontainer.appendChild(exerciseDiv);
 }

 let DayExercises = document.querySelectorAll('.exercise-day');
 
DayExercises.forEach(element => {
    element.addEventListener('click', ()=>{
      Execontainer.style.display='block';
      Exeheader.style.display='flex';
    Daycontainer.style.display='none';
    week.style.display='none';
    })
});