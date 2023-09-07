declare var wx: any;

type FilterFn = (item: any, index: number) => boolean;
type Filter2TupleResult = [any[], any[]];

function filter2tuple(inArray: any[], filterFn: FilterFn): Filter2TupleResult {
  const passed: any = [];
  const failed: any = [];
  inArray.forEach((item, index) => {
    if (filterFn(item, index)) {
      passed.push(item);
    } else {
      failed.push(item);
    }
  });
  return [passed, failed];
}

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = filter2tuple;
}

export default filter2tuple;
