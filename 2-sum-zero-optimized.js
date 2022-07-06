//checking sum zero - problem 1
// [-5,-4,-2,0,2,4,5,8] -> input
//[-4,-4]-> output
// Another Solution

function FindSomeZero(array){
    let a=0;
    let b=array.length-1;
    while(a<b){
        sum=array[a]+array[b];
        if(sum===0){
            return[array[a],array[b]]
        }else if(sum>0){
            b--;
        }else{
            a++;
        }
    }
}

const result=FindSomeZero([-5,-4,-2,0,2,4,6,8]);
console.log(result);


//o(n) linear time complexity
