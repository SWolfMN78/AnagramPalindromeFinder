/*
 * anagramPalindrome
 *
 * Write a function which accepts an input word and returns true or false if there exists
 * an anagram of that input word that is a palindrome.
 * 
 */

var stringOne = "carrace"; //should return true
var stringTwo = "cutoo"; //should return false

console.log(anagramPalindrome(stringOne));
console.log(anagramPalindrome(stringTwo));

//what is the rule for a Palindrom? 
//  Rule: Return true if the word consist of 2 or more characters.  AND
//  Rule: Return true if the characters of the word contain an even number of characters

function anagramPalindrome(word) {
    var wordHolder = {}; //this will eventually hold the material of the word that is going to be checked.
    var letter = ""; //to be used later in order to grab the letter of the index.
    var oddsFound = 0;

    //Run through each letter variable then push that into above noted object.
    for (var index = 0; index < word.length; index++) {
        letter = word.charAt(index); //get the letter of the index.
        if (wordHolder[letter] == undefined) { //if the letter doesn't already exist aka undefined set the value to 0.
            wordHolder[letter] = 0;
        }
        wordHolder[letter] += 1; //Set the value to 1 now that it exist - repeating letter is found.
    };

    //Take the wordHolder object check that against the rule for if the object's contents can be arranged into a palindrome - should return true/false
    for (key in wordHolder) {
        if (wordHolder[key] % 2 == 1) {
            oddsFound += 1;
            if (oddsFound > 1) {
                return false;
            }
        }
    }
    return true;
}

// "ttt" = true - because there are at least 2 t's with
// "ttaaas" = false - t's have 2, a's have 3 and there is a spare 's' 

// email results to: david@outco.io