import { FaTrash } from "react-icons/fa";
import CheckUnchecked from "./checkUnchecked";
import CheckChecked from "./checkChecked";

const TodoItem = () => {

    return <>
        <div className="flex flex-row justify-between mx-5 mt-5 mb-5">
            <div className="flex flex-row gap-x-5 items-center">
                <span><CheckUnchecked className="hover:text-[#DA852A] w-10 h-10"/></span>
                <span className="text-2xl text-[#3F3F3E]">Todo Item</span>
            </div>
            <div className="flex items-center">
                <span><FaTrash className="hover:text-[#DA852A] hover:cursor-pointer" /></span>
            </div>
        </div>
    </>;
};

export default TodoItem;