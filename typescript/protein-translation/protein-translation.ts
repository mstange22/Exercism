class ProteinTranslation {
    static proteins(strand: string) {
        const res = new Array<string>();
        const translator: { [codon: string]: string } = {
            'AUG': 'Methionine',
            'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
            'UUA': 'Leucine', 'UUG': 'Leucine',
            'UCU': 'Serine', 'UCC': 'Serine', 'UCA': 'Serine', 'UCG': 'Serine',
            'UAU': 'Tyrosine', 'UAC': 'Tyrosine',
            'UGU': 'Cysteine', 'UGC': 'Cysteine',
            'UGG': 'Tryptophan',
            'UAA': 'STOP', 'UAG': 'STOP', 'UGA': 'STOP',
        }
        for (let i = 0; i <= strand.length - 3; i+=3) {
            const sub: string = strand.substring(i, i + 3)
            if (translator[sub] === 'STOP') {
                return res
            }
            if (translator[sub]) {
                res.push(translator[sub])
            }
        }
        return res
    }
}

export default ProteinTranslation
