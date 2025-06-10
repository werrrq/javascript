
function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

function sumTo(n) {
    return n * (n + 1) / 2;
}

function isLeapYear(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

function factorial(n) {
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}

function fib(n) {
    let a = 0n;
    let b = 1n;
    if (n === 0) return a;
    
    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}

function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}

function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}
