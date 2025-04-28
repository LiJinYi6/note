/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y=x.toString()
    let y2=''
    for(let i=y.length-1;i>=0;i--)
        y2+=y[i]
    if(y===y2){
        return true
    }else{
        return false
    }
};
// @lc code=end

