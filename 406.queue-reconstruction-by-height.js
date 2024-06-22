/*
 * @lc app=leetcode id=406 lang=javascript
 *
 * [406] Queue Reconstruction by Height
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.forEach((person) => {
       
    })
    
};

people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
console.log(reconstructQueue(people)) // [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
// @lc code=end


// [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
// [[7,0],[7,1],[5,0],[6,1],[4,4],[5,2]]
// [[5,0],[7,0],[7,1],[6,1],[4,4],[5,2]]
// [[5,0],[7,0],[6,1],[7,1],[4,4],[5,2]]
// [[5,0],[7,0],[5,2],[6,1],[7,1],[4,4]]
// [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
