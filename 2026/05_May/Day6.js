//MAx heap concept 

// NOTE: Declare function 

function MaxHHeap(heapArray, value) {
  heapArray.push(value);

  let i = heapArray.length - 1;

  while (i > 0) {
    const p = Math.floor((i - 1) / 2);

    if (heapArray[p] >= heapArray[i]) break;

    [heapArray[i], heapArray[p]] = [heapArray[p], heapArray[i]];

    i = p;
  }
}

const reserveArray = [];

const values = [12, 10, 3, 5, 23, 15, 34];

for (const num of values) {
  MaxHHeap(reserveArray, num);

  console.log(`Val: ${num} ===> ${reserveArray.join(' ')}`);
}

