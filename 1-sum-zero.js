//checking sum zero - problem 1
// [-5,-4,-2,0,2,4,5,8] -> input
//[-4,-4]-> output
function getSumZero(array) {
    for (let n of array) {
        for(let j=1;j<array.length;j++){
            if(n+array[j]===0){
                return([n,array[j]]);
            }
        }
    }
} 

const result=getSumZero([-5,-4,-2,0,2,4,6,8]);
console.log(result);
