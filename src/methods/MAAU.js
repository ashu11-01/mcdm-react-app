function maau(matrix, criteria){
    let result = []
    // console.log(criteria)
    for (let index = 0; index < matrix.length; index++) {
        let sum = 0.0
        for (let idxx = 0; idxx < matrix[index].length; idxx++) {
            sum += (matrix[index][idxx] * criteria[idxx].weight)
            
        }
        result[index] = sum
    }
    return result
}

export default maau