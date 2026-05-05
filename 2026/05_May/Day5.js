//TODO: concept of max heap
//HACK: 
//FIX: 
//NOTE: 


function insertToMaxHeap(heap, value) {
  heap.push(value);

  let i = heap.length - 1;

  while (i > 0) {
    const p = Math.floor((i - 1) / 2);

    if (heap[p] >= heap[i]) break;

    console.log(heap[i], heap[p]);
    [heap[i], heap[p]] = [heap[p], heap[i]];
    i = p;
  }
}

const arrdeclared = [];
const values = [12, 3, 54, 65, 77, 23];

for (const val of values) {
  insertToMaxHeap(arrdeclared, val);

  console.log(`Inserted ${val} into max-heap: ${arrdeclared.join(' ')}`);
}

console.log("Logging of heap ---", arrdeclared);
