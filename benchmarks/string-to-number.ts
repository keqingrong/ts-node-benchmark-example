import Benchmark, { Event } from 'benchmark';

const suite = new Benchmark.Suite();

suite.add('Number()', () => {
  Number('3');
  Number('3.14159');
});

suite.add('parseInt()', () => {
  parseInt('3');
  parseInt('3.14159');
});

suite.add('parseInt() with radix', () => {
  parseInt('3', 10);
  parseInt('3.14159', 10);
});

suite.add('parseFloat()', () => {
  parseFloat('3');
  parseFloat('3.14159');
});

suite.on('cycle', (event: Event) => {
  console.log(String(event.target));
});

suite.on('complete', () => {
  console.log('Fastest is ' + suite.filter('fastest').map('name'));
});

suite.run({ async: true });

// Number() x 642,810,572 ops/sec ±1.38% (93 runs sampled)
// parseInt() x 8,541,324 ops/sec ±4.18% (84 runs sampled)
// parseInt() with radix x 8,485,279 ops/sec ±5.08% (78 runs sampled)
// parseFloat() x 7,427,837 ops/sec ±3.18% (85 runs sampled)
// Fastest is Number()
