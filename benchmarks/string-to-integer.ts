import Benchmark, { Event } from 'benchmark';

const suite = new Benchmark.Suite();

suite.add('Number()', () => {
  Number('3');
});

suite.add('parseInt()', () => {
  parseInt('3');
});

suite.add('parseInt() with radix', () => {
  parseInt('3', 10);
});

suite.add('parseFloat()', () => {
  parseFloat('3');
});

suite.on('cycle', (event: Event) => {
  console.log(String(event.target));
});

suite.on('complete', () => {
  console.log('Fastest is ' + suite.filter('fastest').map('name'));
});

suite.run({ async: true });

// Number() x 622,569,666 ops/sec ±2.66% (88 runs sampled)
// parseInt() x 127,149,629 ops/sec ±7.77% (74 runs sampled)
// parseInt() with radix x 115,850,691 ops/sec ±6.55% (71 runs sampled)
// parseFloat() x 99,436,225 ops/sec ±6.25% (73 runs sampled)
// Fastest is Number()
