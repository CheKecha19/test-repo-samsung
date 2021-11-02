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

    //текст вставил свой для теста

    String1 = "try test me, teamlead! try find all"
     
     
    Characters = len(String1)
    
    Spaces = String1.count(' ')
    
    Vowels = 0
    Consonants = 0
    for i in String1:
        letter = i.lower()
        if letter == "a" or\
            letter == "e" or\
            letter == "i" or\
            letter == "o" or\
            letter == "u" or\
            letter == "y":
                Vowels += 1
        else:
            Consonants += 1
    
    Words = len(set(String1.split()))
}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked(event) {
    //TODO: Implement this function  

    Odd_words = String1.split()
    Odd_words_removed = list(Odd_words)
    del Odd_words_removed[::2]    
}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
}

document.addEventListener('DOMContentLoaded', init);
