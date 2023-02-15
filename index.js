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
    MakeNewGrid(numberSelected);
  });
}

SquaresPerSide();

MakeNewGrid(16);

function MakeNewGrid(numberSelected) {
  container.replaceChildren();
  for (let i = 0; i < numberSelected * numberSelected; i++) {
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
