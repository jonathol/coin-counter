function makeChange(target, coins) {
  if (target === 0) {
    return [];
  }

  if (coins.every(el => el > target)) {
    return null;
  }

  let bestChange = null;

  function reverseSorter(a, b) {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  }

  coins.sort(reverseSorter).forEach((coin, index) => {
    if (coin > target) {
      return;
    }

    let remainder = target - coin;

    let restChange = makeChange(remainder, coins.slice(index));

    if (!restChange) {
      return;
    }

    let change = [coin].concat(restChange);
    if (!bestChange || (change.length < bestChange.length)) {
      bestChange = change;
    }
  });

  return bestChange;
}


document.getElementById('make-change').addEventListener("click", function(){
  let target = parseInt(document.getElementById('total').value);
  let one = parseInt(document.getElementById('coin-one').value);
  let two = parseInt(document.getElementById('coin-two').value);
  let three = parseInt(document.getElementById('coin-three').value);
  let four = parseInt(document.getElementById('coin-four').value);
  console.log(makeChange(target, [one,two,three,four]))
});
