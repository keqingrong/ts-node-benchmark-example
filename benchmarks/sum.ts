import Benchmark, { Event } from 'benchmark';
import { sum } from '../src/sum';

const suite = new Benchmark.Suite();

suite.add('sum', () => {
  sum(1, 2);
});

suite.on('cycle', (event: Event) => {
  console.log(String(event.target));
});

suite.on('complete', () => {
  console.log('Fastest is ' + suite.filter('fastest').map('name'));
});

suite.run({ async: true });
