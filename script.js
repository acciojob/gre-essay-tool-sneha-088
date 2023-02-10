//your code here
let textBox = document.getElementById("evaluatedText");
let wordCountDisplay = document.getElementById("wordCount");

textBox.addEventListener("input", function() {
let wordCount = countWords(textBox.value);
wordCountDisplay.innerHTML = wordCount;
});

function countWords(text) {
return text.split(" ").length;
}
