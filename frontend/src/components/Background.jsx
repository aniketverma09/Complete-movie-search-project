function Background() {

    return (
        <div
            className="
                pointer-events-none
                fixed
                inset-0
                -z-10
                overflow-hidden
            "
        >

            <div
                className="
                    absolute
                    -left-32
                    -top-32
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-purple-600/15
                    blur-[120px]
                    animate-pulse
                "
            />

            <div
                className="
                    absolute
                    -right-32
                    top-[30%]
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-rose-600/15
                    blur-[120px]
                    animate-pulse
                "
            />

            <div
                className="
                    absolute
                    bottom-[-220px]
                    left-[35%]
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-blue-600/15
                    blur-[120px]
                    animate-pulse
                "
            />

        </div>
    );
}

export default Background;