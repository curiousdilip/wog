// Checking sQuare in another array
// arr1=[1,2,3,4],arr2=[1,9,4,16] - case 1
// arr1=[1,2,4,2],arr2=[1,4,4,16] - case 2

function checkSquare(array1,array2){
    let map1={};
    let map2={};
    for(item of array1){
        map1[item]=(map1[item] || 0)+1;
       
    }
    console.log("map1",map1);

    for(item1 of array2){
        map2[item1]=(map2[item1] || 0)+1;
        
    }
    console.log("map2",map2);
    
    for(let key in map1){
        console.log("key",key)
        if(!map2[key*key]){
            return false;
        }
        if(map1[key]!==map2[key*key]){
            return false;
        }
    }

    return true;
}

const result =checkSquare([1,2,4,2],[1,4,4,16]);
console.log(result);

