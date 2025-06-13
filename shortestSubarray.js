/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    let minLength = Infinity;
    const deque = [];
    for (let i = 0; i <= n; i++) {
        while (deque.length > 0 && prefixSum[i] - prefixSum[deque[0]] >= k) {
            minLength = Math.min(minLength, i - deque[0]);
            deque.shift();
        }

        while (deque.length > 0 && prefixSum[i] <= prefixSum[deque[deque.length - 1]]) {
            deque.pop();
        }

        deque.push(i);
    }

    return minLength === Infinity ? -1 : minLength;
};

module.exports = shortestSubarray;