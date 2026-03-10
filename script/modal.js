const loadWordDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  //   console.log(url);
  const res = await fetch(url);
  const details = await res.json();
  displayWordDetails(details.data);
};

// {
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার",
//     "level": 1,
//     "sentence": "The kids were eager to open their gifts.",
//     "points": 1,
//     "partsOfSpeech": "adjective",
//     "synonyms": [
//         "enthusiastic",
//         "excited",
//         "keen"
//     ],
//     "id": 5
// }

const displayWordDetails = (word) => {
  console.log(word);
  const detailBox = document.getElementById("details-container");
  detailBox.innerHTML = `
        <div class="space-y-3">
            <h2 class="text-2xl font-bold">
              ${word.word ? word.word : "শব্দ পাওয়া যায়নি "} (<i class="fa-solid fa-microphone-lines"></i>:${word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায়নি "})
            </h2>
        </div>
        <div class="space-y-3">
            <h3 class="font-bold text-xl">Meaning</h3>
            <p class="font-bangla text-lg font-[600]">${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি "}</p>
        </div>
        <div class="space-y-3">
            <h3 class="font-bold text-xl">Example</h3>
            <p>${word.sentence ? word.sentence: "sentence পাওয়া যায়নি"}</p>
        </div>
        <div class="space-y-3">
            <h3 class="font-bold text-xl">সমার্থক শব্দ গুলো</h3>
            <div>
            ${synonyms(word.synonyms)}
            </div>
            <span class="btn bg-[#EDF7FF] hidden">syn1</span>
        </div>`;
  my_modal_5.showModal();
  // document.getElementById("my_modal").showModal()
};
