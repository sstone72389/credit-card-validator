function numToList(num) {
  return (num + '').split("").map(Number)
}

function oddEven(lon) {
  var even = [],
    odd = [];
  for (var i = 0; i < lon.length; i++) {
    if ((i + 2) % 2 == 0) {
      odd.push(lon[i]);
    } else {
      even.push(lon[i]);
    }
  }
  return [even, odd];
}

function sum(lon) {
  return lon.reduce(function(pv, cv) {
    return pv + cv;
  }, 0);
}

function luhnValidate(number) {
  var digits = numToList(number)
  lists = oddEven(digits)
  even = lists[0]
  odd = lists[1]
  checksum = sum(odd);

  for (i = 0; i < even.length; i++)
    checksum += sum(numToList(even[i] * 2))

  return (checksum % 10) == 0
}

function validate() {
  var x = document.getElementById("number").value;
  if (x != '' && luhnValidate(x)) {
    document.getElementById("result").innerHTML = 'valid'
  } else {
    document.getElementById("result").innerHTML = 'invalid'
  }
}
