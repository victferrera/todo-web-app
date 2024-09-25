const Input = () => {
    return <>
        <div className="flex justify-center">
            <div className="w-1/2">
                <div className="flex items-center justify-center mt-10 w-full">
                    <input type="text" placeholder="What needs to be done?" className="bg-[#F1ECE6] w-full h-14 rounded-s-3xl block p-5 focus:outline-[#DA8554] text-[#676564] text-2xl" />
                    <span>
                        <button type="button" className="bg-[#76B7CD] p-5 rounded-e-3xl h-14 flex items-center justify-center text-[#F1F2F2] hover:bg-[#2a6d83]">ADD</button>
                    </span>
                </div>
            </div>
        </div>
    </>;
};

export default Input;