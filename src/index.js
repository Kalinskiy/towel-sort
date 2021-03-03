
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix){
        return []
    }
    let newArr =  matrix.map((el, i) => {
        if (i === 0 || i % 2 === 0) {
            return el;
        } else {
            return el.map(String).reverse().map(Number)
        }
    });
    return [].concat(...newArr)

}
