//string Anagram
// 'hello' -> 'llheo'
// 'dilip'->'lipid'

//condition
//length check(for both strings)
//strings 'hello'
//{h:0,e:0,l:0,o:0}

function isAnagram(string1,string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    let count = {}
    for (let letter of string1) {
        count[letter] = (count[letter] || 0) + 1;
        console.log(count[letter])
    }//for let letter of string1

    for (let items of string2) {
        if (!count[items]) {
            return false;
        }
        count[items] -= 1.
    }// for let items of string2
    return true;
}//function isAnagram(string1,string2)

const check = isAnagram('hello', 'lllheo');
console.log(check);