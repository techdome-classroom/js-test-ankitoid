/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // create a map 
        const RMap = new Map();
        
        RMap.set('I', 1);
        RMap.set('V', 5);
        RMap.set('X', 10);
        RMap.set('L', 50);
        RMap.set('C', 100);
        RMap.set('D', 500);
        RMap.set('M', 1000);

        const n = s.length;

        let num = RMap.get(s[n - 1]);

        for (let i = n - 2; i >= 0; i--) {
            //if the condition is true it add the value 
            if (RMap.get(s[i]) >= RMap.get(s[i + 1])) {
                num += RMap.get(s[i]);

            }
            // else decrese the value
            else {
                
                num -= RMap.get(s[i]);
            }
        }
        return num;
    };

module.exports={romanToInt}