// Implementation of ROT13 cipher, only uppercase letters, non-alphabeticals are unchanged.
// https://en.wikipedia.org/wiki/ROT13

function rot13(str) { 
    var front = ['A','B','C','D','E','F','G','H','I','J','K','L','M']
    var back = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    var result = '';

    for(let i = 0; i < str.length; i++){
        let s = str.charAt(i);
        if(front.includes(s)){
            result += back[front.indexOf(s)];
        }else
        if(back.includes(s)){
            result += front[back.indexOf(s)];
        }else{
            result += s;
        }
    }

    console.log(result)

    return result;
}

rot13("V YBIR CVMMN!");
