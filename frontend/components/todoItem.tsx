import { FaTrash } from "react-icons/fa";
import CheckUnchecked from "./checkUnchecked";
import CheckChecked from "./checkChecked";
import { removeComment, removeTodo } from "@/services/todoService";
import { FormEvent, useState } from "react";
import { updateTodoStatus, addComment, getTodoById } from "@/services/todoService";
import { clearForm } from "@/public/js/utils";
import CustomModal from "./modal";

interface Props {
    status: number,
    title: string,
    description: string,
    comments: Array<Comment>,
    id: number,
    callback: () => void
}

const TodoItem: React.FC<Props> = ({ status, title, id, description, comments, callback }) => {

    const [todoStatus, setStatus] = useState(status);
    const [todoComments, setComments] = useState(comments);
    const [show, setShow] = useState(false);

    const handleUpdate = async () => {
        const newStatus = todoStatus === 0 ? 1 : 0;

        const response = await updateTodoStatus({ todoId: id, status: newStatus });
        callback();

        if (response !== 200) {
            console.log('erro')
            return;
        }

        setStatus(newStatus);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>, todoId: number) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const commentText = formData.get('commentToAdd')!.toString();

        const response = await addComment({ todoId: todoId, text: commentText });

        if (response !== 200) {
            console.log('erro')
            return;
        }

        const todo = await getTodoById(todoId);

        setComments(todo.comments);

        clearForm('addTodoComment');
    }

    const handleDeleteComment = async (commentId: number) => {
        const response = await removeComment({ commentId: commentId, todoId: id });

        if (response !== 200) {
            console.log('erro')
            return;
        }

        const todo = await getTodoById(id);

        setComments(todo.comments);
    }

    const handleDelete = async () => {
        const response = await removeTodo(id);

        if (response !== 200) {
            console.log('erro')
            return;
        }

        callback();
    };

    return (
        <div>
            <div className="flex flex-row justify-between mx-5 mt-5 mb-5" >
                <div className="flex flex-row gap-x-5 items-center">
                    <span onClick={handleUpdate}>{todoStatus === 0 ?
                        <CheckUnchecked className="hover:text-[#DA852A] hover:cursor-pointer w-10 h-10" /> :
                        <CheckChecked className="hover:text-[#DA852A] hover:cursor-pointer w-10 h-10" />}</span>
                    <span onClick={() => setShow(true)} className="text-2xl text-[#3F3F3E] hover:text-5xl hover:cursor-pointer">{title}</span>
                </div>
                <div className="flex items-center">
                    <span onClick={handleDelete}><FaTrash className="hover:text-[#DA852A] hover:cursor-pointer" /></span>
                </div>
            </div>
            <div>
                <hr className="border-gray-400 border-t-2 mb-5 mx-5" />
            </div>
            <CustomModal show={show} handleClose={() => setShow(false)} handleSubmit={(event) => handleSubmit(event, id)} handleDelete={handleDeleteComment} title={title} body={description} comments={todoComments} />
        </div>
    );
};

export default TodoItem;