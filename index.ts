const changeBtn = document.getElementById("changeBtn");
const hex = document.getElementById("hex");
const color = document.getElementById("color");

const choices: (string | number)[] = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];

const pickRandom = (arr: (string | number)[]): string | number => {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

changeBtn?.addEventListener("click", () => {
  let hexArr = Array(6).fill(0);
  for (let i = 0; i < hexArr.length; i++) {
    hexArr[i] = pickRandom(choices);
  }
  const newHex = `#${hexArr.join("")}`;
  hex!.textContent = newHex;
  color!.style.backgroundColor = newHex;
});
