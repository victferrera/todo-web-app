interface Props {
    className?: string
}

const CheckUnchecked: React.FC<Props> = ({ className }) => {
    return <>
        <svg width="800" height="800" viewBox="0 0 24 24" className={`${className} fill-current`}>
            <path d="M5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3Zm0 1.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25H5.75Z" />
        </svg>
    </>;
};

export default CheckUnchecked;