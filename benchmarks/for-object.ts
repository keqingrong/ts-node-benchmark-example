import Benchmark, { Event } from 'benchmark';

const suite = new Benchmark.Suite();

const object = {};
for (let i = 0; i < 10000; i++) {
  object[i] = i;
}

suite.add('for in', () => {
  for (let prop in object) {
    object[prop];
  }
});

suite.add('for in with hasOwnProperty', () => {
  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
      object[prop];
    }
  }
});

suite.add('for of', () => {
  const keys = Object.keys(object);
  for (let key of keys) {
    object[key];
  }
});

suite.on('cycle', (event: Event) => {
  console.log(String(event.target));
});

suite.on('complete', () => {
  console.log('Fastest is ' + suite.filter('fastest').map('name'));
});

suite.run({ async: true });
