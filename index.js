const container = document.createElement("div");
container.classList.add("container");
document.querySelector("body").append(container);
function SquaresPerSide() {
  let button = document.querySelector(".btn");
  button.addEventListener("click", (e) => {
    let numberSelected = Number(prompt("Select how many squares would have"));
    while (numberSelected > 100) {
      alert("Sorry. The grid must not be more than 100x100");
      numberSelected = Number(prompt("Select how many squares would have"));
    }
    for (let i = 0; i < numberSelected; i++) {
      for (let j = 0; j < numberSelected; j++) {
        const squareBlocks = document.createElement("div");
        squareBlocks.classList.add("blocks");
        container.append(squareBlocks);
        squareBlocks.setAttribute(
          "style",
          `width:calc(500px/${numberSelected}); height:calc(500px/${numberSelected})`
        );
        squareBlocks.addEventListener("mouseover", (e) => {
          squareBlocks.classList.add("squarePainted");
        });
      }
    }
  });
}

SquaresPerSide();
