/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const count = {};
    // 第一次遍历，统计每个字符的出现次数
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        count[char] = (count[char] || 0) + 1;
    }
    // 第二次遍历，找到第一个出现次数为 1 的字符
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (count[char] === 1) {
            return i;
        }
    }
    return -1;
};