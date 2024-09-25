const getAllTodos = async (): Promise<Array<Todo>> => {
    const url = process.env.TODO_API_URL;
    try {
        const response = await fetch("http://localhost:5101/api/todo", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        });

        const ar = await response.json() as Array<Todo>;
        return ar;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
const removeTodo = async (id: number): Promise<Response> => {
    try {
        const response = await fetch(`http://localhost:5101/api/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        return response;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { getAllTodos, removeTodo }