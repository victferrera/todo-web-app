import LoadingSkeleton from "./loadingSkeleton"

interface Props {
    isLoading: boolean,
    children: React.ReactElement
}

const Container : React.FC<Props> = ({ isLoading, children }) => {
    if(isLoading){
        return <LoadingSkeleton />
    } else {
        return children;
    }
}

export default Container;