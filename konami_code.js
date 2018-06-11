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
  // your code here
  const body = document.body;

  let index = 0;

  function codeListener(e) {
    if (e.key === codes[index]) {
      console.log(e.key)
      index++;
      if (index === codes.length) {
        alert("You're pretty good.")
        index = 0;
      }
    } else {
      index = 0;
    }
  }

  body.addEventListener('keydown', codeListener);
}
