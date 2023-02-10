const container = document.createElement("div");
container.classList.add("container");
document.querySelector("body").append(container);

for (let i = 0; i < 256; i++) {
  const squareBlocks = document.createElement("div");
  squareBlocks.classList.add("squareBlock" + i);
  squareBlocks.classList.add("blocks");
  container.append(squareBlocks);
}
