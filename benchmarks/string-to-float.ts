import Benchmark, { Event } from 'benchmark';

const suite = new Benchmark.Suite();

suite.add('Number()', () => {
  Number('3.14159');
});

suite.add('parseFloat()', () => {
  parseFloat('3.14159');
});

suite.on('cycle', (event: Event) => {
  console.log(String(event.target));
});

suite.on('complete', () => {
  console.log('Fastest is ' + suite.filter('fastest').map('name'));
});

suite.run({ async: true });

// Number() x 635,007,524 ops/sec ±1.68% (90 runs sampled)
// parseFloat() x 7,898,422 ops/sec ±3.79% (86 runs sampled)
// Fastest is Number()
