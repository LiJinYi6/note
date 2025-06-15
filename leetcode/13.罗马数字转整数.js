/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res=0;
    let mp=new Map([
        ['I',1],
        ['V',5],
        ['X',10],
        ['L',50],
        ['C',100],
        ['D',500],
        ['M',1000]
    ]);
    for(let i=0;i<s.length;i++){
         if(s[i]=='I' && s[i+1]=='V'){
            res+=4
            i++
            continue;
         }
         if(s[i]=='I' && s[i+1]=='X'){
            res+=9
            i++
            continue;
         }
         if(s[i]=='X' && s[i+1]=='L'){
            res+=40
            i++
            continue;
         }
         if(s[i]=='X' && s[i+1]=='C'){
            res+=90
            i++
            continue;
         }
         if(s[i]=='C' && s[i+1]=='D'){
            res+=400
            i++
            continue;
         }
         if(s[i]=='C' && s[i+1]=='M'){
            res+=900
            i++
            continue;
         }
         res+=mp.get(s[i])
    }
    return res
};
// @lc code=end


