function removeKDigits(num, k) {
    if (k >= num.length) {
        return "0";
    }
    const stack = [];
    for (let digit of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    let result = stack.join('');
    while (result[0] === '0' && result.length > 1) {
        result = result.slice(1);
    }
    return result === '' ? '0' : result;
}