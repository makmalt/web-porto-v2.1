import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';



const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-bg p-8 border-t-8 border-black dark:border-darkBorder bg-white mt-10">
            <div className="max-w-full mx-auto px-5">
                {/* Top Section with Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                    {/* Let's Connect */}
                    <div className="transform -rotate-1">
                        <h3 className="text-2xl font-black mb-4 text-text uppercase tracking-wider dark:text-darkText">
                            Get in Touch!
                        </h3>
                        <div className="flex flex-col items-center lg:items-start mb-8">
                            <div className="flex space-x-6 mb-6">
                                <a href="https://github.com/makmalt" target="_blank" rel="noopener noreferrer" className="transform hover:scale-140 transition-transform duration-300 hover:rotate-3">
                                    <FaGithub className="text-4xl text-gray-800 dark:text-white hover:text-cerulean-400 transition-colors duration-300" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mochammad-akmal-thoriq/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transform hover:scale-140 transition-transform duration-300 hover:rotate-3"
                                >
                                    <FaLinkedin className="text-4xl text-gray-800 dark:text-white hover:text-cerulean-400 transition-colors duration-300" />
                                </a>
                                <a href="https://www.instagram.com/makmalt_" target="_blank" rel="noopener noreferrer" className="transform hover:scale-140 transition-transform duration-300 hover:rotate-3">
                                    <FaInstagram className="text-4xl text-gray-800 dark:text-white hover:text-cerulean-400 transition-colors duration-300" />
                                </a>
                                <a href="mailto:makmalthoriq31@gmail.com" className="transform hover:scale-140 transition-transform duration-300 hover:rotate-3">
                                    <FaEnvelope className="text-4xl text-gray-800 dark:text-white hover:text-cerulean-400 transition-colors duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text font-bold text-lg dark:text-darkText">
                        © {currentYear} makmalt
                    </p>
                    <div className="bg-black text-white px-4 py-2 font-mono text-sm dark:bg-bg dark:text-black">
                        &lt;/&gt;
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;