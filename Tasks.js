var decodeBits = function(bits){

    // remove trailing 0s from the beginning and the end

    bits = bits.replace(/^0+/,'').replace(/0+$/,'')

    // find the rate by getting the "minimum" cluster of 1s or 0s, corresponding to a 'dot'
    let rate1s =  bits.split('0').map(c => c.length).filter(c=> c!=0).sort((a,b)=>{return a - b})[0]
    let rate0s =  bits.split('1').map(c => c.length).filter(c=> c!=0).sort((a,b)=>{return a - b})[0] ||  rate1s
    let rate = Math.min(rate1s , rate0s);
    // replace pauses between words
    let reg = new RegExp("0".repeat(rate*7),"g");
    let data = bits.replace(reg," ");

    // replace pauses between characters
    reg = new RegExp("0".repeat(rate*3),"g");
    data = data.replace(reg,'|')
    let words = data.split(" ")
    let output = []
    words.forEach(word => {
        let wordOutput = []
        word.split('|').forEach(letter => {
            // get dashes
            let reg = new RegExp("1".repeat(rate*3),"g");
            letter = letter.replace(reg,'-');
            // get dots
            reg = new RegExp("1".repeat(rate*1),"g");
            letter = letter.replace(reg,'.')

            // remove 0s
            letter = letter.replace(/0/g,'')
            wordOutput.push(letter)
        });
        output.push(wordOutput);

    })
    return output;
}

var decodeMorse = function(morseCode){
    return morseCode.map(word => {
        return word.map(letter => MORSE_CODE[letter]).join('')
    }).join(' ');
}