<template>
  <div class="about">
    <h1>About the App</h1>
    <p>This is a small app built on Node.js, Express and Vue.js, based on the concepts of the Forgetting Curve and the Leitner System. It all boils down to the concept that our memory decays exponentially; shortly after we learn something, we quickly forget it. However, if the item is recalled in memory, the memory is reinforced and reinstated. The best timing for this recall is when one is about to forget the memory.</p>
    <br/>
    <p>This concept feeds directly into the Leitner System, which seeks to capitalize on the way our memories are saved. The system quizzes the participant with flashcards, and if correct, it will wait a longer period of time before showing the same flashcard again (this space doubles with every repetition). If answered incorrectly, the spaces reset, and the card will be reviewed again the next day.</p>
    <br/>
    <p>This system has studies to support it; the Life Science 7A course at the University of California, Los Angeles teaches students about the concept of spaced repetition in the first weeks of instruction.</p>
    <br/>
    <p>This app is built on a full stack of MySQL for the database, Express for the backend, Vue.js for the frontend, and Node.js as a JavaScript runtime.</p>
  </div>
</template>

<style scoped>
.about {
  width: 80%;
  margin: auto;
}
</style>
