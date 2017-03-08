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
  console.log(coinCounter(18, [25,10,5,1]))
});
