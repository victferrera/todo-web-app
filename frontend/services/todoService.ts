'use server'

interface UpdateDto {
    status: number,
    todoId: number
}

interface CommentDto {
    todoId?: number,
    commentId?: number,
    text?: string
}

interface DescriptionDto {
    todoId?: number,
    text?: string
}

const url = process.env.TODO_API_URL!;

const getAllTodos = async (): Promise<Array<Todo>> => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            cache: 'no-cache'
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}
const getTodoById = async (id: number): Promise<Todo> => {
    try {
        const response = await fetch(url + `/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            cache: 'no-cache'
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
            cache: 'no-cache'
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

        return response.status;

    } catch (error) {
        console.log(error);
        throw error;
    }
}
const updateTodoDesc = async (descriptionDto: DescriptionDto): Promise<number> => {
    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(descriptionDto),
            cache: 'no-cache'
        });

        return response.status;

    } catch (error) {
        console.log(error);
        throw error;
    }
}
const addComment = async (commentDto: CommentDto): Promise<number> => {    
    try {
        const response = await fetch(url + "/comment", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentDto),
            cache: 'no-cache'
        });

        return response.status;

    } catch (error) {
        console.log(error);
        throw error;
    }
}
const removeComment = async (commentDto: CommentDto): Promise<number> => {
    const endpoint = `/comment/${commentDto.todoId}/${commentDto.commentId}`
    
    try {
        const response = await fetch(url + endpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-cache'
        });

        return response.status;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { getAllTodos, removeTodo, addTodo, updateTodoStatus, addComment, removeComment, getTodoById, updateTodoDesc }