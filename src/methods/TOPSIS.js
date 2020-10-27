function topsis(matrix, criteria){
    let result = []
    let nm = [] // normalized decision matrix
    matrix.forEach(element => {
        let row = []
        element.forEach(item =>{
            row.push(item/(element.reduce((total,num)=>{return total + (num*num)})))
        })
        nm.push(row)
    });
    let wnm = []    // weighted normalized decision matrix
    nm.forEach((row) => {
        let element = []
        row.forEach((item,index) => {
            element.push(item * parseFloat(criteria[index][1]))
        })
       wnm.push(element)
    })

    let ideal = []
    let anti_ideal = []

    for (let index = 0; index < criteria.length; index++) {
        if(criteria[index][2]){  //criteria is neative
            ideal[index] = Math.min(getCol(wnm,index))  // if neative ten ideal is min
            anti_ideal[index] = Math.max(getCol(wnm,index)) //if neative ten anti_ideal is max
        }
        else{   //criteria is positive
            ideal[index] = Math.max(getCol(wnm,index))  // if positive ten ideal is max
            anti_ideal[index] = Math.min(getCol(wnm,index)) //if positive ten anti_ideal is min
        }
    }

    let distance= []

    matrix.forEach((row,i) =>{
        let d_ideal = 0
        let d_anti_ideal =0
        row.forEach((item,index) =>{
            d_ideal += (item - ideal[index]) * (item - ideal[index])
            d_anti_ideal += (item - anti_ideal[index]) * (item - anti_ideal[index])
        })
        distance.push([d_ideal,d_anti_ideal,(d_anti_ideal/(d_ideal+d_anti_ideal))])
    })
    result = getCol(distance,2)
    return result
}
 function getCol(matrix, col){
       var column = [];
       for(var i=0; i<matrix.length; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }
export default topsis