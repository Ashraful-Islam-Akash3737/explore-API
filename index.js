function loadusers2() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => loadUserData2(data))
}

function loadUserData2(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.email);
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
    }

}

