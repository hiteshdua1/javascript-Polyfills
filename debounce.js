/**
 * @description: Returns a function which wlll not trggered , as long s it is contonued to be invokes
 * The function will be invoked once it has been stopped being invoked and that too after n milliseconds
 * @param {*} fn 
 * @param {Number} waitTime 
 */
function debounce(fn, waitTime) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout)    
      var later = () => {
          timeout = null;
          fn.apply(this,args)
      };
      timeout = setTimeout(later,waitTime);
  }
}