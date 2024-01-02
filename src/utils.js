export function getRandomNum() {
  const randomNum = "12345678910";
  return randomNum[Math.floor(Math.random() * randomNum.length)];
}

export function getRandomUppercase() {
  const randomUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return randomUpper[Math.floor(Math.random() * randomUpper.length)];
}

export function getRandomLowercase() {
  const randomLower = "abcdefghijklmnopqrstuvwxyz";
  return randomLower[Math.floor(Math.random() * randomLower.length)];
}

export function getRandomSymbol() {
  const randomSymbol = "!#$%&()*+-/:;<=>?@[\\]^_{|}~";
  return randomSymbol[Math.floor(Math.random() * randomSymbol.length)];
}
