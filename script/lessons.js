const loadLessons = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      displayLessons(json.data);
    });
};

const displayLessons = (lessons) => {
  //   console.log(lessons);
  //? 1- get the container
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  //? 2- get the separated lessons
  lessons.forEach((lesson) => {
    // console.log(lesson);
    //? 3- create a new element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-primary btn-outline lesson-btn"><i class="fa-brands fa-leanpub"></i>Lesson-${lesson.level_no}</button>
        `;

    //? 4- append the new created element to the container

    levelContainer.appendChild(btnDiv);
  });
};
loadLessons();
