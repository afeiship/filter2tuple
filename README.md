# filter2tuple
> A function to split an array into two tuples based on a filtering condition.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/filter2tuple
```

## usage
```js
import filter2tuple from '@jswork/filter2tuple';

const numbers = [1, 2, 3, 4, 5, 6];
const [even, odd] = filter2tuple(numbers, (item) => item % 2 === 0);

console.log(even, odd);
// [2, 4, 6] [1, 3, 5]
```

## other
> Use reduce implement:

```js
function filter2tuple(arr, filterFn) {
  return arr.reduce((result, item) => {
    filterFn(item) ? result[0].push(item) : result[1].push(item);
    return result;
  }, [[], []]);
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/filter2tuple/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/filter2tuple
[version-url]: https://npmjs.org/package/@jswork/filter2tuple

[license-image]: https://img.shields.io/npm/l/@jswork/filter2tuple
[license-url]: https://github.com/afeiship/filter2tuple/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/filter2tuple
[size-url]: https://github.com/afeiship/filter2tuple/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/filter2tuple
[download-url]: https://www.npmjs.com/package/@jswork/filter2tuple
