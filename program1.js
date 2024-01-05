/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        const LSymbol = [];

        for (let i = 0; i < s.length; i++) {

            if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
                // storing brackets to the stack 
                LSymbol.push(s[i]);
            }
            // cheacking the condition of 

            else if (s[i] === ')' && LSymbol.length !== 0 && LSymbol[LSymbol.length - 1] === '(') {
                LSymbol.pop();
            } else if (s[i] === '}' && LSymbol.length !== 0 && LSymbol[LSymbol.length - 1] === '{') {
                LSymbol.pop();
            } else if (s[i] === ']' && LSymbol.length !== 0 && LSymbol[LSymbol.length - 1] === '[') {
                LSymbol.pop();
            }

            else {
                return false;
            }
        }
        return LSymbol.length === 0;
};

module.exports = { isValid };


