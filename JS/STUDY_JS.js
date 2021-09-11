const calculate = {
    plus: function (F_VAR, S_VAR) {
        return F_VAR + S_VAR;        
    },
    minus: function (F_VAR, S_VAR) {
        return F_VAR - S_VAR;        
    },
    times: function (F_VAR, S_VAR) {
        return F_VAR * S_VAR;        
    },
    devide: function (F_VAR, S_VAR) {
        return F_VAR / S_VAR;        
    },
    power: function (F_VAR, S_VAR) {
        return F_VAR ** S_VAR
    }
}

console.log("plus : " + calculate.plus(10, 15))
console.log("minus : " + calculate.minus(10, 15))
console.log("times : " + calculate.times(10, 15))
console.log("devide : " + calculate.devide(10, 15))


console.dir(document.title)