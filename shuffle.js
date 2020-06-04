function shuffle(array) {
  
  for (let i = 0; i < array.length - 1; i++) {
    let random = getRandom(i, array.length - 1);
    
    if (random !== i) {
      const temp = array[i];
      array[i] = array[random];
      array[random] = temp;
    }
  }
}

function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}
