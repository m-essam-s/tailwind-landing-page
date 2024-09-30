const Form = () => {
    return (
        <form className="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0" action="#" method="post" autoComplete="off">
            <div className="flex flex-col md:flex-row md:-mx-2">
                <label htmlFor="first_name" className="sr-only">First name</label>
                <input className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2"
                    type="text" placeholder="First name" id="first_name" />

                <label htmlFor="last_name" className="sr-only">Last name</label>
                <input className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2"
                    type="text" placeholder="Last name" id="last_name" />
            </div>

            <div className="flex flex-col md:flex-row md:-mx-2">
                <label htmlFor="email" className="sr-only">Your email</label>
                <input className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2"
                    type="email" placeholder="john@email.com" id="email" />

                <label htmlFor="title" className="sr-only">Title</label>
                <input className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full md:w-1/2"
                    type="text" placeholder="Your title" id="title" />
            </div>

            <div className="flex flex-col md:flex-row md:-mx-2">
                <button className="bg-blue-600 text-sm mt-4 md:mx-2 rounded-lg py-2 px-4 block w-full">Create account</button>
            </div>
        </form>
    );
}

export default Form;
