
// function charCount(str){
//     // make object to return at the end
//     var result = {};
//     // loop over string, for each character....
//     for(var char of str){
//         var char = char.toLowerCase();
//         // using regexp
//         // if the character is something else (space, period,etc.....) don't do anything
//         if(/[a-z0-9]/.test(char)){
//              // if the char is a number/letter AND  is a key in the object, add one to count
//              // if the char is a number/letter AND not in the object, add it to the object and set value to 1
//             result[char] = ++result[char] || 1
//         }
//     }
       
       
        

//     // return object at end
//     return result
    
// }

function charCount(str){
    // make object to return at the end
    var result = {};
    // loop over string, for each character....
    for(var char of str){
        var char = char.toLowerCase();
        // using function to check if it's alphanumeric
        // if the character is something else (space, period,etc.....) don't do anything
        if(isAlphanumeric(char)){
             // if the char is a number/letter AND  is a key in the object, add one to count
             // if the char is a number/letter AND not in the object, add it to the object and set value to 1
            result[char] = ++result[char] || 1
        }
    }
       
       
        

    // return object at end
    return result
    
}

function isAlphanumeric(char){
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)) {  //lower alpha (a-z)
        return false;
    }
    return true;
}      


console.log(charCount("oh Hi!"));
console.log(charCount("And I hope I never lose you, hope it never ends!!! I'd never walk Cornelia Street again!"));
console.log(charCount(`Welcome to New York, it's been waitin' for you
Welcome to New York, welcome to New York
When we first dropped our bags on apartment floors
Took our broken hearts, put them in a drawer!`))