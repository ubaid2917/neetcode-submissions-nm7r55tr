class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    let freq = {};

  // 1. Frequency map
  for (let i = 0; i < nums.length; i++) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1;
  }

  // 2. Convert to entries + sort by frequency
  let entries = Object.entries(freq)
    .sort((a, b) => b[1] - a[1]);

  // 3. Take top K and extract only keys
  return entries.slice(0, k).map(item => Number(item[0]));
    }
}
const sol = new Solution(); 

console.log(sol.topKFrequent([1, 2, 2, 3, 3, 3], 2));
