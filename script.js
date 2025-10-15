const rows = document.querySelectorAll("#hiraganaTable tbody tr");

rows.forEach(row => {
  row.addEventListener("click", () => {
    const audioSrc = row.getAttribute("data-audio");
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    } else {
      console.warn("No audio file for this row.");
    }
  });
});
