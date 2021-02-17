import Benchmark, { Event } from 'benchmark';

const suite = new Benchmark.Suite();

const array: number[] = [];
for (let i = 0; i < 10000; i++) {
  array[i] = i;
}

suite.add('for', () => {
  for (let i = 0; i < array.length; i++) {
    array[i];
  }
});

suite.add('for in', () => {
  for (let item in array) {
    array[item];
  }
});

suite.add('for in with hasOwnProperty', () => {
  for (let item in array) {
    if (array.hasOwnProperty(item)) {
      array[item];
    }
  }
});

suite.add('for of', () => {
  for (let item of array) {
    item;
  }
});

suite.on('cycle', (event: Event) => {
  console.log(String(event.target));
});

suite.on('complete', () => {
  console.log('Fastest is ' + suite.filter('fastest').map('name'));
});

suite.run({ async: true });
