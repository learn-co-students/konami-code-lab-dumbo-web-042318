const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;

    if (key === codes[index]) {
      index++;
      console.log("you got one...")

      if (index === codes.length) {
        alert("Congratulations!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
