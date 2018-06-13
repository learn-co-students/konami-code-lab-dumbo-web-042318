console.log('hi');
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

function init() {
  document.body.addEventListener('keydown',keyDownEvent)
  let index = 0;
  // your code here
  function keyDownEvent(e) {
    const key = e.key;

    console.log(e);
    if (key === codes[index]) {
      index++;

      if (index === codes.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
