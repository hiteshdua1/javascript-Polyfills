/**
 * 
 * @param {*} fn 
 * @param  {...any} args 
 */
function partials(fn, ...args) {
  return function (...args1) {
    fn.call(this, args, args1);
  }
}

/**
 * Example and Usage
 */
var huser = {
  firstName: "John",
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// add a partial method that says something now by fixing the first argument
huser.sayNow = partials(huser.say, new Date().getHours() + ':' + new Date().getMinutes());

huser.sayNow("Hello");
// [HH:mm] firstname: "Hello"
