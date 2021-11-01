/**
 * Event handler for 'Statistics' button.
 * Calculates following values fot the given text and displays them in corresponding fields:
 * 1. Count of characters;
 * 2. Count of spaces;
 * 3. Count of chars for vowels and consonants;
 * 4. Count of words.
 * @param {object} event - Event class
 */
function onStatisticsClicked(event) {
    //TODO: Implement this function


    // задаю текст
    String1 = txt
    //создаю переменную, считывающую длину текста
    Characters = String1.length

    //создаю переменную, считающую пробелы
    Spaces = String1.find(" ",-1,Characters)

    //   vowels/consonants  count
    Vowels = 0
    Consonants = 0
    for i in txt:
        letter = i.lower()
    if letter == "a" or letter == "e" or\
    letter == "i" or letter == "o" or\
    letter == "u" or letter == "y":
    Vowels += 1
    else:
    Consonants += 1
    
    //words
    Words=len(set(txt.read().split()))

    

}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked(event) {
    //TODO: Implement this function

    //remove

    Odd_words = (* (String1[1::2]+String1[::2]))



    
}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
}

document.addEventListener('DOMContentLoaded', init);
