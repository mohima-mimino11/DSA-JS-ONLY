 function charCount(str){
    // make object to return at the end
    var result = {};
    // loop over string, for each character....
    for(var char of str){
        char = char.toLowerCase();
        // using regexp
        // if the character is something else (space, period,etc.....) don't do anything
        if(/[a-z0-9]/.test(char)){
            
             // if the char is a number/letter AND  is a key in the object, add one to count
            if(result[char] > 0){
            result[char]++;
            }
            // if the char is a number/letter AND not in the object, add it to the object and set value to 1
            else{
            result[char] = 1
            }
        }
    }
       
       
        

    // return object at end
    return result
    
}

console.log(charCount("Your PIN number is 1234"));
console.log(charCount("oh Hi!"));
// console.log(charCount("And I hope I never lose you, hope it never ends!!! I would never walk Cornelia Street again!"));