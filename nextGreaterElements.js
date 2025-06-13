function nextGreaterElements(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < 2 * n; i++) {
        const index = i % n;
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[index]) {
            result[stack.pop()] = nums[index];
        }
        if (i < n) {
            stack.push(index);
        }
    }

    return result;
}

module.exports = nextGreaterElements;