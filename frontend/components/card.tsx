import { FC } from "react";

interface CardProps {
    children?: React.ReactElement
}

const Card: FC<CardProps> = ({ children }) => {
    return <>
        <div className="flex items-center justify-center mt-20">
            <div className="bg-[#F1ECE6] w-1/2 rounded-3xl overflow-x-auto">
                {children ?? <p className="text-center text-2xl">Add a new task here to start...</p>}
            </div>
        </div>
    </>;
};

export default Card;