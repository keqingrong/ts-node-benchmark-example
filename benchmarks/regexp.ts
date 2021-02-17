import Benchmark, { Event } from 'benchmark';

const suite = new Benchmark.Suite();

var pattern1 = /\.(jpg|jpeg)$/;
var pattern2 = /\.jpe?g$/;

suite.add('pattern1', () => {
  pattern1.test('a.jpg');
  pattern1.test('a.jpeg');
});

suite.add('pattern2', () => {
  pattern2.test('a.jpg');
  pattern2.test('a.jpeg');
});

suite.on('cycle', (event: Event) => {
  console.log(String(event.target));
});

suite.on('complete', () => {
  console.log('Fastest is ' + suite.filter('fastest').map('name'));
});

suite.run({ async: true });

// pattern1 x 11,710,998 ops/sec ±3.47% (83 runs sampled)
// pattern2 x 12,169,387 ops/sec ±4.68% (75 runs sampled)
// Fastest is pattern2
