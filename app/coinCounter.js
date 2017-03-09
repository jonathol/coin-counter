function coinCounter(total, coins) {
  if (total <= 0) {
    return [];
  }

  if (coins.every(el => el > total)) {
    return null;
  }

  let bestChange = null;

  coins.sort((a,b) => {return b-a;});
  coins.forEach((coin, index) => {
    if (coin > total) {
      return;
    }
    let remainder = total - coin;
    let restChange = coinCounter(remainder, coins.slice(index));
    if (!restChange) {
      return;
    }
    let change = [coin].concat(restChange);
    if (!bestChange || (change.length <= bestChange.length)) {
      bestChange = change;
    }
  });
  return bestChange;
}



document.getElementById('make-change').addEventListener("click", function(){
  let total = document.getElementById('total').value;
  let one = document.getElementById('coin-one').value;
  let two = document.getElementById('coin-two').value;
  let three = document.getElementById('coin-three').value;
  let four = document.getElementById('coin-four').value;
  console.log(coinCounter(total, [one,two,three,four]))
});
