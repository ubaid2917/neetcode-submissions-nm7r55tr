class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        for(let i = 0; i<strs.length; i++){
         let length = strs[i].length;
          str += `${length}#${strs[i]}`;
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let start = 0; 

        for(let i =0; i<str.length; i++){
            if(str[i] === '#'){
                let length = Number(str.slice(start, i))
                let word = str.slice(i+1, i+1+length)
                result.push(word)
                i = i+length; 
                start = i+1
            }
        }
        return result
    }
}
const sol = new Solution()
console.log(sol.encode(["hello", "world"]))
console.log(sol.decode("5#hello5#world"))

