
let result = document.getElementById("result");
let button = document.getElementById("search-btn");
let sound= document.getElementById('saund')

button.addEventListener('click', searchBtn)

function searchBtn() {
  let input = document.getElementById("input_word").value
  console.log(input)
  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + input)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      result.innerHTML = `
      <div class="word">
          <h3>${input}</h3>
          <button onclick="soundPlay()" id="SoundBtn">
          <i class='fas fa-volume-up'></i>
          </button>
      </div>

      <div class="details">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>/ ${data[0].phonetic} /</p>
      </div>

      <h5>Word Meaning</h5>
      <p class="word_meaning"> 1:-
          ${data[0].meanings[0].definitions[0].definition}
      </p>
      `;

      sound.setAttribute("src", `${data[0].phonetics[0].audio}`)
      console.log(sound)
      })
    .catch((error) => {
      console.log(error)
      result.innerHTML = `This Word is not existed`
    })


}

function soundPlay() {
  sound.play()
}








