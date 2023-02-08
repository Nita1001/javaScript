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
const parent = document.querySelector('#profile-cards');
let prevUserName = [];



input.addEventListener('keypress', function (e) {
    if(e.key === 'Enter'){
        if(!(prevUserName.includes(e.target.value))){
            const userName = e.target.value;
            e.target.value = '';
            getText(userName, e);
            prevUserName.push(userName);
        }
        else{
            console.log('You already typed that user name.');
        }
    }
});

function createElement(data){
    if(!(data.message === 'Not Found')){
        const profile = document.querySelector('#profile-cards');
        const gotUserAvatar = data.avatar_url;
        const gotUsersName = data.name;
        const gotUsersRepo = data.public_repos;
        const gotUsersUrl = data.html_url;
        profile.innerHTML += `
        <a href="${gotUsersUrl}" target="_blank">
        <div class="card-container">
        <img id='profileImg' src=${gotUserAvatar} class='profilePic'>
        <h2>${gotUsersName}</h2>
        <h2>Public Repos: ${gotUsersRepo}</h2>
        </div>
        </a> 
        `;
    }
}

async function getText(userName, e){
    try{
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json();
        console.log(data);
        createElement(data);
    } catch(err) {
        console.log('Error: ',err);
    }
}
