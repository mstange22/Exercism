class Transcriptor {
    private map: Map = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U',
    };

    toRna(strand: string) {
        return strand.split('').reduce((rna, nucleotide) => {
            if (!this.map[nucleotide]) {
                throw new Error('Invalid input DNA.');
            }
            return rna + this.map[nucleotide];
        }, '')
    }
}

interface Map {
    [key: string]: string;
}

export default Transcriptor