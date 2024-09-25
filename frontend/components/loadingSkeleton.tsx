import { FourSquare } from "react-loading-indicators";

const LoadingSkeleton = () => {
    return <h2 className="flex items-center justify-center h-40">
        <FourSquare color="#DA8554" size="medium" text="" textColor="" />
    </h2>;
}

export default LoadingSkeleton;