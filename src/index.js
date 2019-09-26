/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
function checkhours(hours, focus, config) {
  let priority = config[focus];

  let ans = Math.ceil(hours / priority);

  return ans;
}

module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let anwer;
      if (knowsProgramming === true) {
        answer = checkhours(800, focus, config);
      } else answer = checkhours(1300, focus, config);

      return answer;
  };
  