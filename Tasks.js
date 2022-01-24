function DNAStrand(dna){
    let output = ' ';
    for (let i=0; i<dna.length; i++){
        if (dna[i] == 'A') {
            output += 'T';
        } else if (dna[i] == 'T'){
            output += 'A';
        }else if (dna[i] == 'C'){
            output += 'G';
        }else if (dna[i] == 'G'){
            output += 'C';
        }
    }
    return output;
}
