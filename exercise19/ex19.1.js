// Instructions
// Please make the following changes to the HTML file while
// navigating the DOM.
// Create a variable that holds the <li> element with the class
// “start-here”. Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another subtitle with the text “subtitle 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of
// your
// Note:
// On the next page, you have the HTML code
//1
const changeTitle = document.querySelector('.start-here');
changeTitle.innerText = 'main title';
// const changeTitle = document.getElementsByClassName('start-here');
// changeTitle[0].innerText = "main title"; //////To ask why its not working---this method returns an array! so i added [0] and now its working. 
//2
const newSubTitlesUl = document.querySelector('ul ul');
const newSubTitleLi = document.createElement('li');
newSubTitleLi.innerText = 'sub title 4';
newSubTitlesUl.appendChild(newSubTitleLi);
//3
const removeLi = document.querySelectorAll('ul li');
removeLi[removeLi.length - 1].remove();
//4
const changePageTitle = document.querySelector('title');
changePageTitle.textContent = 'Master Of The Dom';
//5

