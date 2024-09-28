interface Todo {
    id: number,
    title: string ,
    description: string,
    status: number,
    timeTracking: number,
    comments: Array<Comment>,
    createdOn: Date,
    updatedOn: Date,
}