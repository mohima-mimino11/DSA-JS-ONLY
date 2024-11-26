/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
examples : 'cinema' and 'iceman'


*/
function validAnagram(s,t){
   if(s.length !== t.length){
    return false;
   }
   var lookUp = {};
   for(let i = 0; i < s.length; i++){
    let letter = s[i];
    // if letter exists then increament otherwise set to 1
    lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;

   }
  //  console.log(lookUp);
   for(let i= 0; i < t.length; i++){
    let letter = t[i];
    // can't find letter or letter is zero then it's not an anagram
    if(!lookUp[letter]){
      return false;

    }
    else{
      lookUp[letter] -=1;
    }
    
   }
   
   return true;
}

//  {a: 3, n: 1, g: 1, r: 1, m: 1 }
// validAnagram('anagram', 'nagaram')
// console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('cat', 'tar'));


