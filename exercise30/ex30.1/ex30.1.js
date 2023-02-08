// Let's create a small app that will have an input field. When
// you type a user’s name in the input field you will fetch from
// the GitHub API that particular user's information and displays a
// card of the user's information.
// That card should have at least the following:
// 1. Avatar image
// 2. Name of user
// 3. Number of public repos
// When a user clicks on the card it will open a new page to
// that user Github profile page
const input = document.querySelector('#inputUserName');
const profilePic = document.querySelector('#profilePic')
input.addEventListener('keypress', function (e) {
    if(e.key === 'Enter'){
        const userName = e.target.value;
        getText(userName);
    }
});

async function getText(userName){
    try{
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json();
        console.log(data);
        let output ='';
        const gotUserAvatar = data.avatar_url;
        const gotUsersName = data.name;
        const gotUsersRepo = data.public_repos;
        profilePic.innerHTML = `
        <img src=${gotUserAvatar} class='profilePic'>
        <h3>${gotUsersName}</h3>
        <h3>Public Repos: ${gotUsersRepo}</h3>
        `;
    } catch(err) {
        console.log(err);
    }
}