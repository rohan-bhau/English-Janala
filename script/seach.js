document.getElementById("btn-search").addEventListener("click", () => {
    removeActive()
  const input = document.getElementById("input-search");
  const searchValue = input.value.trim().toLowerCase();
  console.log(searchValue);

  fetch("https://openapi.programming-hero.com/api/words/all")
    .then((res) => res.json())
    .then((data) => {
      const allwords = data.data;
    //   console.log(allwords);

      const filterWords = allwords.filter((word) =>
        word.word.toLowerCase().includes(searchValue)
    );
    displayLevelWord(filterWords)
    });
});
