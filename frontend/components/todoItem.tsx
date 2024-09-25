import { FaTrash } from "react-icons/fa";
import CheckUnchecked from "./checkUnchecked";
import CheckChecked from "./checkChecked";
import { removeTodo } from "@/services/todoService";

interface Props {
    status: boolean,
    title: string,
    id: number,
    callback: () => void
}

const TodoItem: React.FC<Props> = ({ status, title, id, callback }) => {

    return <>
        <div className="flex flex-row justify-between mx-5 mt-5 mb-5">
            <div className="flex flex-row gap-x-5 items-center">
                <span>{status == false ?
                    <CheckUnchecked className="hover:text-[#DA852A] hover:cursor-pointer w-10 h-10" /> :
                    <CheckChecked className="hover:text-[#DA852A] hover:cursor-pointer w-10 h-10" />}</span>
                <span className="text-2xl text-[#3F3F3E]">{title}</span>
            </div>
            <div className="flex items-center">
                <span onClick={() => {
                    removeTodo(id)
                    callback()
                }}><FaTrash className="hover:text-[#DA852A] hover:cursor-pointer" /></span>
            </div>
        </div>
        <div>
            <hr className="border-gray-400 border-t-2 mb-5 mx-5" />
        </div>
    </>;
};

export default TodoItem;