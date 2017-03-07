function coinSorter(total, coins) {
  if (total === 0) {
    return [];
  }

  if (coins.every(el => el > total)) {
    return [];
  }

  coins.sort((a,b) => {return b-a;});
  console.log(coins);
}

coinSorter(18, [1,10,5,25]);
