
/* Exercixe Data */

const WeightGain = [

    /* beginner exercies */
    {
        /* week-1 */
        week1: [
            {
                Days: [
                    /* Day 1 - Full Body */
                    {
                        day: 1,
                        name: "Full Body",
                        exercises: [
                            { name: "Push-Ups", sets: 3, reps: "8-10", notes: "Focus on proper form, keeping your body straight and core engaged.", image: "Exercise-gif/push-up.gif" },
                            { name: "Bodyweight Squats", sets: 3, reps: "10-12", notes: "Keep your feet shoulder-width apart and push through your heels.", image: "Exercise-gif/push-up1.gif" },
                            { name: "Plank", sets: 3, time: "20-30 seconds", notes: "Maintain a straight line from head to heels, engaging your core.", image: "Exercise-gif/push-up1.gif" },
                            { name: "Glute Bridges", sets: 3, reps: "12-15", notes: "Squeeze your glutes at the top and hold for a second.", image: "Exercise-gif/push-up.gif" },
                            { name: "Superman", sets: 3, reps: "10-12", notes: "Lift your arms and legs off the ground simultaneously, engaging your back muscles.", image: "Exercise-gif/push-up1.gif" }
                        ]
                    },
                    /* Day 2 - Rest/Active Recovery */
                    {
                        day: 2,
                        name: "Rest/Active Recovery",
                        notes: "Focus on light stretching or a short walk to keep your body active.",
                        image: "path/to/rest-day-image.jpg"
                    },
                    /* Day 3 - Upper Body */
                    {
                        day: 3,
                        name: "Upper Body",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 3, reps: "8-10", notes: "Use a stable surface like a chair or couch for the incline.", image: "path/to/incline-pushups-image.jpg" },
                            { name: "Tricep Dips (using a chair)", sets: 3, reps: "8-10", notes: "Use a chair or edge of a couch to perform this exercise.", image: "path/to/tricep-dips-image.jpg" },
                            { name: "Plank to Shoulder Tap", sets: 3, reps: "8-10 taps per side", notes: "Keep your hips stable as you tap each shoulder.", image: "path/to/plank-shoulder-tap-image.jpg" },
                            { name: "Pike Push-Ups", sets: 3, reps: "6-8", notes: "Focus on shoulders, maintaining a 90-degree angle at the hips.", image: "path/to/pike-pushups-image.jpg" },
                            { name: "Bicep Curls (if you have light weights or resistance bands)", sets: 3, reps: "10-12", notes: "Maintain controlled movement.", image: "path/to/bicep-curls-image.jpg" }
                        ]
                    },
                    /* Day 4 - Rest/Active Recovery */
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        notes: "Engage in light stretching, yoga, or an easy walk.",
                        image: "path/to/rest-day-image2.jpg"
                    },
                    /* Day 5 - Lower Body */
                    {
                        day: 5,
                        name: "Lower Body",
                        exercises: [
                            { name: "Lunges", sets: 3, reps: "8-10 per leg", notes: "Keep your front knee over your ankle, not past your toes.", image: "path/to/lunges-image.jpg" },
                            { name: "Glute Bridges", sets: 3, reps: "12-15", notes: "Squeeze your glutes at the top.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Wall Sit", sets: 3, time: "20-30 seconds", notes: "Hold the position as if you're sitting on an invisible chair.", image: "path/to/wall-sit-image.jpg" },
                            { name: "Step-Ups (using a sturdy chair or step)", sets: 3, reps: "10 per leg", notes: "Use a sturdy chair or step.", image: "path/to/step-ups-image.jpg" },
                            { name: "Calf Raises", sets: 3, reps: "15-20", notes: "Raise up onto your toes and hold for a second before lowering.", image: "path/to/calf-raises-image.jpg" }
                        ]
                    },
                    /* Day 6 - Rest/Active Recovery */
                    {
                        day: 6,
                        name: "Rest/Active Recovery",
                        notes: "Continue with light activities like walking or stretching.",
                        image: "path/to/rest-day-image3.jpg"
                    },
                    /* Day 7 - Rest */
                    {
                        day: 7,
                        name: "Rest",
                        notes: "Complete rest day.",
                        image: "path/to/rest-day-image4.jpg"
                    }
                ]
            },
        ],

        /* week-2 */
        week2: [
            {
                Days: [
                    /* Day 1 - Full Body */
                    {
                        day: 1,
                        name: "Full Body",
                        exercises: [
                            { name: "Push-Ups", sets: 3, reps: "10-12", notes: "Maintain good form, keeping your core tight.", image: "path/to/pushups-image.jpg" },
                            { name: "Bodyweight Squats", sets: 3, reps: "12-15", notes: "Increase the range of motion by going deeper into the squat.", image: "path/to/squats-image.jpg" },
                            { name: "Plank", sets: 3, time: "30-40 seconds", notes: "Engage your core and maintain a straight line.", image: "path/to/plank-image.jpg" },
                            { name: "Glute Bridges", sets: 3, reps: "15-20", notes: "Focus on squeezing your glutes at the top.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Superman", sets: 3, reps: "12-15", notes: "Increase the hold time at the top to challenge your back muscles.", image: "path/to/superman-image.jpg" }
                        ]
                    },
                    /* Day 2 - Rest/Active Recovery */
                    {
                        day: 2,
                        name: "Rest/Active Recovery",
                        notes: "Include light stretching, yoga, or an easy walk to keep your body active.",
                        image: "path/to/rest-day-image.jpg"
                    },
                    /* Day 3 - Upper Body */
                    {
                        day: 3,
                        name: "Upper Body",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 3, reps: "10-12", notes: "Increase the intensity by lowering the incline if possible.", image: "path/to/incline-pushups-image.jpg" },
                            { name: "Pike Push-Ups", sets: 3, reps: "8-10", notes: "Focus on controlling the movement and engaging your shoulders.", image: "path/to/pike-pushups-image.jpg" },
                            { name: "Tricep Dips", sets: 3, reps: "10-12", notes: "Try to increase the range of motion.", image: "path/to/tricep-dips-image.jpg" },
                            { name: "Plank to Shoulder Tap", sets: 3, reps: "12-16 (6-8 per side)", notes: "Keep your hips stable and move slowly.", image: "path/to/plank-shoulder-tap-image.jpg" }
                        ]
                    },
                    /* Day 4 - Rest/Active Recovery */
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        notes: "Light stretching or a gentle yoga session is recommended.",
                        image: "path/to/rest-day-image2.jpg"
                    },
                    /* Day 5 - Lower Body */
                    {
                        day: 5,
                        name: "Lower Body",
                        exercises: [
                            { name: "Lunges", sets: 3, reps: "10-12 per leg", notes: "Keep your form tight, and increase the depth of the lunge.", image: "path/to/lunges-image.jpg" },
                            { name: "Step-Ups", sets: 3, reps: "12-15 per leg", notes: "Use a higher step if possible for more intensity.", image: "path/to/step-ups-image.jpg" },
                            { name: "Wall Sit", sets: 3, time: "30-40 seconds", notes: "Hold the position with a straight back and engage your core.", image: "path/to/wall-sit-image.jpg" },
                            { name: "Calf Raises", sets: 3, reps: "18-20", notes: "Add a pause at the top of each rep to increase difficulty.", image: "path/to/calf-raises-image.jpg" }
                        ]
                    },
                    /* Day 6 - Rest/Active Recovery */
                    {
                        day: 6,
                        name: "Rest/Active Recovery",
                        notes: "Engage in light activities like stretching, yoga, or walking.",
                        image: "path/to/rest-day-image3.jpg"
                    },
                    /* Day 7 - Rest */
                    {
                        day: 7,
                        name: "Rest",
                        notes: "Take a full day of rest to allow your muscles to recover.",
                        image: "path/to/rest-day-image4.jpg"
                    }
                ]
            },
        ],

        /* week-3 */
        week3: [
            {
                Days: [
                    /* Day 1 - Full Body */
                    {
                        day: 1,
                        name: "Full Body",
                        exercises: [
                            { name: "Push-Ups", sets: 3, reps: "12-15", notes: "Push for more reps while maintaining proper form.", image: "path/to/pushups-image.jpg" },
                            { name: "Bodyweight Squats", sets: 3, reps: "15-18", notes: "Try to increase the speed without sacrificing form.", image: "path/to/squats-image.jpg" },
                            { name: "Plank", sets: 3, time: "40-50 seconds", notes: "Hold the plank longer while keeping your core engaged.", image: "path/to/plank-image.jpg" },
                            { name: "Glute Bridges", sets: 3, reps: "18-20", notes: "Focus on squeezing your glutes at the top.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Superman", sets: 3, reps: "15-18", notes: "Increase the reps or hold time at the top.", image: "path/to/superman-image.jpg" }
                        ]
                    },
                    /* Day 2 - Rest/Active Recovery */
                    {
                        day: 2,
                        name: "Rest/Active Recovery",
                        notes: "Consider light stretching or a walk to stay active.",
                        image: "path/to/rest-day-image.jpg"
                    },
                    /* Day 3 - Upper Body */
                    {
                        day: 3,
                        name: "Upper Body",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 3, reps: "12-15", notes: "Lower the incline or perform regular push-ups if you can.", image: "path/to/incline-pushups-image.jpg" },
                            { name: "Pike Push-Ups", sets: 3, reps: "10-12", notes: "Control the movement, focusing on shoulder engagement.", image: "path/to/pike-pushups-image.jpg" },
                            { name: "Tricep Dips", sets: 3, reps: "12-15", notes: "Increase the range of motion for more intensity.", image: "path/to/tricep-dips-image.jpg" },
                            { name: "Plank to Shoulder Tap", sets: 3, reps: "16-20 taps (8-10 per side)", notes: "Slow and controlled movement is key.", image: "path/to/plank-shoulder-tap-image.jpg" }
                        ]
                    },
                    /* Day 4 - Rest/Active Recovery */
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        notes: "A light walk, stretching, or yoga is ideal.",
                        image: "path/to/rest-day-image2.jpg"
                    },
                    /* Day 5 - Lower Body */
                    {
                        day: 5,
                        name: "Lower Body",
                        exercises: [
                            { name: "Lunges", sets: 3, reps: "12-15 per leg", notes: "Increase the range of motion or add a pause at the bottom.", image: "path/to/lunges-image.jpg" },
                            { name: "Step-Ups", sets: 3, reps: "15-18 per leg", notes: "Use a higher step or add more reps.", image: "path/to/step-ups-image.jpg" },
                            { name: "Wall Sit", sets: 3, time: "40-50 seconds", notes: "Hold the position for longer with good posture.", image: "path/to/wall-sit-image.jpg" },
                            { name: "Calf Raises", sets: 3, reps: "20-25", notes: "Focus on a slow and controlled movement.", image: "path/to/calf-raises-image.jpg" }
                        ]
                    },
                    /* Day 6 - Rest/Active Recovery */
                    {
                        day: 6,
                        name: "Rest/Active Recovery",
                        notes: "Focus on recovery with light activities like stretching or walking.",
                        image: "path/to/rest-day-image3.jpg"
                    },
                    /* Day 7 - Rest */
                    {
                        day: 7,
                        name: "Rest",
                        notes: "Take a day off to let your body fully recover.",
                        image: "path/to/rest-day-image4.jpg"
                    }
                ]
            },
        ],

        /* week-4 */
        week4: [
            {
                Days: [
                    /* Day 1 - Full Body */
                    {
                        day: 1,
                        name: "Full Body",
                        exercises: [
                            { name: "Push-Ups", sets: 3, reps: "15-20", notes: "Challenge yourself with more reps while maintaining form.", image: "path/to/pushups-image.jpg" },
                            { name: "Bodyweight Squats", sets: 3, reps: "18-20", notes: "Increase the speed or depth of the squat.", image: "path/to/squats-image.jpg" },
                            { name: "Plank", sets: 3, time: "50-60 seconds", notes: "Hold the plank as long as possible with good form.", image: "path/to/plank-image.jpg" },
                            { name: "Glute Bridges", sets: 3, reps: "20-25", notes: "Squeeze your glutes at the top and hold for a second.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Superman", sets: 3, reps: "18-20", notes: "Increase the hold time or reps.", image: "path/to/superman-image.jpg" }
                        ]
                    },
                    /* Day 2 - Rest/Active Recovery */
                    {
                        day: 2,
                        name: "Rest/Active Recovery",
                        notes: "Consider a light walk, yoga, or stretching.",
                        image: "path/to/rest-day-image.jpg"
                    },
                    /* Day 3 - Upper Body */
                    {
                        day: 3,
                        name: "Upper Body",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 3, reps: "15-20", notes: "Perform regular push-ups if possible.", image: "path/to/incline-pushups-image.jpg" },
                            { name: "Pike Push-Ups", sets: 3, reps: "12-15", notes: "Focus on controlled movement, engaging the shoulders.", image: "path/to/pike-pushups-image.jpg" },
                            { name: "Tricep Dips", sets: 3, reps: "15-18", notes: "Increase the intensity by adding more reps.", image: "path/to/tricep-dips-image.jpg" },
                            { name: "Plank to Shoulder Tap", sets: 3, reps: "20-24 taps (10-12 per side)", notes: "Keep your movements controlled.", image: "path/to/plank-shoulder-tap-image.jpg" }
                        ]
                    },
                    /* Day 4 - Rest/Active Recovery */
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        notes: "Light stretching or yoga is ideal.",
                        image: "path/to/rest-day-image2.jpg"
                    },
                    /* Day 5 - Lower Body */
                    {
                        day: 5,
                        name: "Lower Body",
                        exercises: [
                            { name: "Lunges", sets: 3, reps: "15-20 per leg", notes: "Increase the range of motion or reps.", image: "path/to/lunges-image.jpg" },
                            { name: "Step-Ups", sets: 3, reps: "18-20 per leg", notes: "Use a higher step or add more reps.", image: "path/to/step-ups-image.jpg" },
                            { name: "Wall Sit", sets: 3, time: "50-60 seconds", notes: "Hold the position for longer with good posture.", image: "path/to/wall-sit-image.jpg" },
                            { name: "Calf Raises", sets: 3, reps: "25-30", notes: "Focus on a slow and controlled movement.", image: "path/to/calf-raises-image.jpg" }
                        ]
                    },
                    /* Day 6 - Rest/Active Recovery */
                    {
                        day: 6,
                        name: "Rest/Active Recovery",
                        notes: "Focus on recovery with light activities like stretching or walking.",
                        image: "path/to/rest-day-image3.jpg"
                    },
                    /* Day 7 - Rest */
                    {
                        day: 7,
                        name: "Rest",
                        notes: "Take a full rest day to allow your body to recover.",
                        image: "path/to/rest-day-image4.jpg"
                    }
                ]
            },
        ]
    },

    /* intermediat exercise */

    {
        /* week-1 */
        week1: [
            {
                Days: [
                    /* Day 1 - Full Body */
                    {
                        day: 1,
                        name: "Full Body",
                        exercises: [
                            { name: "Push-Ups", sets: 3, reps: "10-12", notes: "Maintain proper form with a straight body line.", image: "path/to/push-ups-image.jpg" },
                            { name: "Bodyweight Squats", sets: 3, reps: "12-15", notes: "Keep your feet shoulder-width apart, lower yourself slowly.", image: "path/to/bodyweight-squats-image.jpg" },
                            { name: "Plank", sets: 3, time: "30-40 seconds", notes: "Engage your core and keep your body straight.", image: "path/to/plank-image.jpg" },
                            { name: "Glute Bridges", sets: 3, reps: "15-20", notes: "Squeeze your glutes at the top of the movement.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Superman", sets: 3, reps: "12-15", notes: "Lift your arms and legs while engaging your back muscles.", image: "path/to/superman-image.jpg" }
                        ]
                    },
                    /* Day 2 - Rest/Active Recovery */
                    {
                        day: 2,
                        name: "Rest/Active Recovery",
                        notes: "Engage in light stretching, yoga, or a brisk walk.",
                        image: "path/to/rest-day-image.jpg"
                    },
                    /* Day 3 - Upper Body */
                    {
                        day: 3,
                        name: "Upper Body",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 3, reps: "10-12", notes: "Use a stable surface for incline. Keep elbows at 45 degrees.", image: "path/to/incline-push-ups-image.jpg" },
                            { name: "Tricep Dips (using a chair)", sets: 3, reps: "10-12", notes: "Perform dips with controlled movement.", image: "path/to/tricep-dips-image.jpg" },
                            { name: "Plank to Shoulder Tap", sets: 3, reps: "10-12 per side", notes: "Stabilize your body while tapping each shoulder.", image: "path/to/plank-to-shoulder-tap-image.jpg" },
                            { name: "Pike Push-Ups", sets: 3, reps: "8-10", notes: "Focus on your shoulders while maintaining a pike position.", image: "path/to/pike-push-ups-image.jpg" },
                            { name: "Bicep Curls (with light weights or resistance bands)", sets: 3, reps: "12-15", notes: "Maintain control throughout the movement.", image: "path/to/bicep-curls-image.jpg" }
                        ]
                    },
                    /* Day 4 - Rest/Active Recovery */
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        notes: "Light activities like stretching, yoga, or walking are beneficial.",
                        image: "path/to/rest-day-image2.jpg"
                    },
                    /* Day 5 - Lower Body */
                    {
                        day: 5,
                        name: "Lower Body",
                        exercises: [
                            { name: "Lunges", sets: 3, reps: "10-12 per leg", notes: "Keep your knee aligned with your ankle.", image: "path/to/lunges-image.jpg" },
                            { name: "Glute Bridges", sets: 3, reps: "15-20", notes: "Hold the bridge position and squeeze your glutes.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Wall Sit", sets: 3, time: "30-40 seconds", notes: "Maintain a 90-degree angle at the knees.", image: "path/to/wall-sit-image.jpg" },
                            { name: "Step-Ups (using a sturdy chair or step)", sets: 3, reps: "12 per leg", notes: "Use a sturdy platform to step up.", image: "path/to/step-ups-image.jpg" },
                            { name: "Calf Raises", sets: 3, reps: "15-20", notes: "Raise onto your toes and hold for a brief moment.", image: "path/to/calf-raises-image.jpg" }
                        ]
                    },
                    /* Day 6 - Rest/Active Recovery */
                    {
                        day: 6,
                        name: "Rest/Active Recovery",
                        notes: "Focus on light activities to help with recovery.",
                        image: "path/to/rest-day-image3.jpg"
                    },
                    /* Day 7 - Rest */
                    {
                        day: 7,
                        name: "Rest",
                        notes: "Complete rest day to allow for full recovery.",
                        image: "path/to/rest-day-image4.jpg"
                    }
                ]
            }
        ],

        /* week-2 */
        week2: [
            {
                Days: [
                    /* Day 1 - Full Body */
                    {
                        day: 1,
                        name: "Full Body",
                        exercises: [
                            { name: "Push-Ups", sets: 3, reps: "12-15", notes: "Increase reps while maintaining proper form.", image: "path/to/push-ups-image.jpg" },
                            { name: "Bodyweight Squats", sets: 3, reps: "15-18", notes: "Add depth to your squats for more challenge.", image: "path/to/bodyweight-squats-image.jpg" },
                            { name: "Plank", sets: 3, time: "40-50 seconds", notes: "Hold the plank longer, keeping core engaged.", image: "path/to/plank-image.jpg" },
                            { name: "Glute Bridges", sets: 3, reps: "18-20", notes: "Squeeze and hold at the top of the movement.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Superman", sets: 3, reps: "15-18", notes: "Increase hold time at the top for added difficulty.", image: "path/to/superman-image.jpg" }
                        ]
                    },
                    /* Day 2 - Rest/Active Recovery */
                    {
                        day: 2,
                        name: "Rest/Active Recovery",
                        notes: "Engage in activities like stretching or a light walk.",
                        image: "path/to/rest-day-image.jpg"
                    },
                    /* Day 3 - Upper Body */
                    {
                        day: 3,
                        name: "Upper Body",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 3, reps: "12-15", notes: "Decrease the incline to increase difficulty.", image: "path/to/incline-push-ups-image.jpg" },
                            { name: "Pike Push-Ups", sets: 3, reps: "10-12", notes: "Focus on shoulder engagement and control.", image: "path/to/pike-push-ups-image.jpg" },
                            { name: "Tricep Dips", sets: 3, reps: "12-15", notes: "Try to increase range of motion.", image: "path/to/tricep-dips-image.jpg" },
                            { name: "Plank to Shoulder Tap", sets: 3, reps: "12-16 (6-8 per side)", notes: "Keep movement slow and controlled.", image: "path/to/plank-to-shoulder-tap-image.jpg" }
                        ]
                    },
                    /* Day 4 - Rest/Active Recovery */
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        notes: "Light activities like stretching or gentle yoga are recommended.",
                        image: "path/to/rest-day-image2.jpg"
                    },
                    /* Day 5 - Lower Body */
                    {
                        day: 5,
                        name: "Lower Body",
                        exercises: [
                            { name: "Lunges", sets: 3, reps: "12-15 per leg", notes: "Increase depth of the lunge for added intensity.", image: "path/to/lunges-image.jpg" },
                            { name: "Step-Ups", sets: 3, reps: "15-18 per leg", notes: "Use a higher step or add more reps.", image: "path/to/step-ups-image.jpg" },
                            { name: "Wall Sit", sets: 3, time: "40-50 seconds", notes: "Maintain a straight back and engage your core.", image: "path/to/wall-sit-image.jpg" },
                            { name: "Calf Raises", sets: 3, reps: "18-20", notes: "Add a pause at the top for increased difficulty.", image: "path/to/calf-raises-image.jpg" }
                        ]
                    },
                    /* Day 6 - Rest/Active Recovery */
                    {
                        day: 6,
                        name: "Rest/Active Recovery",
                        notes: "Engage in light stretching, yoga, or walking.",
                        image: "path/to/rest-day-image3.jpg"
                    },
                    /* Day 7 - Rest */
                    {
                        day: 7,
                        name: "Rest",
                        notes: "Take a full rest day to recover.",
                        image: "path/to/rest-day-image4.jpg"
                    }
                ]
            }
        ],

        /* week-3 */
        week3: [
            {
                Days: [
                    /* Day 1 - Full Body */
                    {
                        day: 1,
                        name: "Full Body",
                        exercises: [
                            { name: "Push-Ups", sets: 3, reps: "15-18", notes: "Increase difficulty with more reps or a slow pace.", image: "path/to/push-ups-image.jpg" },
                            { name: "Bodyweight Squats", sets: 3, reps: "18-20", notes: "Try adding a pause at the bottom.", image: "path/to/bodyweight-squats-image.jpg" },
                            { name: "Plank", sets: 3, time: "50-60 seconds", notes: "Hold the plank for a longer duration.", image: "path/to/plank-image.jpg" },
                            { name: "Glute Bridges", sets: 3, reps: "20-25", notes: "Add a single-leg variation for added challenge.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Superman", sets: 3, reps: "18-20", notes: "Increase hold time and focus on muscle engagement.", image: "path/to/superman-image.jpg" }
                        ]
                    },
                    /* Day 2 - Rest/Active Recovery */
                    {
                        day: 2,
                        name: "Rest/Active Recovery",
                        notes: "Light stretching or a gentle walk are recommended.",
                        image: "path/to/rest-day-image.jpg"
                    },
                    /* Day 3 - Upper Body */
                    {
                        day: 3,
                        name: "Upper Body",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 3, reps: "15-18", notes: "Gradually decrease the incline.", image: "path/to/incline-push-ups-image.jpg" },
                            { name: "Pike Push-Ups", sets: 3, reps: "12-15", notes: "Increase the difficulty by raising your hips higher.", image: "path/to/pike-push-ups-image.jpg" },
                            { name: "Tricep Dips", sets: 3, reps: "15-18", notes: "Perform with a full range of motion.", image: "path/to/tricep-dips-image.jpg" },
                            { name: "Plank to Shoulder Tap", sets: 3, reps: "15-18 (8-9 per side)", notes: "Maintain a slow and controlled movement.", image: "path/to/plank-to-shoulder-tap-image.jpg" }
                        ]
                    },
                    /* Day 4 - Rest/Active Recovery */
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        notes: "Focus on light stretching, yoga, or gentle walking.",
                        image: "path/to/rest-day-image2.jpg"
                    },
                    /* Day 5 - Lower Body */
                    {
                        day: 5,
                        name: "Lower Body",
                        exercises: [
                            { name: "Lunges", sets: 3, reps: "15-18 per leg", notes: "Perform walking lunges for increased intensity.", image: "path/to/lunges-image.jpg" },
                            { name: "Step-Ups", sets: 3, reps: "18-20 per leg", notes: "Add weights or increase step height for challenge.", image: "path/to/step-ups-image.jpg" },
                            { name: "Wall Sit", sets: 3, time: "50-60 seconds", notes: "Increase time or add weights.", image: "path/to/wall-sit-image.jpg" },
                            { name: "Calf Raises", sets: 3, reps: "20-25", notes: "Perform on one leg for added difficulty.", image: "path/to/calf-raises-image.jpg" }
                        ]
                    },
                    /* Day 6 - Rest/Active Recovery */
                    {
                        day: 6,
                        name: "Rest/Active Recovery",
                        notes: "Engage in activities like gentle stretching or light yoga.",
                        image: "path/to/rest-day-image3.jpg"
                    },
                    /* Day 7 - Rest */
                    {
                        day: 7,
                        name: "Rest",
                        notes: "Complete rest day to allow for full recovery.",
                        image: "path/to/rest-day-image4.jpg"
                    }
                ]
            }
        ],

        /* week-4 */
        week4: [
            {
                Days: [
                    /* Day 1 - Full Body */
                    {
                        day: 1,
                        name: "Full Body",
                        exercises: [
                            { name: "Push-Ups", sets: 3, reps: "18-20", notes: "Increase reps or slow down for more challenge.", image: "path/to/push-ups-image.jpg" },
                            { name: "Bodyweight Squats", sets: 3, reps: "20-25", notes: "Try single-leg squats for additional difficulty.", image: "path/to/bodyweight-squats-image.jpg" },
                            { name: "Plank", sets: 3, time: "60-70 seconds", notes: "Aim for a longer plank duration with proper form.", image: "path/to/plank-image.jpg" },
                            { name: "Glute Bridges", sets: 3, reps: "25-30", notes: "Include single-leg variations for increased intensity.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Superman", sets: 3, reps: "20-25", notes: "Extend hold time and focus on back muscle engagement.", image: "path/to/superman-image.jpg" }
                        ]
                    },
                    /* Day 2 - Rest/Active Recovery */
                    {
                        day: 2,
                        name: "Rest/Active Recovery",
                        notes: "Engage in light stretching or a gentle walk.",
                        image: "path/to/rest-day-image.jpg"
                    },
                    /* Day 3 - Upper Body */
                    {
                        day: 3,
                        name: "Upper Body",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 3, reps: "18-20", notes: "Decrease the incline gradually.", image: "path/to/incline-push-ups-image.jpg" },
                            { name: "Pike Push-Ups", sets: 3, reps: "15-18", notes: "Increase the height of your hips for more difficulty.", image: "path/to/pike-push-ups-image.jpg" },
                            { name: "Tricep Dips", sets: 3, reps: "18-20", notes: "Perform dips with a full range of motion.", image: "path/to/tricep-dips-image.jpg" },
                            { name: "Plank to Shoulder Tap", sets: 3, reps: "18-20 (9 per side)", notes: "Maintain a steady and controlled movement.", image: "path/to/plank-to-shoulder-tap-image.jpg" }
                        ]
                    },
                    /* Day 4 - Rest/Active Recovery */
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        notes: "Light stretching or a gentle walk are beneficial.",
                        image: "path/to/rest-day-image2.jpg"
                    },
                    /* Day 5 - Lower Body */
                    {
                        day: 5,
                        name: "Lower Body",
                        exercises: [
                            { name: "Lunges", sets: 3, reps: "18-20 per leg", notes: "Try walking lunges for added intensity.", image: "path/to/lunges-image.jpg" },
                            { name: "Step-Ups", sets: 3, reps: "20-25 per leg", notes: "Increase the step height or use weights for more challenge.", image: "path/to/step-ups-image.jpg" },
                            { name: "Wall Sit", sets: 3, time: "60-70 seconds", notes: "Add weight or increase duration for more challenge.", image: "path/to/wall-sit-image.jpg" },
                            { name: "Calf Raises", sets: 3, reps: "25-30", notes: "Perform on one leg for increased difficulty.", image: "path/to/calf-raises-image.jpg" }
                        ]
                    },
                    /* Day 6 - Rest/Active Recovery */
                    {
                        day: 6,
                        name: "Rest/Active Recovery",
                        notes: "Gentle stretching or light yoga can aid in recovery.",
                        image: "path/to/rest-day-image3.jpg"
                    },
                    /* Day 7 - Rest */
                    {
                        day: 7,
                        name: "Rest",
                        notes: "Full rest day for recovery.",
                        image: "path/to/rest-day-image4.jpg"
                    }
                ]
            }
        ]

    },

    /* Advance exercise */

    {
        /* week-1 */
        week1: [
            {
                Days: [
                    /* Day 1 - Full Body */
                    {
                        day: 1,
                        name: "Full Body",
                        exercises: [
                            { name: "Push-Ups", sets: 4, reps: "15-20", notes: "Increase reps and slow down the pace for added difficulty.", image: "path/to/push-ups-image.jpg" },
                            { name: "Bodyweight Squats", sets: 4, reps: "20-25", notes: "Add a pause at the bottom and a jump at the top for extra intensity.", image: "path/to/bodyweight-squats-image.jpg" },
                            { name: "Plank", sets: 4, time: "40-60 seconds", notes: "Aim for longer durations with proper form.", image: "path/to/plank-image.jpg" },
                            { name: "Glute Bridges", sets: 4, reps: "20-25", notes: "Include single-leg variations for added difficulty.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Superman", sets: 4, reps: "20-25", notes: "Increase hold time at the top for more challenge.", image: "path/to/superman-image.jpg" }
                        ]
                    },
                    /* Day 2 - Rest/Active Recovery */
                    {
                        day: 2,
                        name: "Rest/Active Recovery",
                        notes: "Engage in activities like yoga, foam rolling, or a brisk walk.",
                        image: "path/to/rest-day-image.jpg"
                    },
                    /* Day 3 - Upper Body */
                    {
                        day: 3,
                        name: "Upper Body",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 4, reps: "15-20", notes: "Gradually decrease the incline for added difficulty.", image: "path/to/incline-push-ups-image.jpg" },
                            { name: "Tricep Dips (using a chair or bench)", sets: 4, reps: "15-20", notes: "Increase range of motion and control the movement.", image: "path/to/tricep-dips-image.jpg" },
                            { name: "Plank to Shoulder Tap", sets: 4, reps: "15-20 per side", notes: "Keep movements slow and controlled.", image: "path/to/plank-to-shoulder-tap-image.jpg" },
                            { name: "Pike Push-Ups", sets: 4, reps: "12-15", notes: "Increase the height of your hips for more intensity.", image: "path/to/pike-push-ups-image.jpg" },
                            { name: "Bicep Curls (with heavy weights or resistance bands)", sets: 4, reps: "15-20", notes: "Focus on full range of motion and control.", image: "path/to/bicep-curls-image.jpg" }
                        ]
                    },
                    /* Day 4 - Rest/Active Recovery */
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        notes: "Engage in activities like light stretching or yoga to aid recovery.",
                        image: "path/to/rest-day-image2.jpg"
                    },
                    /* Day 5 - Lower Body */
                    {
                        day: 5,
                        name: "Lower Body",
                        exercises: [
                            { name: "Lunges", sets: 4, reps: "15-20 per leg", notes: "Add weights or increase lunge depth for added intensity.", image: "path/to/lunges-image.jpg" },
                            { name: "Glute Bridges", sets: 4, reps: "20-25", notes: "Incorporate a pause at the top and single-leg variations.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Wall Sit", sets: 4, time: "50-60 seconds", notes: "Increase duration or add weights for more challenge.", image: "path/to/wall-sit-image.jpg" },
                            { name: "Step-Ups (using a high step or weights)", sets: 4, reps: "15-20 per leg", notes: "Use a higher step or add weights for increased difficulty.", image: "path/to/step-ups-image.jpg" },
                            { name: "Calf Raises", sets: 4, reps: "20-25", notes: "Perform on one leg or add weights for increased challenge.", image: "path/to/calf-raises-image.jpg" }
                        ]
                    },
                    /* Day 6 - Rest/Active Recovery */
                    {
                        day: 6,
                        name: "Rest/Active Recovery",
                        notes: "Focus on gentle stretching or a light activity for recovery.",
                        image: "path/to/rest-day-image3.jpg"
                    },
                    /* Day 7 - Rest */
                    {
                        day: 7,
                        name: "Rest",
                        notes: "Full rest day to allow for complete recovery.",
                        image: "path/to/rest-day-image4.jpg"
                    }
                ]
            }
        ],

        /* week-2 */
        week2: [
            {
                Days: [
                    /* Day 1 - Full Body */
                    {
                        day: 1,
                        name: "Full Body",
                        exercises: [
                            { name: "Push-Ups", sets: 4, reps: "20-25", notes: "Increase reps or slow down the pace for added challenge.", image: "path/to/push-ups-image.jpg" },
                            { name: "Bodyweight Squats", sets: 4, reps: "25-30", notes: "Add jump squats or single-leg variations for more intensity.", image: "path/to/bodyweight-squats-image.jpg" },
                            { name: "Plank", sets: 4, time: "50-60 seconds", notes: "Increase hold time for additional difficulty.", image: "path/to/plank-image.jpg" },
                            { name: "Glute Bridges", sets: 4, reps: "25-30", notes: "Incorporate single-leg variations and hold at the top.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Superman", sets: 4, reps: "25-30", notes: "Increase the hold time at the top for added challenge.", image: "path/to/superman-image.jpg" }
                        ]
                    },
                    /* Day 2 - Rest/Active Recovery */
                    {
                        day: 2,
                        name: "Rest/Active Recovery",
                        notes: "Engage in activities like stretching or light aerobic exercise.",
                        image: "path/to/rest-day-image.jpg"
                    },
                    /* Day 3 - Upper Body */
                    {
                        day: 3,
                        name: "Upper Body",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 4, reps: "20-25", notes: "Decrease the incline to increase difficulty.", image: "path/to/incline-push-ups-image.jpg" },
                            { name: "Pike Push-Ups", sets: 4, reps: "15-20", notes: "Increase difficulty by raising your hips higher.", image: "path/to/pike-push-ups-image.jpg" },
                            { name: "Tricep Dips", sets: 4, reps: "20-25", notes: "Perform with increased range of motion.", image: "path/to/tricep-dips-image.jpg" },
                            { name: "Plank to Shoulder Tap", sets: 4, reps: "20-25 per side", notes: "Keep movements slow and controlled.", image: "path/to/plank-to-shoulder-tap-image.jpg" }
                        ]
                    },
                    /* Day 4 - Rest/Active Recovery */
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        notes: "Engage in gentle yoga or stretching exercises.",
                        image: "path/to/rest-day-image2.jpg"
                    },
                    /* Day 5 - Lower Body */
                    {
                        day: 5,
                        name: "Lower Body",
                        exercises: [
                            { name: "Lunges", sets: 4, reps: "20-25 per leg", notes: "Increase depth or add weights for additional challenge.", image: "path/to/lunges-image.jpg" },
                            { name: "Step-Ups", sets: 4, reps: "20-25 per leg", notes: "Use a higher step or add weights for more intensity.", image: "path/to/step-ups-image.jpg" },
                            { name: "Wall Sit", sets: 4, time: "60-70 seconds", notes: "Increase duration or add weights for added difficulty.", image: "path/to/wall-sit-image.jpg" },
                            { name: "Calf Raises", sets: 4, reps: "25-30", notes: "Perform on one leg or with added weights for increased challenge.", image: "path/to/calf-raises-image.jpg" }
                        ]
                    },
                    /* Day 6 - Rest/Active Recovery */
                    {
                        day: 6,
                        name: "Rest/Active Recovery",
                        notes: "Engage in activities like light stretching or yoga.",
                        image: "path/to/rest-day-image3.jpg"
                    },
                    /* Day 7 - Rest */
                    {
                        day: 7,
                        name: "Rest",
                        notes: "Full rest day to aid in recovery.",
                        image: "path/to/rest-day-image4.jpg"
                    }
                ]
            }
        ],

        /* week-3 */
        week3: [
            {
                Days: [
                    /* Day 1 - Full Body */
                    {
                        day: 1,
                        name: "Full Body",
                        exercises: [
                            { name: "Push-Ups", sets: 4, reps: "25-30", notes: "Increase the number of reps or slow down the pace.", image: "path/to/push-ups-image.jpg" },
                            { name: "Bodyweight Squats", sets: 4, reps: "30-35", notes: "Add jump squats or perform single-leg variations.", image: "path/to/bodyweight-squats-image.jpg" },
                            { name: "Plank", sets: 4, time: "60-70 seconds", notes: "Hold for longer duration or perform advanced variations.", image: "path/to/plank-image.jpg" },
                            { name: "Glute Bridges", sets: 4, reps: "30-35", notes: "Include single-leg variations and pause at the top.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Superman", sets: 4, reps: "30-35", notes: "Increase hold time at the top for extra challenge.", image: "path/to/superman-image.jpg" }
                        ]
                    },
                    /* Day 2 - Rest/Active Recovery */
                    {
                        day: 2,
                        name: "Rest/Active Recovery",
                        notes: "Participate in light activities like stretching or a gentle walk.",
                        image: "path/to/rest-day-image.jpg"
                    },
                    /* Day 3 - Upper Body */
                    {
                        day: 3,
                        name: "Upper Body",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 4, reps: "25-30", notes: "Decrease the incline to increase difficulty.", image: "path/to/incline-push-ups-image.jpg" },
                            { name: "Tricep Dips", sets: 4, reps: "25-30", notes: "Increase the range of motion or add weights.", image: "path/to/tricep-dips-image.jpg" },
                            { name: "Pike Push-Ups", sets: 4, reps: "20-25", notes: "Raise your hips higher or add a pause at the bottom.", image: "path/to/pike-push-ups-image.jpg" },
                            { name: "Plank to Shoulder Tap", sets: 4, reps: "25-30 per side", notes: "Keep movements controlled and slow.", image: "path/to/plank-to-shoulder-tap-image.jpg" }
                        ]
                    },
                    /* Day 4 - Rest/Active Recovery */
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        notes: "Engage in stretching or yoga to aid in recovery.",
                        image: "path/to/rest-day-image2.jpg"
                    },
                    /* Day 5 - Lower Body */
                    {
                        day: 5,
                        name: "Lower Body",
                        exercises: [
                            { name: "Lunges", sets: 4, reps: "25-30 per leg", notes: "Increase depth or add weights for extra challenge.", image: "path/to/lunges-image.jpg" },
                            { name: "Step-Ups", sets: 4, reps: "25-30 per leg", notes: "Use a higher step or add weights for additional intensity.", image: "path/to/step-ups-image.jpg" },
                            { name: "Wall Sit", sets: 4, time: "70-80 seconds", notes: "Increase duration or use additional weights.", image: "path/to/wall-sit-image.jpg" },
                            { name: "Calf Raises", sets: 4, reps: "30-35", notes: "Perform on one leg or with added weights for more intensity.", image: "path/to/calf-raises-image.jpg" }
                        ]
                    },
                    /* Day 6 - Rest/Active Recovery */
                    {
                        day: 6,
                        name: "Rest/Active Recovery",
                        notes: "Engage in gentle activities like stretching or a light walk.",
                        image: "path/to/rest-day-image3.jpg"
                    },
                    /* Day 7 - Rest */
                    {
                        day: 7,
                        name: "Rest",
                        notes: "Full rest day for complete recovery.",
                        image: "path/to/rest-day-image4.jpg"
                    }
                ]
            }
        ],

        /* week-4 */
        week4: [
            {
                Days: [
                    /* Day 1 - Full Body */
                    {
                        day: 1,
                        name: "Full Body",
                        exercises: [
                            { name: "Push-Ups", sets: 4, reps: "30-35", notes: "Increase reps or slow down the pace for added challenge.", image: "path/to/push-ups-image.jpg" },
                            { name: "Bodyweight Squats", sets: 4, reps: "35-40", notes: "Add jump squats or perform single-leg variations.", image: "path/to/bodyweight-squats-image.jpg" },
                            { name: "Plank", sets: 4, time: "70-80 seconds", notes: "Hold for longer duration or perform advanced variations.", image: "path/to/plank-image.jpg" },
                            { name: "Glute Bridges", sets: 4, reps: "35-40", notes: "Include single-leg variations and hold at the top.", image: "path/to/glute-bridges-image.jpg" },
                            { name: "Superman", sets: 4, reps: "35-40", notes: "Increase hold time at the top for extra challenge.", image: "path/to/superman-image.jpg" }
                        ]
                    },
                    /* Day 2 - Rest/Active Recovery */
                    {
                        day: 2,
                        name: "Rest/Active Recovery",
                        notes: "Engage in light stretching or a brisk walk.",
                        image: "path/to/rest-day-image.jpg"
                    },
                    /* Day 3 - Upper Body */
                    {
                        day: 3,
                        name: "Upper Body",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 4, reps: "30-35", notes: "Decrease the incline to increase difficulty.", image: "path/to/incline-push-ups-image.jpg" },
                            { name: "Tricep Dips", sets: 4, reps: "30-35", notes: "Increase range of motion or add weights.", image: "path/to/tricep-dips-image.jpg" },
                            { name: "Pike Push-Ups", sets: 4, reps: "25-30", notes: "Raise your hips higher or add a pause at the bottom.", image: "path/to/pike-push-ups-image.jpg" },
                            { name: "Plank to Shoulder Tap", sets: 4, reps: "30-35 per side", notes: "Keep movements controlled and slow.", image: "path/to/plank-to-shoulder-tap-image.jpg" }
                        ]
                    },
                    /* Day 4 - Rest/Active Recovery */
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        notes: "Focus on stretching or yoga for recovery.",
                        image: "path/to/rest-day-image2.jpg"
                    },
                    /* Day 5 - Lower Body */
                    {
                        day: 5,
                        name: "Lower Body",
                        exercises: [
                            { name: "Lunges", sets: 4, reps: "30-35 per leg", notes: "Increase depth or add weights for extra challenge.", image: "path/to/lunges-image.jpg" },
                            { name: "Step-Ups", sets: 4, reps: "30-35 per leg", notes: "Use a higher step or add weights for more intensity.", image: "path/to/step-ups-image.jpg" },
                            { name: "Wall Sit", sets: 4, time: "80-90 seconds", notes: "Increase duration or add weights for increased difficulty.", image: "path/to/wall-sit-image.jpg" },
                            { name: "Calf Raises", sets: 4, reps: "35-40", notes: "Perform on one leg or with added weights for more intensity.", image: "path/to/calf-raises-image.jpg" }
                        ]
                    },
                    /* Day 6 - Rest/Active Recovery */
                    {
                        day: 6,
                        name: "Rest/Active Recovery",
                        notes: "Engage in gentle activities like light stretching or a walk.",
                        image: "path/to/rest-day-image3.jpg"
                    },
                    /* Day 7 - Rest */
                    {
                        day: 7,
                        name: "Rest",
                        notes: "Full rest day to allow for complete recovery.",
                        image: "path/to/rest-day-image4.jpg"
                    }
                ]
            }
        ]

    }
]


const WeightLoss = [

    /* beginner exercies */
    {
        /* week-1 */
        week1: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Jumping Jacks", time: "2 minutes" },
                            { name: "Bodyweight Squats", sets: 3, reps: 12 },
                            { name: "Push-Ups", sets: 3, reps: 8 },
                            { name: "Glute Bridges", sets: 3, reps: 15 },
                            { name: "Plank", sets: 3, time: "20 seconds" },
                            { name: "Mountain Climbers", sets: 3, time: "30 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "30 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Strength Training",
                        exercises: [
                            { name: "Arm Circles", time: "1 minute" },
                            { name: "Lunges", sets: 3, reps: 10, perLeg: true },
                            { name: "Dumbbell Rows", sets: 3, reps: 12, perArm: true },
                            { name: "Tricep Dips", sets: 3, reps: 10 },
                            { name: "Side Plank", sets: 3, time: "15 seconds", perSide: true }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "20 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Cardio",
                        exercises: [
                            { name: "High Knees", time: "1 minute" },
                            { name: "Jump Rope or Invisible Jump Rope", time: "20 minutes" },
                            { name: "Brisk Walking or Jogging", time: "10 minutes" }
                        ]
                    },
                    {
                        day: 6,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Dynamic Stretches", time: "2 minutes" },
                            { name: "Burpees", sets: 3, reps: 10 },
                            { name: "Bicycle Crunches", sets: 3, reps: 15, perSide: true },
                            { name: "Step-Ups", sets: 3, reps: 12, perLeg: true },
                            { name: "Russian Twists", sets: 3, reps: 20, perSide: true }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            },
        ],

        /* week-2 */
        week2: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Jump Rope or Invisible Jump Rope", time: "2 minutes" },
                            { name: "Bodyweight Squats", sets: 3, reps: 15 },
                            { name: "Push-Ups", sets: 3, reps: 10 },
                            { name: "Glute Bridges", sets: 3, reps: 20 },
                            { name: "Plank", sets: 3, time: "30 seconds" },
                            { name: "Mountain Climbers", sets: 3, time: "45 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "35 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Strength Training",
                        exercises: [
                            { name: "Arm Circles", time: "1 minute" },
                            { name: "Lunges", sets: 3, reps: 12, perLeg: true },
                            { name: "Dumbbell Rows", sets: 3, reps: 15, perArm: true },
                            { name: "Tricep Dips", sets: 3, reps: 12 },
                            { name: "Side Plank", sets: 3, time: "20 seconds", perSide: true }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "25 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Cardio",
                        exercises: [
                            { name: "High Knees", time: "1 minute" },
                            { name: "Jump Rope or Invisible Jump Rope", time: "25 minutes" },
                            { name: "Brisk Walking or Jogging", time: "15 minutes" }
                        ]
                    },
                    {
                        day: 6,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Dynamic Stretches", time: "2 minutes" },
                            { name: "Burpees", sets: 3, reps: 12 },
                            { name: "Bicycle Crunches", sets: 3, reps: 20, perSide: true },
                            { name: "Step-Ups", sets: 3, reps: 15, perLeg: true },
                            { name: "Russian Twists", sets: 3, reps: 25, perSide: true }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            },
        ],

        /* week-3 */
        week3: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Jump Rope or Invisible Jump Rope", time: "2 minutes" },
                            { name: "Bodyweight Squats", sets: 3, reps: 20 },
                            { name: "Push-Ups", sets: 3, reps: 12 },
                            { name: "Glute Bridges", sets: 3, reps: 25 },
                            { name: "Plank", sets: 3, time: "40 seconds" },
                            { name: "Mountain Climbers", sets: 3, time: "1 minute" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "40 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Strength Training",
                        exercises: [
                            { name: "Arm Circles", time: "1 minute" },
                            { name: "Lunges", sets: 3, reps: 15, perLeg: true },
                            { name: "Dumbbell Rows", sets: 3, reps: 20, perArm: true },
                            { name: "Tricep Dips", sets: 3, reps: 15 },
                            { name: "Side Plank", sets: 3, time: "30 seconds", perSide: true }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "30 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Cardio",
                        exercises: [
                            { name: "High Knees", time: "1 minute" },
                            { name: "Jump Rope or Invisible Jump Rope", time: "30 minutes" },
                            { name: "Brisk Walking or Jogging", time: "20 minutes" }
                        ]
                    },
                    {
                        day: 6,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Dynamic Stretches", time: "2 minutes" },
                            { name: "Burpees", sets: 3, reps: 15 },
                            { name: "Bicycle Crunches", sets: 3, reps: 25, perSide: true },
                            { name: "Step-Ups", sets: 3, reps: 20, perLeg: true },
                            { name: "Russian Twists", sets: 3, reps: 30, perSide: true }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            },
        ],

        /* week-4 */
        week4: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Jump Rope or Invisible Jump Rope", time: "2 minutes" },
                            { name: "Bodyweight Squats", sets: 3, reps: 25 },
                            { name: "Push-Ups", sets: 3, reps: 15 },
                            { name: "Glute Bridges", sets: 3, reps: 30 },
                            { name: "Plank", sets: 3, time: "50 seconds" },
                            { name: "Mountain Climbers", sets: 3, time: "1 minute 15 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "45 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Strength Training",
                        exercises: [
                            { name: "Arm Circles", time: "1 minute" },
                            { name: "Lunges", sets: 3, reps: 20, perLeg: true },
                            { name: "Dumbbell Rows", sets: 3, reps: 25, perArm: true },
                            { name: "Tricep Dips", sets: 3, reps: 20 },
                            { name: "Side Plank", sets: 3, time: "40 seconds", perSide: true }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "35 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Cardio",
                        exercises: [
                            { name: "High Knees", time: "1 minute" },
                            { name: "Jump Rope or Invisible Jump Rope", time: "35 minutes" },
                            { name: "Brisk Walking or Jogging", time: "25 minutes" }
                        ]
                    },
                    {
                        day: 6,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Dynamic Stretches", time: "2 minutes" },
                            { name: "Burpees", sets: 3, reps: 20 },
                            { name: "Bicycle Crunches", sets: 3, reps: 30, perSide: true },
                            { name: "Step-Ups", sets: 3, reps: 25, perLeg: true },
                            { name: "Russian Twists", sets: 3, reps: 35, perSide: true }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            },
        ]
    },

    /* intermediate exercise */

    {
        /* week-1 */
        week1: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Jumping Jacks", time: "3 minutes" },
                            { name: "Bodyweight Squats", sets: 4, reps: 15 },
                            { name: "Push-Ups", sets: 4, reps: 10 },
                            { name: "Glute Bridges", sets: 4, reps: 20 },
                            { name: "Plank", sets: 4, time: "30 seconds" },
                            { name: "Mountain Climbers", sets: 4, time: "45 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "35 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Strength Training",
                        exercises: [
                            { name: "Arm Circles", time: "1 minute" },
                            { name: "Lunges", sets: 4, reps: 12, perLeg: true },
                            { name: "Dumbbell Rows", sets: 4, reps: 15, perArm: true },
                            { name: "Tricep Dips", sets: 4, reps: 12 },
                            { name: "Side Plank", sets: 4, time: "20 seconds", perSide: true }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "25 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Cardio",
                        exercises: [
                            { name: "High Knees", time: "1 minute" },
                            { name: "Jump Rope or Invisible Jump Rope", time: "25 minutes" },
                            { name: "Brisk Walking or Jogging", time: "15 minutes" }
                        ]
                    },
                    {
                        day: 6,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Dynamic Stretches", time: "3 minutes" },
                            { name: "Burpees", sets: 4, reps: 12 },
                            { name: "Bicycle Crunches", sets: 4, reps: 20, perSide: true },
                            { name: "Step-Ups", sets: 4, reps: 15, perLeg: true },
                            { name: "Russian Twists", sets: 4, reps: 25, perSide: true }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            },
        ],

        /* week-2 */
        week2: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Jump Rope or Invisible Jump Rope", time: "3 minutes" },
                            { name: "Bodyweight Squats", sets: 4, reps: 18 },
                            { name: "Push-Ups", sets: 4, reps: 12 },
                            { name: "Glute Bridges", sets: 4, reps: 25 },
                            { name: "Plank", sets: 4, time: "40 seconds" },
                            { name: "Mountain Climbers", sets: 4, time: "1 minute" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "40 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Strength Training",
                        exercises: [
                            { name: "Arm Circles", time: "1 minute" },
                            { name: "Lunges", sets: 4, reps: 15, perLeg: true },
                            { name: "Dumbbell Rows", sets: 4, reps: 18, perArm: true },
                            { name: "Tricep Dips", sets: 4, reps: 15 },
                            { name: "Side Plank", sets: 4, time: "25 seconds", perSide: true }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "30 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Cardio",
                        exercises: [
                            { name: "High Knees", time: "1 minute" },
                            { name: "Jump Rope or Invisible Jump Rope", time: "30 minutes" },
                            { name: "Brisk Walking or Jogging", time: "20 minutes" }
                        ]
                    },
                    {
                        day: 6,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Dynamic Stretches", time: "3 minutes" },
                            { name: "Burpees", sets: 4, reps: 15 },
                            { name: "Bicycle Crunches", sets: 4, reps: 25, perSide: true },
                            { name: "Step-Ups", sets: 4, reps: 18, perLeg: true },
                            { name: "Russian Twists", sets: 4, reps: 30, perSide: true }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            },
        ],

        /* week-3 */
        week3: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Jump Rope or Invisible Jump Rope", time: "3 minutes" },
                            { name: "Bodyweight Squats", sets: 4, reps: 25 },
                            { name: "Push-Ups", sets: 4, reps: 15 },
                            { name: "Glute Bridges", sets: 4, reps: 30 },
                            { name: "Plank", sets: 4, time: "50 seconds" },
                            { name: "Mountain Climbers", sets: 4, time: "1 minute 15 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "45 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Strength Training",
                        exercises: [
                            { name: "Arm Circles", time: "1 minute" },
                            { name: "Lunges", sets: 4, reps: 18, perLeg: true },
                            { name: "Dumbbell Rows", sets: 4, reps: 20, perArm: true },
                            { name: "Tricep Dips", sets: 4, reps: 18 },
                            { name: "Side Plank", sets: 4, time: "35 seconds", perSide: true }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "35 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Cardio",
                        exercises: [
                            { name: "High Knees", time: "1 minute" },
                            { name: "Jump Rope or Invisible Jump Rope", time: "35 minutes" },
                            { name: "Brisk Walking or Jogging", time: "25 minutes" }
                        ]
                    },
                    {
                        day: 6,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Dynamic Stretches", time: "3 minutes" },
                            { name: "Burpees", sets: 4, reps: 18 },
                            { name: "Bicycle Crunches", sets: 4, reps: 30, perSide: true },
                            { name: "Step-Ups", sets: 4, reps: 25, perLeg: true },
                            { name: "Russian Twists", sets: 4, reps: 35, perSide: true }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            },
        ],

        /* week-4 */
        week4: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Jump Rope or Invisible Jump Rope", time: "3 minutes" },
                            { name: "Bodyweight Squats", sets: 4, reps: 30 },
                            { name: "Push-Ups", sets: 4, reps: 20 },
                            { name: "Glute Bridges", sets: 4, reps: 35 },
                            { name: "Plank", sets: 4, time: "1 minute" },
                            { name: "Mountain Climbers", sets: 4, time: "1 minute 30 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "50 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Strength Training",
                        exercises: [
                            { name: "Arm Circles", time: "1 minute" },
                            { name: "Lunges", sets: 4, reps: 25, perLeg: true },
                            { name: "Dumbbell Rows", sets: 4, reps: 25, perArm: true },
                            { name: "Tricep Dips", sets: 4, reps: 20 },
                            { name: "Side Plank", sets: 4, time: "40 seconds", perSide: true }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "40 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Cardio",
                        exercises: [
                            { name: "High Knees", time: "1 minute" },
                            { name: "Jump Rope or Invisible Jump Rope", time: "40 minutes" },
                            { name: "Brisk Walking or Jogging", time: "30 minutes" }
                        ]
                    },
                    {
                        day: 6,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Dynamic Stretches", time: "3 minutes" },
                            { name: "Burpees", sets: 4, reps: 20 },
                            { name: "Bicycle Crunches", sets: 4, reps: 35, perSide: true },
                            { name: "Step-Ups", sets: 4, reps: 30, perLeg: true },
                            { name: "Russian Twists", sets: 4, reps: 40, perSide: true }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            }
        ]


    },

    /* Advance exercise */

    {
        /* week-1 */
        week1: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Jump Rope or Invisible Jump Rope", time: "5 minutes" },
                            { name: "Bodyweight Squats", sets: 5, reps: 20 },
                            { name: "Push-Ups", sets: 5, reps: 15 },
                            { name: "Glute Bridges", sets: 5, reps: 25 },
                            { name: "Plank", sets: 5, time: "45 seconds" },
                            { name: "Mountain Climbers", sets: 5, time: "1 minute" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "45 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Strength Training",
                        exercises: [
                            { name: "Arm Circles", time: "1 minute" },
                            { name: "Lunges", sets: 5, reps: 15, perLeg: true },
                            { name: "Dumbbell Rows", sets: 5, reps: 20, perArm: true },
                            { name: "Tricep Dips", sets: 5, reps: 15 },
                            { name: "Side Plank", sets: 5, time: "30 seconds", perSide: true }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "30 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Cardio",
                        exercises: [
                            { name: "High Knees", time: "1 minute" },
                            { name: "Jump Rope or Invisible Jump Rope", time: "30 minutes" },
                            { name: "Brisk Walking or Jogging", time: "20 minutes" }
                        ]
                    },
                    {
                        day: 6,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Dynamic Stretches", time: "5 minutes" },
                            { name: "Burpees", sets: 5, reps: 15 },
                            { name: "Bicycle Crunches", sets: 5, reps: 25, perSide: true },
                            { name: "Step-Ups", sets: 5, reps: 20, perLeg: true },
                            { name: "Russian Twists", sets: 5, reps: 30, perSide: true }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            }
        ],

        /* week-2 */
        week2: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Jump Rope or Invisible Jump Rope", time: "5 minutes" },
                            { name: "Bodyweight Squats", sets: 5, reps: 25 },
                            { name: "Push-Ups", sets: 5, reps: 18 },
                            { name: "Glute Bridges", sets: 5, reps: 30 },
                            { name: "Plank", sets: 5, time: "1 minute" },
                            { name: "Mountain Climbers", sets: 5, time: "1 minute 15 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "50 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Strength Training",
                        exercises: [
                            { name: "Arm Circles", time: "1 minute" },
                            { name: "Lunges", sets: 5, reps: 18, perLeg: true },
                            { name: "Dumbbell Rows", sets: 5, reps: 22, perArm: true },
                            { name: "Tricep Dips", sets: 5, reps: 18 },
                            { name: "Side Plank", sets: 5, time: "35 seconds", perSide: true }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "35 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Cardio",
                        exercises: [
                            { name: "High Knees", time: "1 minute" },
                            { name: "Jump Rope or Invisible Jump Rope", time: "35 minutes" },
                            { name: "Brisk Walking or Jogging", time: "25 minutes" }
                        ]
                    },
                    {
                        day: 6,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Dynamic Stretches", time: "5 minutes" },
                            { name: "Burpees", sets: 5, reps: 18 },
                            { name: "Bicycle Crunches", sets: 5, reps: 30, perSide: true },
                            { name: "Step-Ups", sets: 5, reps: 25, perLeg: true },
                            { name: "Russian Twists", sets: 5, reps: 35, perSide: true }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            }
        ],

        /* week-3 */
        week3: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Jump Rope or Invisible Jump Rope", time: "5 minutes" },
                            { name: "Bodyweight Squats", sets: 5, reps: 30 },
                            { name: "Push-Ups", sets: 5, reps: 20 },
                            { name: "Glute Bridges", sets: 5, reps: 35 },
                            { name: "Plank", sets: 5, time: "1 minute 15 seconds" },
                            { name: "Mountain Climbers", sets: 5, time: "1 minute 30 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "55 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Strength Training",
                        exercises: [
                            { name: "Arm Circles", time: "1 minute" },
                            { name: "Lunges", sets: 5, reps: 20, perLeg: true },
                            { name: "Dumbbell Rows", sets: 5, reps: 25, perArm: true },
                            { name: "Tricep Dips", sets: 5, reps: 20 },
                            { name: "Side Plank", sets: 5, time: "40 seconds", perSide: true }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "40 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Cardio",
                        exercises: [
                            { name: "High Knees", time: "1 minute" },
                            { name: "Jump Rope or Invisible Jump Rope", time: "40 minutes" },
                            { name: "Brisk Walking or Jogging", time: "30 minutes" }
                        ]
                    },
                    {
                        day: 6,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Dynamic Stretches", time: "5 minutes" },
                            { name: "Burpees", sets: 5, reps: 20 },
                            { name: "Bicycle Crunches", sets: 5, reps: 35, perSide: true },
                            { name: "Step-Ups", sets: 5, reps: 30, perLeg: true },
                            { name: "Russian Twists", sets: 5, reps: 40, perSide: true }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            }
        ],

        /* week-4 */
        week4: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Jump Rope or Invisible Jump Rope", time: "5 minutes" },
                            { name: "Bodyweight Squats", sets: 5, reps: 35 },
                            { name: "Push-Ups", sets: 5, reps: 25 },
                            { name: "Glute Bridges", sets: 5, reps: 40 },
                            { name: "Plank", sets: 5, time: "1 minute 30 seconds" },
                            { name: "Mountain Climbers", sets: 5, time: "2 minutes" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "60 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Strength Training",
                        exercises: [
                            { name: "Arm Circles", time: "1 minute" },
                            { name: "Lunges", sets: 5, reps: 25, perLeg: true },
                            { name: "Dumbbell Rows", sets: 5, reps: 30, perArm: true },
                            { name: "Tricep Dips", sets: 5, reps: 25 },
                            { name: "Side Plank", sets: 5, time: "45 seconds", perSide: true }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "45 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Cardio",
                        exercises: [
                            { name: "High Knees", time: "1 minute" },
                            { name: "Jump Rope or Invisible Jump Rope", time: "45 minutes" },
                            { name: "Brisk Walking or Jogging", time: "35 minutes" }
                        ]
                    },
                    {
                        day: 6,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Dynamic Stretches", time: "5 minutes" },
                            { name: "Burpees", sets: 5, reps: 25 },
                            { name: "Bicycle Crunches", sets: 5, reps: 40, perSide: true },
                            { name: "Step-Ups", sets: 5, reps: 35, perLeg: true },
                            { name: "Russian Twists", sets: 5, reps: 45, perSide: true }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            }
        ]


    }
]


const MuscleBuild = [

    /* beginner exercies */
    {
        /* week-1 */
        week1: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Bodyweight Squats", sets: 3, reps: 12 },
                            { name: "Push-Ups", sets: 3, reps: 8 },
                            { name: "Glute Bridges", sets: 3, reps: 15 },
                            { name: "Plank", sets: 3, time: "20 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "2 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "30 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Upper Body Focus",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 3, reps: 10 },
                            { name: "Tricep Dips", sets: 3, reps: 10 },
                            { name: "Arm Circles", sets: 2, time: "1 minute each direction" }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "20-30 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Lower Body Focus",
                        exercises: [
                            { name: "Lunges", sets: 3, reps: 10, perLeg: true },
                            { name: "Step-Ups", sets: 3, reps: 10, perLeg: true },
                            { name: "Calf Raises", sets: 3, reps: 15 }
                        ]
                    },
                    {
                        day: 6,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "20-30 minutes" }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            },
        ],

        /* week-2 */
        week2: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Bodyweight Squats", sets: 3, reps: 15 },
                            { name: "Push-Ups", sets: 3, reps: 10 },
                            { name: "Glute Bridges", sets: 3, reps: 20 },
                            { name: "Plank", sets: 3, time: "30 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "25-35 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Upper Body Focus",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 3, reps: 12 },
                            { name: "Tricep Dips", sets: 3, reps: 12 },
                            { name: "Arm Circles", sets: 2, time: "1 minute each direction" }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "25-30 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Lower Body Focus",
                        exercises: [
                            { name: "Lunges", sets: 3, reps: 12, perLeg: true },
                            { name: "Step-Ups", sets: 3, reps: 12, perLeg: true },
                            { name: "Calf Raises", sets: 3, reps: 20 }
                        ]
                    },
                    {
                        day: 6,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "25-35 minutes" }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            },
        ],

        /* week-3 */
        week3: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Bodyweight Squats", sets: 4, reps: 15 },
                            { name: "Push-Ups", sets: 4, reps: 12 },
                            { name: "Glute Bridges", sets: 4, reps: 20 },
                            { name: "Plank", sets: 4, time: "35 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "30-40 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Upper Body Focus",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 4, reps: 15 },
                            { name: "Tricep Dips", sets: 4, reps: 15 },
                            { name: "Arm Circles", sets: 2, time: "1 minute each direction" }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "30-35 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Lower Body Focus",
                        exercises: [
                            { name: "Lunges", sets: 4, reps: 15, perLeg: true },
                            { name: "Step-Ups", sets: 4, reps: 15, perLeg: true },
                            { name: "Calf Raises", sets: 4, reps: 20 }
                        ]
                    },
                    {
                        day: 6,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "30-40 minutes" }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            },
        ],

        /* week-4 */
        week4: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Bodyweight Squats", sets: 4, reps: 20 },
                            { name: "Push-Ups", sets: 4, reps: 15 },
                            { name: "Glute Bridges", sets: 4, reps: 25 },
                            { name: "Plank", sets: 4, time: "40 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "35-45 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Upper Body Focus",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 4, reps: 20 },
                            { name: "Tricep Dips", sets: 4, reps: 20 },
                            { name: "Arm Circles", sets: 2, time: "1 minute each direction" }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "35-40 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Lower Body Focus",
                        exercises: [
                            { name: "Lunges", sets: 4, reps: 18, perLeg: true },
                            { name: "Step-Ups", sets: 4, reps: 18, perLeg: true },
                            { name: "Calf Raises", sets: 4, reps: 25 }
                        ]
                    },
                    {
                        day: 6,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "35-45 minutes" }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            },
        ]
    },

    /* intermediate exercise */

    {
        week1: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Bodyweight Squats", sets: 4, reps: 15 },
                            { name: "Push-Ups", sets: 4, reps: 12 },
                            { name: "Glute Bridges", sets: 4, reps: 20 },
                            { name: "Plank", sets: 4, time: "30 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Marching in Place", time: "5 minutes" },
                            { name: "Brisk Walking or Jogging in Place", time: "30-40 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Upper Body Focus",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 4, reps: 12 },
                            { name: "Tricep Dips", sets: 4, reps: 12 },
                            { name: "Arm Circles", sets: 3, time: "1 minute each direction" }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "30 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Lower Body Focus",
                        exercises: [
                            { name: "Lunges", sets: 4, reps: 12, perLeg: true },
                            { name: "Step-Ups", sets: 4, reps: 12, perLeg: true },
                            { name: "Calf Raises", sets: 4, reps: 20 }
                        ]
                    },
                    {
                        day: 6,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "30-40 minutes" }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            }
        ],
        week2: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Bodyweight Squats", sets: 4, reps: 20 },
                            { name: "Push-Ups", sets: 4, reps: 15 },
                            { name: "Glute Bridges", sets: 4, reps: 25 },
                            { name: "Plank", sets: 4, time: "40 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "35-45 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Upper Body Focus",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 4, reps: 15 },
                            { name: "Tricep Dips", sets: 4, reps: 15 },
                            { name: "Arm Circles", sets: 3, time: "1 minute each direction" }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "30-35 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Lower Body Focus",
                        exercises: [
                            { name: "Lunges", sets: 4, reps: 15, perLeg: true },
                            { name: "Step-Ups", sets: 4, reps: 15, perLeg: true },
                            { name: "Calf Raises", sets: 4, reps: 25 }
                        ]
                    },
                    {
                        day: 6,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "35-45 minutes" }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            }
        ],
        week3: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Bodyweight Squats", sets: 4, reps: 25 },
                            { name: "Push-Ups", sets: 4, reps: 20 },
                            { name: "Glute Bridges", sets: 4, reps: 30 },
                            { name: "Plank", sets: 4, time: "50 seconds" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "40-50 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Upper Body Focus",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 4, reps: 20 },
                            { name: "Tricep Dips", sets: 4, reps: 20 },
                            { name: "Arm Circles", sets: 3, time: "1 minute each direction" }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "35-40 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Lower Body Focus",
                        exercises: [
                            { name: "Lunges", sets: 4, reps: 18, perLeg: true },
                            { name: "Step-Ups", sets: 4, reps: 18, perLeg: true },
                            { name: "Calf Raises", sets: 4, reps: 25 }
                        ]
                    },
                    {
                        day: 6,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "40-50 minutes" }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            }
        ],
        week4: [
            {
                Days: [
                    {
                        day: 1,
                        name: "Full Body Workout",
                        exercises: [
                            { name: "Bodyweight Squats", sets: 4, reps: 30 },
                            { name: "Push-Ups", sets: 4, reps: 25 },
                            { name: "Glute Bridges", sets: 4, reps: 35 },
                            { name: "Plank", sets: 4, time: "1 minute" }
                        ]
                    },
                    {
                        day: 2,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "45-55 minutes" }
                        ]
                    },
                    {
                        day: 3,
                        name: "Upper Body Focus",
                        exercises: [
                            { name: "Incline Push-Ups", sets: 4, reps: 25 },
                            { name: "Tricep Dips", sets: 4, reps: 25 },
                            { name: "Arm Circles", sets: 3, time: "1 minute each direction" }
                        ]
                    },
                    {
                        day: 4,
                        name: "Rest/Active Recovery",
                        exercises: [
                            { name: "Gentle Yoga or Stretching", time: "40 minutes" }
                        ]
                    },
                    {
                        day: 5,
                        name: "Lower Body Focus",
                        exercises: [
                            { name: "Lunges", sets: 4, reps: 20, perLeg: true },
                            { name: "Step-Ups", sets: 4, reps: 20, perLeg: true },
                            { name: "Calf Raises", sets: 4, reps: 30 }
                        ]
                    },
                    {
                        day: 6,
                        name: "Cardio",
                        exercises: [
                            { name: "Brisk Walking or Jogging", time: "45-55 minutes" }
                        ]
                    },
                    {
                        day: 7,
                        name: "Rest"
                    }
                ]
            }
        ]

    },

    /* Advance exercise */

    {
       week1: [
    {
        Days: [
            {
                day: 1,
                name: "Full Body Workout",
                exercises: [
                    { name: "Bodyweight Squats", sets: 5, reps: 20 },
                    { name: "Push-Ups", sets: 5, reps: 15 },
                    { name: "Glute Bridges", sets: 5, reps: 25 },
                    { name: "Plank", sets: 5, time: "45 seconds" },
                    { name: "Burpees", sets: 4, reps: 15 }
                ]
            },
            {
                day: 2,
                name: "Cardio",
                exercises: [
                    { name: "Brisk Walking or Jogging", time: "40-50 minutes" }
                ]
            },
            {
                day: 3,
                name: "Upper Body Focus",
                exercises: [
                    { name: "Incline Push-Ups", sets: 5, reps: 15 },
                    { name: "Tricep Dips", sets: 5, reps: 15 },
                    { name: "Diamond Push-Ups", sets: 4, reps: 12 },
                    { name: "Arm Circles", sets: 4, time: "1 minute each direction" }
                ]
            },
            {
                day: 4,
                name: "Rest/Active Recovery",
                exercises: [
                    { name: "Gentle Yoga or Stretching", time: "45 minutes" }
                ]
            },
            {
                day: 5,
                name: "Lower Body Focus",
                exercises: [
                    { name: "Lunges", sets: 5, reps: 15, perLeg: true },
                    { name: "Step-Ups", sets: 5, reps: 15, perLeg: true },
                    { name: "Calf Raises", sets: 5, reps: 25 },
                    { name: "Single-Leg Deadlifts", sets: 4, reps: 15, perLeg: true }
                ]
            },
            {
                day: 6,
                name: "Cardio",
                exercises: [
                    { name: "Brisk Walking or Jogging", time: "40-50 minutes" }
                ]
            },
            {
                day: 7,
                name: "Rest"
            }
        ]
    }
],

week2: [
    {
        Days: [
            {
                day: 1,
                name: "Full Body Workout",
                exercises: [
                    { name: "Bodyweight Squats", sets: 5, reps: 25 },
                    { name: "Push-Ups", sets: 5, reps: 20 },
                    { name: "Glute Bridges", sets: 5, reps: 30 },
                    { name: "Plank", sets: 5, time: "1 minute" },
                    { name: "Burpees", sets: 5, reps: 20 }
                ]
            },
            {
                day: 2,
                name: "Cardio",
                exercises: [
                    { name: "Brisk Walking or Jogging", time: "45-55 minutes" }
                ]
            },
            {
                day: 3,
                name: "Upper Body Focus",
                exercises: [
                    { name: "Incline Push-Ups", sets: 5, reps: 20 },
                    { name: "Tricep Dips", sets: 5, reps: 20 },
                    { name: "Diamond Push-Ups", sets: 5, reps: 15 },
                    { name: "Arm Circles", sets: 4, time: "1 minute each direction" }
                ]
            },
            {
                day: 4,
                name: "Rest/Active Recovery",
                exercises: [
                    { name: "Gentle Yoga or Stretching", time: "45-50 minutes" }
                ]
            },
            {
                day: 5,
                name: "Lower Body Focus",
                exercises: [
                    { name: "Lunges", sets: 5, reps: 20, perLeg: true },
                    { name: "Step-Ups", sets: 5, reps: 20, perLeg: true },
                    { name: "Calf Raises", sets: 5, reps: 30 },
                    { name: "Single-Leg Deadlifts", sets: 4, reps: 18, perLeg: true }
                ]
            },
            {
                day: 6,
                name: "Cardio",
                exercises: [
                    { name: "Brisk Walking or Jogging", time: "45-55 minutes" }
                ]
            },
            {
                day: 7,
                name: "Rest"
            }
        ]
    }
],

week3: [
    {
        Days: [
            {
                day: 1,
                name: "Full Body Workout",
                exercises: [
                    { name: "Bodyweight Squats", sets: 5, reps: 30 },
                    { name: "Push-Ups", sets: 5, reps: 25 },
                    { name: "Glute Bridges", sets: 5, reps: 35 },
                    { name: "Plank", sets: 5, time: "1 minute 15 seconds" },
                    { name: "Burpees", sets: 5, reps: 25 }
                ]
            },
            {
                day: 2,
                name: "Cardio",
                exercises: [
                    { name: "Brisk Walking or Jogging", time: "50-60 minutes" }
                ]
            },
            {
                day: 3,
                name: "Upper Body Focus",
                exercises: [
                    { name: "Incline Push-Ups", sets: 5, reps: 25 },
                    { name: "Tricep Dips", sets: 5, reps: 25 },
                    { name: "Diamond Push-Ups", sets: 5, reps: 20 },
                    { name: "Arm Circles", sets: 4, time: "1 minute each direction" }
                ]
            },
            {
                day: 4,
                name: "Rest/Active Recovery",
                exercises: [
                    { name: "Gentle Yoga or Stretching", time: "50 minutes" }
                ]
            },
            {
                day: 5,
                name: "Lower Body Focus",
                exercises: [
                    { name: "Lunges", sets: 5, reps: 25, perLeg: true },
                    { name: "Step-Ups", sets: 5, reps: 25, perLeg: true },
                    { name: "Calf Raises", sets: 5, reps: 35 },
                    { name: "Single-Leg Deadlifts", sets: 4, reps: 20, perLeg: true }
                ]
            },
            {
                day: 6,
                name: "Cardio",
                exercises: [
                    { name: "Brisk Walking or Jogging", time: "50-60 minutes" }
                ]
            },
            {
                day: 7,
                name: "Rest"
            }
        ]
    }
],

week4: [
    {
        Days: [
            {
                day: 1,
                name: "Full Body Workout",
                exercises: [
                    { name: "Bodyweight Squats", sets: 5, reps: 35 },
                    { name: "Push-Ups", sets: 5, reps: 30 },
                    { name: "Glute Bridges", sets: 5, reps: 40 },
                    { name: "Plank", sets: 5, time: "1 minute 30 seconds" },
                    { name: "Burpees", sets: 5, reps: 30 }
                ]
            },
            {
                day: 2,
                name: "Cardio",
                exercises: [
                    { name: "Brisk Walking or Jogging", time: "55-65 minutes" }
                ]
            },
            {
                day: 3,
                name: "Upper Body Focus",
                exercises: [
                    { name: "Incline Push-Ups", sets: 5, reps: 30 },
                    { name: "Tricep Dips", sets: 5, reps: 30 },
                    { name: "Diamond Push-Ups", sets: 5, reps: 25 },
                    { name: "Arm Circles", sets: 4, time: "1 minute each direction" }
                ]
            },
            {
                day: 4,
                name: "Rest/Active Recovery",
                exercises: [
                    { name: "Gentle Yoga or Stretching", time: "50 minutes" }
                ]
            },
            {
                day: 5,
                name: "Lower Body Focus",
                exercises: [
                    { name: "Lunges", sets: 5, reps: 30, perLeg: true },
                    { name: "Step-Ups", sets: 5, reps: 30, perLeg: true },
                    { name: "Calf Raises", sets: 5, reps: 40 },
                    { name: "Single-Leg Deadlifts", sets: 4, reps: 25, perLeg: true }
                ]
            },
            {
                day: 6,
                name: "Cardio",
                exercises: [
                    { name: "Brisk Walking or Jogging", time: "55-65 minutes" }
                ]
            },
            {
                day: 7,
                name: "Rest"
            }
        ]
    }
]



    }
]




const StressFree = [

    {
        week1: [
            {
                Days:[
            {
                day: 1,
                name: "Gentle Yoga Session",
                exercises: [
                    { name: "Cat-Cow Stretch", time: "2 minutes" },
                    { name: "Child's Pose", time: "2 minutes" },
                    { name: "Downward Dog", time: "2 minutes" },
                    { name: "Seated Forward Bend", time: "2 minutes" },
                    { name: "Savasana (Corpse Pose)", time: "5 minutes" }
                ]
            },
            {
                day: 2,
                name: "Stretching Routine",
                exercises: [
                    { name: "Neck Stretches", time: "2 minutes" },
                    { name: "Shoulder Stretch", time: "2 minutes" },
                    { name: "Upper Back Stretch", time: "2 minutes" },
                    { name: "Hamstring Stretch", time: "2 minutes" },
                    { name: "Quadriceps Stretch", time: "2 minutes" }
                ]
            },
            {
                day: 3,
                name: "Gentle Pilates",
                exercises: [
                    { name: "Pelvic Tilts", sets: 2, reps: 10 },
                    { name: "Bridging", sets: 2, reps: 10 },
                    { name: "Single Leg Stretch", sets: 2, reps: 10, perLeg: true },
                    { name: "Spine Stretch Forward", time: "2 minutes" },
                    { name: "Resting Position", time: "2 minutes" }
                ]
            },
            {
                day: 4,
                name: "Mindful Breathing and Stretching",
                exercises: [
                    { name: "Deep Breathing Exercises", time: "5 minutes" },
                    { name: "Side Stretch", time: "2 minutes each side" },
                    { name: "Standing Forward Bend", time: "2 minutes" },
                    { name: "Torso Twist", time: "2 minutes each side" }
                ]
            },
            {
                day: 5,
                name: "Relaxing Walk",
                exercises: [
                    { name: "Leisurely Walk in Nature", time: "30 minutes" }
                ]
            },
            {
                day: 6,
                name: "Gentle Movement",
                exercises: [
                    { name: "Tai Chi Movements", time: "20 minutes" },
                    { name: "Gentle Stretching", time: "10 minutes" }
                ]
            },
            {
                day: 7,
                name: "Rest and Recovery",
                exercises: [
                    { name: "Self-Care Activities", time: "Flexible" }
                ]
            }
        ]
        }
        ],
        week2: [
            {
                Days:[
            {
                day: 1,
                name: "Gentle Yoga Session",
                exercises: [
                    { name: "Cat-Cow Stretch", time: "2 minutes" },
                    { name: "Child's Pose", time: "2 minutes" },
                    { name: "Downward Dog", time: "2 minutes" },
                    { name: "Seated Forward Bend", time: "2 minutes" },
                    { name: "Savasana (Corpse Pose)", time: "5 minutes" }
                ]
            },
            {
                day: 2,
                name: "Stretching Routine",
                exercises: [
                    { name: "Neck Stretches", time: "2 minutes" },
                    { name: "Shoulder Stretch", time: "2 minutes" },
                    { name: "Upper Back Stretch", time: "2 minutes" },
                    { name: "Hamstring Stretch", time: "2 minutes" },
                    { name: "Quadriceps Stretch", time: "2 minutes" }
                ]
            },
            {
                day: 3,
                name: "Gentle Pilates",
                exercises: [
                    { name: "Pelvic Tilts", sets: 2, reps: 12 },
                    { name: "Bridging", sets: 2, reps: 12 },
                    { name: "Single Leg Stretch", sets: 2, reps: 12, perLeg: true },
                    { name: "Spine Stretch Forward", time: "2 minutes" },
                    { name: "Resting Position", time: "2 minutes" }
                ]
            },
            {
                day: 4,
                name: "Mindful Breathing and Stretching",
                exercises: [
                    { name: "Deep Breathing Exercises", time: "5 minutes" },
                    { name: "Side Stretch", time: "2 minutes each side" },
                    { name: "Standing Forward Bend", time: "2 minutes" },
                    { name: "Torso Twist", time: "2 minutes each side" }
                ]
            },
            {
                day: 5,
                name: "Relaxing Walk",
                exercises: [
                    { name: "Leisurely Walk in Nature", time: "35 minutes" }
                ]
            },
            {
                day: 6,
                name: "Gentle Movement",
                exercises: [
                    { name: "Tai Chi Movements", time: "25 minutes" },
                    { name: "Gentle Stretching", time: "10 minutes" }
                ]
            },
            {
                day: 7,
                name: "Rest and Recovery",
                exercises: [
                    { name: "Self-Care Activities", time: "Flexible" }
                ]
            }
        ]
        }
        ],
        week3: [
            {
                Days:[
            {
                day: 1,
                name: "Gentle Yoga Session",
                exercises: [
                    { name: "Cat-Cow Stretch", time: "3 minutes" },
                    { name: "Child's Pose", time: "3 minutes" },
                    { name: "Downward Dog", time: "3 minutes" },
                    { name: "Seated Forward Bend", time: "3 minutes" },
                    { name: "Savasana (Corpse Pose)", time: "5 minutes" }
                ]
            },
            {
                day: 2,
                name: "Stretching Routine",
                exercises: [
                    { name: "Neck Stretches", time: "3 minutes" },
                    { name: "Shoulder Stretch", time: "3 minutes" },
                    { name: "Upper Back Stretch", time: "3 minutes" },
                    { name: "Hamstring Stretch", time: "3 minutes" },
                    { name: "Quadriceps Stretch", time: "3 minutes" }
                ]
            },
            {
                day: 3,
                name: "Gentle Pilates",
                exercises: [
                    { name: "Pelvic Tilts", sets: 2, reps: 15 },
                    { name: "Bridging", sets: 2, reps: 15 },
                    { name: "Single Leg Stretch", sets: 2, reps: 15, perLeg: true },
                    { name: "Spine Stretch Forward", time: "3 minutes" },
                    { name: "Resting Position", time: "3 minutes" }
                ]
            },
            {
                day: 4,
                name: "Mindful Breathing and Stretching",
                exercises: [
                    { name: "Deep Breathing Exercises", time: "5 minutes" },
                    { name: "Side Stretch", time: "3 minutes each side" },
                    { name: "Standing Forward Bend", time: "3 minutes" },
                    { name: "Torso Twist", time: "3 minutes each side" }
                ]
            },
            {
                day: 5,
                name: "Relaxing Walk",
                exercises: [
                    { name: "Leisurely Walk in Nature", time: "40 minutes" }
                ]
            },
            {
                day: 6,
                name: "Gentle Movement",
                exercises: [
                    { name: "Tai Chi Movements", time: "30 minutes" },
                    { name: "Gentle Stretching", time: "10 minutes" }
                ]
            },
            {
                day: 7,
                name: "Rest and Recovery",
                exercises: [
                    { name: "Self-Care Activities", time: "Flexible" }
                ]
            }
                ]
        }
        ],
        week4: [
            {
                Days:[
            {
                day: 1,
                name: "Gentle Yoga Session",
                exercises: [
                    { name: "Cat-Cow Stretch", time: "3 minutes" },
                    { name: "Child's Pose", time: "3 minutes" },
                    { name: "Downward Dog", time: "3 minutes" },
                    { name: "Seated Forward Bend", time: "3 minutes" },
                    { name: "Savasana (Corpse Pose)", time: "7 minutes" }
                ]
            },
            {
                day: 2,
                name: "Stretching Routine",
                exercises: [
                    { name: "Neck Stretches", time: "3 minutes" },
                    { name: "Shoulder Stretch", time: "3 minutes" },
                    { name: "Upper Back Stretch", time: "3 minutes" },
                    { name: "Hamstring Stretch", time: "3 minutes" },
                    { name: "Quadriceps Stretch", time: "3 minutes" }
                ]
            },
            {
                day: 3,
                name: "Gentle Pilates",
                exercises: [
                    { name: "Pelvic Tilts", sets: 2, reps: 15 },
                    { name: "Bridging", sets: 2, reps: 15 },
                    { name: "Single Leg Stretch", sets: 2, reps: 15, perLeg: true },
                    { name: "Spine Stretch Forward", time: "3 minutes" },
                    { name: "Resting Position", time: "3 minutes" }
                ]
            },
            {
                day: 4,
                name: "Mindful Breathing and Stretching",
                exercises: [
                    { name: "Deep Breathing Exercises", time: "5 minutes" },
                    { name: "Side Stretch", time: "3 minutes each side" },
                    { name: "Standing Forward Bend", time: "3 minutes" },
                    { name: "Torso Twist", time: "3 minutes each side" }
                ]
            },
            {
                day: 5,
                name: "Relaxing Walk",
                exercises: [
                    { name: "Leisurely Walk in Nature", time: "45 minutes" }
                ]
            },
            {
                day: 6,
                name: "Gentle Movement",
                exercises: [
                    { name: "Tai Chi Movements", time: "35 minutes" },
                    { name: "Gentle Stretching", time: "10 minutes" }
                ]
            },
            {
                day: 7,
                name: "Rest and Recovery",
                exercises: [
                    { name: "Self-Care Activities", time: "Flexible" }
                ]
            }
        ]
        }
        ]
    }
   
]




const getUrl = window.location;
const url = new URL(getUrl);
const id = url.searchParams.get('id');

let selected = document.querySelectorAll('.ExerciseLeve');
let levels = document.getElementById('exerciseplan')
let title = document.getElementById('titel');
let days = document.getElementById('beginnerExercisesday');
let week = document.getElementById('week')
let weekContainer = document.getElementById('week');
let Exercisesday = document.getElementById('beginnerExercisesday');
let exe = document.getElementById('exercises');

for (let index = 0; index < selected.length; index++) {
    selected[index].addEventListener('click', () => {
        title.style.display = 'none';
        levels.style.display = 'none';
        weekContainer.style.display = 'flex';
        days.style.display = 'block';
        value = index;
        getId(value)
    })
}

function getId(ID) {
    if (id == 0 && ID == 0) {
        struct(WeightGain[0])
    } else if (id == 0 && ID == 1) {
        struct(WeightGain[1])
    } else if (id == 0 && ID == 2) {
        struct(WeightGain[2])
    }
    else if (id == 1 && ID == 0) {
        struct(WeightLoss[0])
    } else if (id == 1 && ID == 1) {
        struct(WeightLoss[1])
    } else if (id == 1 && ID == 2) {
        struct(WeightLoss[2])
    }
    else if (id == 2 && ID == 0) {
        struct(MuscleBuild[0])
    } else if (id == 2 && ID == 1) {
        struct(MuscleBuild[1])
    } else if (id == 2 && ID == 2) {
        struct(MuscleBuild[2])
    }
    else if (id == 3 && ID == 0) {
        struct(StressFree[0])
    }
}



function struct(val) {
    console.log(val);


    weekContainer.innerHTML = '';
    Exercisesday.innerHTML = '';
    exe.innerHTML = '';

    let Exeday = val.week1[0].Days;

    let Daycontainer;
    /* Days Structure creating */
    let header
    for (let i = 0; i < Exeday.length; i++) {
        const dayobj = Exeday[i];

        Daycontainer = document.getElementById('beginnerExercisesday');
        const exerciseDayDiv = document.createElement('div');
        exerciseDayDiv.className = 'exercise-day';

        header = document.createElement('h3');
        header.textContent = `Day : ${dayobj.day} ${dayobj.name}`;
        exerciseDayDiv.appendChild(header);

        Daycontainer.appendChild(exerciseDayDiv);
    }

    let Exercise = val.week1[0].Days[0].exercises

    const Execontainer = document.getElementById('exercisepage');


    // Create and append Exercise divs
    // let number = 5
    function ChangeData() {
        Execontainer.innerHTML = "";
        if (Exercise && Exercise.length > 0) {
            for (let i = 0; i < Exercise.length; i++) {
                const exeobj = Exercise[i]
                // console.log(Exercise[i]);

                // name: "Push-Ups",
                // sets: 3,
                // reps: "10-12",
                const exerciseDiv = document.createElement('div');
                exerciseDiv.className = 'Exercise';
                // Create and append the image
                const img = document.createElement('img');
                img.src = exeobj.image;
                img.alt = `Exercise`;
                exerciseDiv.appendChild(img);

                // Create and append the details div
                const detailsDiv = document.createElement('div');
                detailsDiv.className = 'Exedetails';

                // Create and append the heading
                const heading = document.createElement('h5');
                heading.textContent = exeobj.name;
                detailsDiv.appendChild(heading);

                // Create and append the paragraph
                const detailParagraph = document.createElement('p');
                detailParagraph.textContent = `Sets : ${exeobj.sets} Reps : ${exeobj.reps || exeobj.time}`;
                detailsDiv.appendChild(detailParagraph);

                exerciseDiv.appendChild(detailsDiv);

                Execontainer.appendChild(exerciseDiv);
            }
        } else {
            alert('Focus on light stretching or a short walk to keep your body active.');
            Execontainer.style.display = 'none';
            Exeheader.style.display = 'none';
            Daycontainer.style.display = 'block';
            week.style.display = 'flex';

        }
    }
    ChangeData();

    // Create the ExerciseWeeks structure using JavaScript


    // Back to menu button (using FontAwesome icon)
    const backButton1 = document.createElement('i');
    backButton1.className = 'fa-solid fa-arrow-left';
    backButton1.onclick = goBackToLevel1;
    weekContainer.appendChild(backButton1);

    // Week buttons
    const weeks = ["1 Week", "2 Week", "3 Week", "4 Week"];

    weeks.forEach((week, index) => {
        const button = document.createElement('button');
        button.className = 'week';
        button.textContent = week;

        // Set the first button as active
        if (index == 0) {
            button.classList.add('active');
        }

        // Add event listener to handle click
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            weekbtn = document.querySelectorAll('.week');
            weekbtn.forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');
            // console.log(week);

            if (index == 0) {
                Exeday = val.week1[0].Days;
                Exercise = val.week1[0].Days[0].exercises
            }
            else if (index == 1) {
                Exeday = val.week2[0].Days;
                Exercise = val.week2[0].Days[0].exercises
            }
            else if (index == 2) {
                Exeday = val.week3[0].Days;
                Exercise = val.week3[0].Days[0].exercises

            }
            else if (index == 3) {
                Exeday = val.week4[0].Days;
                Exercise = val.week4[0].Days[0].exercises

            }
            ChangeData()
        });

        weekContainer.appendChild(button);
    });



    /* back button function */
    function goBackToLevel1() {
        title.style.display = 'block';
        levels.style.display = 'block';
        weekContainer.style.display = 'none';
        days.style.display = 'none';

        // Remove active class from all buttons
        document.querySelectorAll('.week').forEach(btn => btn.classList.remove('active'));

        // Add active class to the first button
        const firstButton = document.querySelector('.week');
        if (firstButton) {
            firstButton.classList.add('active');
        }

    }



    /* Exercises sttructure creating */


    // Get the container to append the elements

    const Exeheader = document.getElementById('exercises');

    // Create and append the arrow icon
    const backButton = document.createElement('i');
    backButton.className = 'fa-solid fa-arrow-left';
    backButton.onclick = goBackToLeve2;
    Exeheader.appendChild(backButton);


    // Create and append the paragraph
    const paragraph = document.createElement('h5');
    paragraph.className = 'ExeciseDayWeek';
    paragraph.textContent = 'Exercise Day Week';
    Exeheader.appendChild(paragraph);

    // Create and append the "Start Now" button
    const startButton = document.createElement('button');
    startButton.textContent = 'Start Now';
    Exeheader.appendChild(startButton);







    let DayExercises = document.querySelectorAll('.exercise-day');
    DayExercises.forEach((element, IndexVal) => {
        element.addEventListener('click', () => {
            Execontainer.style.display = 'block';
            Exeheader.style.display = 'flex';
            Daycontainer.style.display = 'none';
            week.style.display = 'none';
            Exercise = Exeday[IndexVal].exercises;
            ChangeData();
        })
    });

    function goBackToLeve2() {
        Execontainer.style.display = 'none';
        Exeheader.style.display = 'none';
        Daycontainer.style.display = 'block';
        week.style.display = 'flex';
    };
}


