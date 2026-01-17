Array.prototype.method = function(callbackFn, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      const result = callbackFn.call(thisArg, this[i], i, this);
      // Example behavior: log each result
      console.log(result);
    }
  }
};

Array.prototype.MethodList = function (callback, thisArg) {
  const len = this.length;
  for (let i = 0; i < len; i++) {
    if (i in this) {
      const res = callback.call(thisArg, this[i], i, this);
      console.log(res); // fixed
    }
  }
};


const arr = [50,40,60,30] ;
const res = arr.MethodList((val,index , a) => {
    return val >= 60;
});
console.log(`result: ${res}`);

