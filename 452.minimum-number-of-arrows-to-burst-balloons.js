/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort((a, b) => {
    return a[1] - b[1]
  })

  var count = 0
  do {
    point = points.slice(-1).flat()
    let maxXEnd = point[1]

    var columnsByX = new Array(maxXEnd + 1).fill(null).map(() => [])
  
    var longestColumnXIndex = 0
    var lengthOfColumn = 0
    columnsByX.forEach((column, xIndex) => {
      points.forEach((element, yIndex) => {
        if(xIndex >= element[0] && xIndex <= element[1]) {
          column.push(yIndex)
        }
        if (column.length > lengthOfColumn) {
          lengthOfColumn = column.length
          longestColumnXIndex = xIndex
        }
      });
    })
  
    columnsByX[longestColumnXIndex].sort((a, b) => {
      return b - a
    }).forEach(y => {
      points.splice(y, 1)
    })
    count++
  } while(points.length > 0)
  return count 
}

points = [[1,2],[3,4],[5,6],[7,8]]

console.log(findMinArrowShots(points))
// @lc code=end

