/*
1. Create a function that takes one parameter, a language.
2. Use a switch statement to log the following string for the
given 'language':
● mandarin: 'MOST number of native speakers!'
● Spanish: '2nd place in a number of native speakers'
● English: '3rd place'
● Hindi: 'Number 4'
● Arabic: '5th most spoken language'
● for all others simply log 'Not in the top 5'
*/

const checkLang = (language) =>{
  switch(language){
    case 'Mandarin':
      console.log('MOST number of native speakers!')
      break;
    case 'Spanish':
      console.log('2nd place in a number of native speakers')
      break;
    case 'English':
      console.log('3rd place')
      break;
    case 'Hindi':
      console.log('Number 4')
      break;
    case 'Arabic':
      console.log('5th most spoken language')
      break;
    default:
      console.log('Not in the top 5')
  }
}

checkLang('Mandarin');
checkLang('Spanish');
checkLang('English');
checkLang('Hindi');
checkLang('Arabic');
checkLang('Hebrew');