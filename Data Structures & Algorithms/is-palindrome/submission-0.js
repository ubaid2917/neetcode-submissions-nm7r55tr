/**
 * Problem:
 * Given a string s, return true if it is a palindrome, otherwise return false.
 *
 * A palindrome is a string that reads the same forward and backward.
 * The string is case-insensitive and ignores all non-alphanumeric characters.
 *
 * Note:
 * Alphanumeric characters = letters (a-z, A-Z) and numbers (0-9)
 *
 * Example 1:
 * Input:  "Was it a car or a cat I saw?"
 * Output: true
 *
 * Explanation:
 * After removing non-alphanumeric characters and converting to lowercase:
 * "wasitacaroracatisaw"
 * This reads the same forward and backward → palindrome
 *
 * Example 2:
 * Input:  "tab a cat"
 * Output: false
 */


class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let reversed = cleaned.split('').reverse().join('');

        return cleaned === reversed;
    }
}

// ----------------------
// Test cases
// ----------------------
const sol = new Solution();

console.log(sol.isPalindrome("Was it a car or a cat I saw?")); // true
console.log(sol.isPalindrome("tab a cat")); // false