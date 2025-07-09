import fotoProfil from "../assets/images/foto_profil.png";

export default function Hero() {
    return (
        <section className="flex mx-[20%] py-6 items-start border-b border-accent-foreground shadow-lg max-md:flex-col max-md:items-center">
            <div className="flex justify-center items-center max-md:mb-4">
                <img
                    src={fotoProfil}
                    alt="Hero Image"
                    className="rounded-2xl w-[60%] aspect-square grayscale hover:grayscale-0 transition-all duration-300 border-2 border-accent-foreground"
                />
            </div>
            <div className="text-center flex flex-col">
                <div className="text-white flex flex-col items-start">
                    <h1 className="text-xl font-bold mb-0">
                        Gefila Zona Pranata
                    </h1>
                    <p className="text-gray-300">
                        Web Developer | Android Developer
                    </p>
                </div>
                <div>
                    <p className="text-gray-300 mt-2 text-justify">
                        Hello, I'm Gefila Zona Pranata, a passionate web and
                        Android developer with a keen interest in creating
                        innovative solutions. I love coding and am always eager
                        to learn new technologies.
                    </p>
                </div>
            </div>
        </section>
    );
}
