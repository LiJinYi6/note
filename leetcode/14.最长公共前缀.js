/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
const cmpStr=(str1,str2)=>{
    let len=Math.min(str1.length,str2.length);
    let res=""
    for(let i=0;i<len;i++){
        if(str1[i]===str2[i]){
            res+=str1[i]
        }else{
            break;
        }
    }
    return res;
}
var longestCommonPrefix = function(strs) {
    let count=strs.length;
    if(count===0) return "";
    let current=strs[0];
    for(let i=1;i<count;i++){
        current=cmpStr(current,strs[i]);
    }
    return current;

};
// @lc code=end

