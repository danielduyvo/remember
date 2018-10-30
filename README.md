# Remember
## A JavaScript Application built on MySQL, Express, Vue.js and Node.js
This is a small project I finished based on the concepts of the Forgetting Curve and the Leitner System.
## Installation
This app runs on Node.js, so to use it, please download Node from its respective website. When completed, run *npm install* in both the project folder and within the /client folder (to install the backend and frontend dependencies, respectively). After that, run *npm run dev* to start a development server with the frontend application available at localhost:8080/
### About
This is a small app built on Node.js, Express and Vue.js, based on the concepts of the Forgetting Curve and the Leitner System. It all boils down to the concept that our memory decays exponentially; shortly after we learn something, we quickly forget it. However, if the item is recalled in memory, the memory is reinforced and reinstated. The best timing for this recall is when one is about to forget the memory.  
This concept feeds directly into the Leitner System, which seeks to capitalize on the way our memories are saved. The system quizzes the participant with flashcards, and if correct, it will wait a longer period of time before showing the same flashcard again (this space doubles with every repetition). If answered incorrectly, the spaces reset, and the card will be reviewed again the next day.  
This system has studies to support it; the Life Science 7A course at the University of California, Los Angeles teaches students about the concept of spaced repetition in the first weeks of instruction.
