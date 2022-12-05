class Dictionary {
    #name
    #words
    constructor(name) {
        this.#name = name
        this.#words = {}
    }
    get mainName() {
        return this.#name
    }
    set mainName(value) {
       this.#name = value
    }
    get allWords() {
        return this.#words
    }
    addNewWord(word, description) {
        this.add(word, description);
    }

    add(word, description) {
        if (!this.allWords.hasOwnProperty(word))
            this.allWords[word] = { word, description }
    }
    remove(word) {
        delete this.allWords[word]
    }
    get(word) {
        return this.allWords[word]
    }
    showAllWords() {
        for (let key of Object.keys(this.allWords)) {
            console.log(`${key} - ${this.allWords[key].description}`)
        }
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name)
    }
    add(word, description) {
        if (!this.allWords.hasOwnProperty(word)) {
            this.allWords[word] = { word, description, isDifficult: true }
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова дилетант и квант