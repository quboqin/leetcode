checkNoAdjacentFlowers(flowerbed, n) {
  flowerbedLength = flowerbed.length;
  for (let i = 0; i < flowerbedLength; i++) {
    if (flowerbed[i] === 0 && (i + 1 < flowerbedLength) && flowerbed[i + 1] === 0 && (i + 2 < flowerbedLength) && flowerbed[i + 2] === 0) {
      flowerbed[i + 1] = 1;
      i = i + 2;
      n--;
    }
  }
  return n === 0 ? true : false;
}

flowerbed = [0, 0, 1, 0, 0];

console.log(checkNoAdjacentFlowers(flowerbed, 1)); // true