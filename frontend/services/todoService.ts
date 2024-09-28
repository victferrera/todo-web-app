'use server'

interface UpdateDto {
    status: number,
    todoId: number
}

const url = process.env.TODO_API_URL!;

const getAllTodos = async (): Promise<Array<Todo>> => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}
const removeTodo = async (id: number) : Promise<number>=> {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        return response.status;

    } catch (error) {
        console.log(error);
        throw error;
    }
}
const addTodo = async (title: string): Promise<number> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title }),
            cache: 'no-cache'
        });

        return response.status;

    } catch (error) {
        console.log(error);
        throw error;
    }
}
const updateTodoStatus = async (updateDto: UpdateDto): Promise<number> => {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateDto),
            cache: 'no-cache'
        });

        console.log(response);
        return response.status;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { getAllTodos, removeTodo, addTodo, updateTodoStatus }