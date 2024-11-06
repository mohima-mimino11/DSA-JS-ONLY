/*
WRITE A FUNCTION CALLED "same", WHICH ACCEPTS TWO ARRAYS.THE FUNCTION SHOULD RETURN TRUE IF EVERY VALUE IN THE ARRAY HAS IT'S CORRESPONDING VALUE SQUARED IN THE SECOND ARRAY. THE FREQUENCY OF VALUES MUST BE THE SAME.
*/

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}


console.log(same([1,2,3,2], [9,1,4,4]));

// time complexity - O(n)