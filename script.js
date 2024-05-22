const inputEl = document.getElementById("input");
const infoTextEle = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");




async function fetchAPI(word) {

    try {
        meaningContainer.style.display = "none";
        infoTextEle.style.display = "block";

        infoTextEle.innerText = `Searching the meaning of "${word}"`

        // console.log(word);
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

        const result = await fetch(url).then((res) => res.json());
        console.log(result)

        infoTextEle.style.display = "none"
        meaningContainer.style.display = "block";

        titleEl.innerText = "Word Title" + result[0].word;
        meaningContainer.innerText = "Word Meaning" + result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio;

    } catch (error) {
        console.log(error);
    }


}

inputEl.addEventListener("keyup", (e) => {
    // console.log(e.target.value)
    if (e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value)
    }
})