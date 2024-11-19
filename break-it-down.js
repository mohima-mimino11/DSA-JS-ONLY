// Write a function which takes a string and returns the counts of each character in the string

// charCount("aaaa")
/*
    {a:4}
*/
// charCount("hello")
/*{h:1,
   e:1,
   l:2,
   o:1
}
*/

// charCount("Your PIN number is 1234")
/*{
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 2,
    s: 1,
    u: 2,
    y: 1
}

}

*/
function charCount(str){
    // do something
    // return an object with keys that are lowercase alphanumeric characters in string; values should the count for those characters

}
function charCount(str){
    // make object to return at the end
    var result = {};
    // loop over string, for each character....
    for(var i=0; i< str.length; i++){
        var char = str[i].toLowerCase();
         // if the char is a number/letter AND  is a key in the object, add one to count
        if(result[char] > 0){
            result[char]++;
        }
        // if the char is a number/letter AND not in the object, add it to the object and set value to 1
        else{
            result[char] = 1
        }
        // if the character is something else (space, period,etc.....) don't do anything
        // else{
        //     result[char] = 0;
        // }
    }
       
       
        // if the character is something else (space, period,etc.....) don't do anything

    // return object at end
    return result;
    
}


console.log(charCount("Your PIN number is 1234"));
console.log(charCount("oh Hi!"));