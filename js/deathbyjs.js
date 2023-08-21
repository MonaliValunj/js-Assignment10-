//STEP 1
// function sortAlphabeticaly(str){
//     return str.split("").sort().join("")
    
// } 
// console.log(sortAlphabeticaly('webmaster'))

//STEP 2
//function ConverToUppercase(str){
    let str = 'the quick brown fox'
    //contver string to array of words
    var words = str.split(" ")
    console.log(words)
    for(var i = 0; i< words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase()
        var remaning = words[i].slice(1)
        var capWords = firstLetter+remaning
       // console.log( capWords)

    }
    var result = words.join(" ");
    console.log(result)

    //return str.charAt(0).toUpperCase()+str.substring(1)

//}

//console.log(ConverToUppercase('the quick brown fox'))

//STEP 3

//STEP 4

//STEP 5
