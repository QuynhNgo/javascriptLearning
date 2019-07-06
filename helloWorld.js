
function Dosomething()
{
    console.log("Hello, it's me who is learning js");
    d3.json('https://jsonplaceholder.typicode.com/todos/1')
    .then(data =>{console.log(data);})
}

Dosomething();

