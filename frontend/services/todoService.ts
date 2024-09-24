async function getAllTodos(): Promise<any> {
    const url = "http://localhost:5101/api/todo";
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default getAllTodos;