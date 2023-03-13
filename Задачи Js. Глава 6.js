'_________________________________________'
/*
function sumToSic(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}
function sumToRec(n) {
    if (n == 1) return 1;
    return n + sumToRec(n - 1)
}
function sumToMath(n) {
    return n * (n + 1) / 2
}
alert(`${sumToSic(100)}, ${sumToRec(100)}, ${sumToMath(100)}`);

function factorial(n) {
    if (n == 0 || n==1) return 1;
    return n * factorial(n - 1)
}
alert(factorial(0))

fib = (n) => {
    let a = 1
    let b = 1
    for (let i=3; i<=n; i++){
        let c = a+b
        a=b
        b=c
    }
    return b
}
alert(fib(77))

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
printList = (list) =>{
    alert(list.value);
    if (list.next){
        printList(list.next)
    }
}
printList(list)
*/
'_________________________________________'
/*
sum = (a)=>{
    return function(b){
        return a+b
    }
}
alert(sum(1)(2))

inBetween = (a, b) => {
    return function (x) {
        return x >= a && x <= b;
    };
}
inArray =(arr)=> {
    return function (x) {
        return arr.includes(x);
    };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inBetween(3, 6)));
alert(arr.filter(inArray([1, 2, 10])));

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
byField = (field) => {
    return function (a, b) {
        if (a[field] > b[field]) { return 1 }
        else { return -1 };
    }
}
users.sort(byField('name'));
users.sort(byField('age'));
users.forEach(user => alert(user.name))
users.forEach(user => alert(user.name))
*/
'_________________________________________'
/*
makeCounter = () => {
    let count = 0;
    function counter() {
        return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;
    return counter;
}

sum = (a) => {
    let curSum = a;
    function fun(b) {
        curSum += b;
        return fun;
    }
    fun.toString = function () {
        return curSum;
    };
    return fun;
}
alert(sum(1)(2));
alert(sum(5)(-1)(2));
alert(sum(6)(-1)(-2)(-3));
alert(sum(0)(1)(2)(3)(4)(5));
*/
'_________________________________________'
/*
printNumbersInter = (from, to) => {
    let cur = from;
    let timerId = setInterval(function () {
        alert(cur);
        if (cur == to) {
            clearInterval(timerId);
        }
        cur++;
    }, 1000);
}
printNumbersInter(1, 5);
printNumbersTime = (from, to) => {
    let cur= from;
    setTimeout(function next() {
        alert(cur);
        if (cur < to) {
            setTimeout(next, 1000);
        }
        cur++;
    }, 1000);
}
printNumbersTime(2, 5);
*/
'_________________________________________'
/*
spy = (func) => {
    function wrap(...args) {
        wrap.calls.push(args);
        return func.apply(this, args);
    }
    wrap.calls = [];
    return wrap;
}
work = (a, b) => alert(a + b)
work = spy(work)
work(3, 4)
work(5, 6)
for (let args of work.calls) {
    alert('call:' + args.join());
}

debounce = (f, ms) => {
    let Cd = false;
    return function () {
        if (Cd) { return }
        else { f.apply(this, arguments) }
        Cd = true;
        setTimout(() => Cd = false, ms);
    };
}

throttle = (func, ms) => {
    let isThrottled = false,
        savedArgs,
        savedThis;
    function wrap() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        else { func.apply(this, arguments); }
        isThrottled = true;
        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrap.apply(savedThis, savedArgs)
                savedArgs = null
                savedThis = null
            }
        }, ms);
    }
    return wrap;
}
function f(a) {
    console.log(a)
}
let f1000 = throttle(f, 1000);
f1000(1);
f1000(2);
f1000(3);
*/
'_________________________________________'
