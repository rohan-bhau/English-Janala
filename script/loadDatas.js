const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="bg-white rounded-xl shadow-xl text-center px-10 py-10 h-full w-full space-y-7">
<h2 class="text-xl font-bold">${word.word}</h2>
<p class="text-neutral text-md">Meaning /Pronounciation</p>
<p class="font-bangla text-2xl font-bold">"${word.meaning} / ${word.pronunciation} "</p>
<div class="flex justify-between items-center content-center">
<button class="btn btn-soft btn-info"><i class="fa-solid fa-circle-info" style="color: #374957;"></i></button>
<button class="btn btn-soft btn-info"><i class="fa-solid fa-volume-high" style="color: #374957;"></i></i></button>
</div>

</div>
        `;

    wordContainer.appendChild(card);
  });
};
