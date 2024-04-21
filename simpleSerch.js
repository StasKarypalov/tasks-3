function lineserch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      console.log(arr[i]);
  }
}
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

lineserch(arr, 7);
lineserch(arr, 12);
