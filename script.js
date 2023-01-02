let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
document.querySelector("#btn").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
  });
  console.log(working)