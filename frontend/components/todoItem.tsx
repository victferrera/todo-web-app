import { FaTrash } from "react-icons/fa";
import CheckUnchecked from "./checkUnchecked";
import CheckChecked from "./checkChecked";
import { removeTodo } from "@/services/todoService";
import { useState } from "react";
import { updateTodoStatus } from "@/services/todoService";

interface Props {
    status: number,
    title: string,
    id: number,
    callback: () => void
}

const TodoItem: React.FC<Props> = ({ status, title, id, callback }) => {

    const [todoStatus, setStatus] = useState(status);

    const handleUpdate = async () => {
        const newStatus = todoStatus === 0 ? 1 : 0;

        const response = await updateTodoStatus({ todoId: id, status: newStatus });

        if (response !== 200) {
            console.log('erro')
            return;
        }

        setStatus(newStatus);
    };

    const handleDelete = async () => {
        const response = await removeTodo(id);

        if (response !== 200) {
            console.log('erro')
            return;
        }

        callback();
    };

    return <>
        <div className="flex flex-row justify-between mx-5 mt-5 mb-5">
            <div className="flex flex-row gap-x-5 items-center">
                <span onClick={handleUpdate}>{todoStatus === 0 ?
                    <CheckUnchecked className="hover:text-[#DA852A] hover:cursor-pointer w-10 h-10" /> :
                    <CheckChecked className="hover:text-[#DA852A] hover:cursor-pointer w-10 h-10" />}</span>
                <span className="text-2xl text-[#3F3F3E]">{title}</span>
            </div>
            <div className="flex items-center">
                <span onClick={handleDelete}><FaTrash className="hover:text-[#DA852A] hover:cursor-pointer" /></span>
            </div>
        </div>
        <div>
            <hr className="border-gray-400 border-t-2 mb-5 mx-5" />
        </div>
    </>;
};

export default TodoItem;