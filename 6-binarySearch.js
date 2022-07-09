//Divide & Conquerer Technique
// Find the index of given no in a sorted array 7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ==>index 6-> output

//min=0,element=1
//max=array.length-1, element=15
//minIndex=(min+max)/2=>(0=14)=>7(index),element=8
// if Array[minIndex]<Number(7)
// min=minIndex+1;
// else if array[minIndex]>number
// max=minIndex-1, min=0,max=6{1,2,3,4,5,6,7}
// (min+max)/2=>3
// index+1=>4(min), max=6{5,6,7}
// (min+max)/2=>5+1=>6(min),max=6
// else minIndex =>6, element=7
function searchAlog(array, number) {
    let min = 0;
    let max = array.length - 1;
    while (min <= max) {
        let minIndex = Math.floor((min + max) / 2);
        if (array[minIndex] < number) {
            min = minIndex + 1;
        } else if (array[minIndex] > number) {
            max = minIndex - 1;
        } else {
            return minIndex;
        }
    }
    return -1;
}

const result=searchAlog([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7);
console.log(result)