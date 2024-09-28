import { addTodo } from "@/services/todoService";
import { FormEvent } from "react";
import { clearForm } from '@/public/js/utils';
import { useState } from 'react';

interface Props {
    callback: () => void;
}

const Input: React.FC<Props> = ({ callback }) => {

    const [isLoading, setLoading] = useState(false);

    async function submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        await addTodo(formData.get('todoTitle')!.toString());
        await callback();
        clearForm();
        setLoading(false);
    }

    return <>
        <form onSubmit={submitHandler} id="addTodoForm">
            <div className="flex justify-center">
                <div className="w-1/2">
                    <div className="flex items-center justify-center mt-10 w-full">
                        <input type="text" onKeyDown={(event) => submitHandler} name="todoTitle" placeholder="What needs to be done?" className="bg-[#F1ECE6] w-full h-14 rounded-s-3xl block p-5 focus:outline-[#DA8554] text-[#676564] text-2xl" />
                        <span>
                            <button type="submit" className="bg-[#76B7CD] p-5 rounded-e-3xl h-14 flex items-center justify-center text-[#F1F2F2] hover:bg-[#2a6d83]" disabled={isLoading}>ADD</button>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    </>;
};

export default Input;