class WordCloudData {
    constructor(inputString) {
        this.wordsToCounts = new Map();
        this.populateWordsToCounts(inputString);
    }

    populateWordsToCounts(inputString) {

        let start = 0;
        let wordLength = 0;

        for (let i = 0; i < inputString.length; i++) {
            const char = inputString.charAt(i);

            if (i === inputString.length - 1) {
                if (this.isLetter(char)) {
                    ++wordLength;
                }
                if (wordLength > 0) {
                    const word = inputString.slice(start, start + wordLength);
                    this.addWord(word);
                }
            } else if (char === ' ' || char === '\u2014') {
                if (wordLength > 0) {
                    const word = inputString.slice(start, start + wordLength);
                    this.addWord(word);
                    wordLength = 0;
                }
            } else if (char === '.') {
                if (i < inputString.length - 1 && inputString.charAt(i + 1) === '.') {
                    if (wordLength > 0) {
                        const word = inputString.slice(start, start + wordLength);
                        this.addWord(word);
                        wordLength = 0;
                    }
                }
            } else if (this.isLetter(char) || char === '\'') {
                if (wordLength === 0) {
                    start = i;
                }
                ++wordLength;
            } else if (char === '-') {
                if (i > 0 && this.isLetter(inputString.charAt(i - 1)) && this.isLetter(inputString.charAt(i + 1))) {
                    if (wordLength === 0) {
                        start = i;
                    }
                    ++wordLength;
                } else {
                    if (wordLength > 0) {
                        const word = inputString.slice(start, start + wordLength);
                        this.addWord(word);
                        wordLength = 0;
                    }
                }
            }

        }
    }

    isLetter(character) {
        return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(character) >= 0;
    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    addWord(word) {
        let count;

        if (this.wordsToCounts.has(word)) {
            count = this.wordsToCounts.get(word) + 1;
            this.wordsToCounts.set(word, count);
        } else if (this.wordsToCounts.has(word.toLowerCase())) {
            count = this.wordsToCounts.get(word.toLowerCase()) + 1;
            this.wordsToCounts.set(word.toLowerCase(), count);
        } else if (this.wordsToCounts.has(this.capitalize(word))) {
            count = this.wordsToCounts.get(this.capitalize(word)) + 1;
            this.wordsToCounts.set(word, count);
            this.wordsToCounts.delete(this.capitalize(word));
        } else {
            this.wordsToCounts.set(word, 1);
        }
    }
}
