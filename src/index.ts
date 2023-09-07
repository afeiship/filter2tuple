declare var wx: any;

type FilterFn<T> = (item: T, index: number) => boolean;
type Filter2TupleResult = [any[], any[]];

function filter2tuple<T = any>(inArray: any[], inFilterFn: FilterFn<T>): Filter2TupleResult {
  const passed: any = [];
  const failed: any = [];
  inArray.forEach((item, index) => {
    const ife = inFilterFn(item, index);
    return ife ? passed.push(item) : failed.push(item);
  });
  return [passed, failed];
}

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = filter2tuple;
}

export default filter2tuple;
