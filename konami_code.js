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

function init(){

  let index = 0

  document.body.addEventListener("keydown", function (e) {

    let key = e.key



    if (key === codes[index]){
       // console.log(key)

      index++;

        if (index === codes.length) {

          alert("Hurray!")

          index = 0;

        }
    } else {
      index = 0;
    }
  });
}
