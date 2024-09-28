interface Props {
    className?: string
}

const CheckChecked: React.FC<Props> = ({ className }) => {
    return <>
        <svg width="800" height="800" viewBox="0 0 48 48" className={`${className} fill-current`}>
            <path fill="none" d="M0 0h48v48H0z" />
            <path d="M31.048 12V8H8v32h32V20.655h-4V36H12V12z" />
            <path d="m24 24.172-7-7L14.171 20l7.001 7h-.001L24 29.828 26.828 27l17-17L41 7.172z" />
        </svg>
    </>;
};

export default CheckChecked;