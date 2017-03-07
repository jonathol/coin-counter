function coinSorter(total, coins) {
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
    let restChange = coinSorter(remainder, coins.slice(index));
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

console.log(coinSorter(99, [1,10,5,25]));
