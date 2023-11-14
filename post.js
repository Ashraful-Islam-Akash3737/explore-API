function postData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => getPostData(data))
}

function getPostData(data){
    const postContainer = document.getElementById('post-container');
    for(const item of data){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h4>User- ${item.userId}</h4>
            <h5>post-title: ${item.title}</h5>
            <p>user description: ${item.body}</p>

        `
        
        postContainer.appendChild(div);
    }
}
postData();