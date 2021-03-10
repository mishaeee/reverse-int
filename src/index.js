module.exports = function reverse(n) {
    if (n == 0) {
        return 0;
    }
    if (n < 0) {
        n = -n;
    }

    let res = 0;
    let i = 0;
    while (n > 0) {
        res = res * (10 ** i);
        res += Math.floor(n % 10);
        n = Math.floor(n / 10);
        if (i == 0) {
            i++;
        }
    }
    return res;
}
