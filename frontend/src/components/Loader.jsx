function Loader() {

    return (
        <div
            className="
                flex
                min-h-[240px]
                flex-col
                items-center
                justify-center
                gap-4
                text-gray-500
            "
        >

            <div
                className="
                    h-11
                    w-11
                    animate-spin
                    rounded-full
                    border-[3px]
                    border-white/10
                    border-t-rose-500
                "
            />

            <span>
                Searching movies...
            </span>

        </div>
    );
}

export default Loader;