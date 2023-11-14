// we can use this.............

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json()) // .json is not similar but colse to JSON.parse
//       .then(json => console.log(json))


// or we can use it like this............
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))


function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) 
      .then(json => console.log(json))
};