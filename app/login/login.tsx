export default function LoginForm() {
    return (
        <section id="pledge" className="justify-center items-center px-4 container flex">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg rounded-2xl overflow-hidden">
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-8 py-12">
                    <h1 className="text-6xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Take the Cyber Safety Pledge
                    </h1>
                    <h1 className="text-primary-yellow text-xl mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam voluptatem ex autem voluptas numquam repellendus exercitationem, nisi minus, libero dolor saepe cupiditate.
                    </h1>
                </div>

                <div className="flex justify-center items-center p-8">
                    <div className="p-6 rounded-2xl shadow-lg w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] bg-white">
                        <h2 className="text-black text-xl font-semibold mb-4 text-center">Join Now</h2>
                        <div className="flex flex-col space-y-4">
                            <input 
                                className="p-4 text-black rounded-lg border focus:outline-none"
                                placeholder="First Name"
                                type="text"
                            />
                            <input 
                                className="p-4 text-black rounded-lg border focus:outline-none"
                                placeholder="Last Name"
                                type="text"
                            />
                            <input 
                                className="p-4 text-black rounded-lg border focus:outline-none"
                                placeholder="Email"
                                type="email"
                            />
                            <input 
                                className="p-4 text-black rounded-lg border focus:outline-none"
                                placeholder="Password"
                                type="password"
                            />
                            <button className="bg-black text-white p-3 rounded-lg font-semibold transition">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
