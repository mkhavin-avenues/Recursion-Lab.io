const memo = [];

function fib(n) {
    if (memo[n] !== undefined) {
        return memo[n];
    }

    if (n <= 1) {
        return n; 
    }


    const result = fib(n - 1) + fib(n - 2);

    memo[n] = result;
    return result;
}

console.log(fib(10)); 
