class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
     let product = []; 
  
    for(let i =0; i<nums.length; i++){
        let prod = 1;
        
        for(let j = 0; j<nums.length; j++){
        if(j!== i){
        prod *= nums[j]
        
        }
        }
        product.push(prod)
        
    }
    return product
    }
}
const sol = new Solution()
console.log(sol.productExceptSelf([1,2,4,6]))
