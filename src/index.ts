declare var wx: any;

const Filter2tuple = (): void => {
  console.log('hello');
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = Filter2tuple;
}

export default Filter2tuple;
