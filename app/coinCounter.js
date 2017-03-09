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

function setNotification(coins, count) {
  coins.forEach( (el) => {
    let val = parseInt(el.value);
    let notification = el.parentNode.childNodes[1];
    notification.innerHTML = count[val];

    if (count[val] !== 0) {
      notification.style.display = "inline";
    } else {
      notification.style.display = "none";
    }

  });
}

document.getElementById('make-change').addEventListener("click", function(){
  let target = document.getElementById('total');
  let one = document.getElementById('coin-one');
  let two = document.getElementById('coin-two');
  let three = document.getElementById('coin-three');
  let four = document.getElementById('coin-four');

  let coins = makeChange(parseInt(target.value), [
    parseInt(one.value),
    parseInt(two.value),
    parseInt(three.value),
    parseInt(four.value)
  ]);

  let count = {};
  count[parseInt(one.value)] = 0;
  count[parseInt(two.value)] = 0;
  count[parseInt(three.value)] = 0;
  count[parseInt(four.value)] = 0;

  coins.forEach( (el) => {
    count[el] += 1;
  });

  setNotification([one,two,three,four], count);


});
