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
        if(prevUserName === '' || !(prevUserName.includes(e.target.value))){
            const userName = e.target.value;
            e.target.value = '';
            getText(userName, e);
            prevUserName.push(userName);
        }
        console.log('You already typed that user name.');
    }
});

function createElement(data){

    const gotUserAvatar = data.avatar_url;
    const gotUsersName = data.name;
    const gotUsersRepo = data.public_repos;

    // if(gotUserAvatar.ok && gotUsersName.ok && gotUsersRepo.ok ){
        const profile = document.querySelector('#profile-cards');
        profile.innerHTML += `
        <div class="card-container">
        <img id='profileImg' src=${gotUserAvatar} class='profilePic'>
        <h2>${gotUsersName}</h2>
        <h2>Public Repos: ${gotUsersRepo}</h2>
        </div>
        `;
    // }
}

// function createOuterLink(data){
          
//     const profileImg = document.querySelector('#profileImg');
//     profileImg.addEventListener('click', ()=>{


//     })
// }

async function getText(userName, e){
    try{
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json();
        console.log(data);
        createElement(data);
        // createOuterLink(data);
    } catch(err) {
        console.log('Error: ',err);

    }
}
