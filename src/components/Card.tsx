const Card = (props: {
    title: string,
    description: string
    svgLogo: JSX.Element
}) => {
    return (
        <div className="mt-4 sm:w-1/3">
            <div className="bg-white h-full p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:mx-2 sm:p-3 md:p-8">
                <div className="bg-gray-200 text-indigo-700 w-16 rounded-full p-2">

                    {props.svgLogo}

                </div>
                <div className="mt-4 font-bold">{props.title}</div>
                <div className="text-center mt-2 text-gray-600 text-sm">{props.description}</div>
            </div>
        </div>
    )
}

export default Card;