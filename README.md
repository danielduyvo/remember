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
This is a small app built on Node.js, Express and Vue.js, based on the concepts of the Forgetting Curve and the Leitner System. It all boils down to the concept that our memory decays exponentially; shortly after we learn something, we quickly forget it. However, if the item is recalled in memory, the memory is reinforced and reinstated. The best timing for this recall is when one is about to forget the memory.  
This concept feeds directly into the Leitner System, which seeks to capitalize on the way our memories are saved. The system quizzes the participant with flashcards, and if correct, it will wait a longer period of time before showing the same flashcard again (this space doubles with every repetition, starting with one day). If answered incorrectly, the spaces reset, and the card will be reviewed again the next day.  
This system has studies to support it; the Life Science 7A course at the University of California, Los Angeles teaches students about the concept of spaced repetition in the first weeks of instruction.
