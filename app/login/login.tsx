
export default function LoginForm() {
    return (
        <section 
            id="pledge" 
            className="flex justify-center items-center px-4 container  pb-0"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden ">
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-8 py-12">
                    <h1 className="text-6xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight" style={{ color: "var(--primary-blue)" }}>
                        Take the Cyber Safety Pledge
                    </h1>
                    <h1 className="text-primary-yellow text-xl mt-3" style={{ color: "var(--primary-blue)" }}>
                    I, ____________, pledge to become a Cyber Awareness Ambassador with HacFy Cyber Chetana, dedicating myself to building a cyber-safe society by promoting digital awareness, empowering women and youth, and standing against all forms of cybercrimes. I commit to spreading ethical digital practices,
safeguarding online privacy, and contributing to a secure digital future for our community and nation. Together, let's create a cyber-resilient Karnataka and inspire others to be responsible digital citizens.

                       </h1>
                </div>

                <div className="flex justify-center items-center p-8">
                    <div className="p-6 rounded-2xl shadow-lg w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] bg-white">
                        <h2 className=" text-xl font-semibold mb-4 text-center" style={{ color: "var(--primary-blue)" }}>Join Now</h2>
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
                            <button 
                                className="text-white p-3 rounded-lg font-semibold transition" 
                                style={{ backgroundColor: "var(--primary-orange)" }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
