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

    String1 = txt
    //characters
    Characters = String1.length

    //Spaces
    Spaces = String1.find(" ",-1,Characters)

    //vowels count
    Vowels = String1
    for i in String1:
        if i.lower() == 'a' or i.lower //and so on
        Vowels = Vowels.replace(i, "")
        print(Vowels)

    //consonants
    conso = String1.length - Vowels

    //words
    words=len(set(txt.read().split()))

    



    console.log('onStatisticsClicked called');
}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked(event) {
    //TODO: Implement this function

    //remove

    print(* (String1[1::2]+String1[::2]))



    console.log('onRemoveWordsClicked called');
}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
}

document.addEventListener('DOMContentLoaded', init);
