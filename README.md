# Remember
## A JavaScript Application built on MySQL, Express, Vue.js and Node.js
This is a small project I finished based on the concepts of the Forgetting Curve and the Leitner System.
## Setup
### Installing dependecies
This app runs on Node.js, so to use it, please download [Node](https://nodejs.org/en/ "Download Node") from its respective website. When completed, run *npm run create* which will run *install* in both the server folder and the /client folder (to install the backend and frontend dependencies, respectively).
### Creating and accessing the MySQL database
Build the MySQL database from the *remember.sql* file found in the /config.edit folder. There are also two files to edit: *encrypt.js* and *keys.js*. These will hold the credentials for the MySQL database, as well as any encryption you would like to use to protect user passwords. Change the name of the folder to /config when ready.
### API
Example routes for the API can be found [here](https://documenter.getpostman.com/view/4865397/RzZ3LNJK "Remember API tests")
### Running and accessing the applicatioon
Run *npm run dev* to start a development server with the frontend application available at localhost:8080/. You can also access the API at localhost:5000/
## About
### Architecture
This is a small app built on MySQL, Express, Vue.js and Node.js. It is built to provide a responsive frontend and a backend with an easy to use API that also allows for user account creation. The functionality of the app is based on the concepts of the Forgetting Curve and the Leitner System.  
### Forgetting Curve
Memory decays exponentially; shortly after we learn something, we quickly forget it. However, if the item is recalled in memory, the memory is reinforced and reinstated. This is a rather intuitive concept, but the important part of the forgetting curve is that there is an optimal time for this recall: right when one is about to forget. Analogous to physical exercise, where gains are made when the muscle is at its limit, the brain will create deeper grooves for memories that have been accessed at the most difficult moments. Successful practice of this concept will slow the decay of the memory.
### Leitner System
This concept feeds directly into the Leitner System, which seeks to capitalize on the way these memories are reinforced. Because successful recall of a memory will reintroduce it and slow its decay, it is more beneficial to space repetitions farther and farther apart with mastery, than to repeatedly test already conscious memory.  
The system quizzes the participant with flashcards, and if correct, it will wait a longer period of time before showing the same flashcard again (in this application, the space doubles with every repetition, starting with one day). If answered incorrectly, the spaces reset, and the card will be reviewed again the next day.  
### * * * * *
This system has a [body](https://www.researchgate.net/publication/291826702_The_right_time_to_learn_Mechanisms_and_optimization_of_spaced_learning "The right time to learn: Mechanisms and optimization of spaced learning") of [research](http://journals.sagepub.com/doi/full/10.1177/2372732215624708 "Spaced Repetition Promotes Efficient and Effective Learning ") to support it; the Life Science 7A course at the University of California, Los Angeles teaches students about the concept of spaced repetition in the first weeks of instruction.
