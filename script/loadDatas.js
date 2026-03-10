const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

if(words.length == 0){
    wordContainer.innerHTML=`
          <div class="text-center col-span-full py-5 space-y-3">
          <img class="mx-auto" src="./assets/alert-error.png" />
        <p class="font-bangla text-neutral/60 text-sm">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি। </p>
        <h2 class="font-bangla text-3xl font-[500]">নেক্সট Lesson এ যান</h2>
      </div>`
      return
}

  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="bg-white rounded-xl shadow-xl text-center px-10 py-10 h-full w-full space-y-7">
<h2 class="text-xl font-bold">${word.word ? word.word : "শব্দ পাওয়া যায়নি "}</h2>
<p class="text-neutral text-md">Meaning /Pronounciation</p>
<p class="font-bangla text-2xl font-bold">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি "} / ${word.pronunciation ? word.pronunciation: "pronunciation পাওয়া যায়নি "} "</p>
<div class="flex justify-between items-center content-center">
<button class="btn btn-soft btn-info"><i class="fa-solid fa-circle-info" style="color: #374957;"></i></button>
<button class="btn btn-soft btn-info"><i class="fa-solid fa-volume-high" style="color: #374957;"></i></i></button>
</div>

</div>
        `;

    wordContainer.appendChild(card);
  });
};
