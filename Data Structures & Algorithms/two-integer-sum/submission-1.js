class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) { 
        for(let i = 0; i<nums.length; i++){
            for(let j = i + 1; j<nums.length; j++){
                if(nums[i] + nums[j] === target) return [i, j]
            }
        }
    }
}
const sol = new Solution();
console.log(sol.twoSum([3,4,5,6], 7)) // output = [0,3]
console.log(sol.twoSum([3,5,5,6], 10)) // output = [1,2]