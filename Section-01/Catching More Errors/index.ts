import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {

    // console.log(response.data);

    /*
     * Response.data has properties of :
     * id
     * title
     * completed
    */

    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    // logTodo(id, completed, title); // Throws an error
    logTodo(id, title, completed);    // Right Code
});

// const logTodo = (id, title, completed) => {
//     console.log(`
//         The Todo with ID : ${id}
//         Has a title of : ${title}
//         Is it finished? : ${completed}
//     `);
// };

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID : ${id}
        Has a title of : ${title}
        Is it finished? : ${completed}
    `);
};