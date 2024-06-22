/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  let result = [];
  let lastIndex = getLastIndex(s);
  while(lastIndex > 0) {
    result.push(lastIndex + 1);
    s = s.slice(lastIndex + 1);
    lastIndex = getLastIndex(s);
  }
  result.push(s.length);
  return result;
};

function getLastIndex(s) {
  let charArray = s.split('');
  if(charArray.length > 0) {
    let char = charArray.shift();
    let lastIndex = s.lastIndexOf(char);
    let index = 0;
    while(index < lastIndex) {
        let tempIndex = s.lastIndexOf(charArray.shift());
        if(tempIndex > lastIndex) {
            lastIndex = tempIndex;
        }
        index++;
    }
    return lastIndex;
  }  

}
// @lc code=end

