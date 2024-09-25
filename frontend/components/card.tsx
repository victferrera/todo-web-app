import { FC } from "react";
import Container from "./container";

interface CardProps {
    isLoading: boolean
    children: React.ReactElement
}

const Card: FC<CardProps> = ({ isLoading, children }) => {
    return <>
        <div className="flex items-center justify-center mt-20">
            <div className="bg-[#F1ECE6] w-1/2 rounded-3xl overflow-x-auto">
                <Container isLoading={isLoading}>
                    { children }
                </Container>
            </div>
        </div>
    </>;
};

export default Card;