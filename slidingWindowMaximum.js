/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    if (n === 0 || k === 0) return [];
    const result = [];
    const deque = [];

    for (let i = 0; i < n; i++) {
        // 移除窗口外的元素
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // 移除比当前元素小的元素
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // 添加当前元素的索引
        deque.push(i);

        // 当窗口形成后，记录最大值
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};