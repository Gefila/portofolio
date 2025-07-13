import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import fotoProfil from "../assets/images/foto_profil.png";

export default function About() {
    return (
        <section className="flex mx-[20%] py-6 items-start border-b border-accent-foreground shadow-lg max-md:flex-col max-md:items-center">
            <div className="flex justify-center items-center max-md:mb-4">
                <img
                    src={fotoProfil}
                    alt="About Image"
                    className="rounded-2xl w-[60%] aspect-square grayscale hover:grayscale-0 transition-all duration-300 border-2 border-accent-foreground"
                />
            </div>
            <div className="text-center flex flex-col items-start gap-1">
                <div className="text-white flex flex-col items-start">
                    <h1 className="text-xl font-bold mb-0">
                        Gefila Zona Pranata
                    </h1>
                    <p className="text-gray-300">
                        Web Developer | Android Developer
                    </p>
                </div>
                <div>
                    <p className="text-gray-300 text-justify">
                        Hello, I'm Gefila Zona Pranata, a passionate web and
                        Android developer with a keen interest in creating
                        innovative solutions. I love coding and am always eager
                        to learn new technologies.
                    </p>
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center gap-2">
                    <a href="https://github.com/gefila" target="_blank">
                        <div className="bg-card text-card-foreground px-3 py-1.5 rounded-[0.3rem] border">
                            <Github className="inline mr-2 w-5 h-5" />
                            Github
                        </div>
                    </a>
                    <a
                        href="mailto:gefilazonapranata@gmail.com"
                        target="_blank"
                    >
                        <div className="bg-card text-card-foreground px-3 py-1.5 rounded-[0.3rem] border">
                            <Mail className="inline mr-2 w-5 h-5" />
                            Email
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gefilazonapranata/"
                        target="_blank"
                    >
                        <div className="bg-card text-card-foreground px-3 py-1.5 rounded-[0.3rem] border">
                            <Linkedin className="inline mr-2 w-5 h-5" />
                            LinkedIn
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gefilazonapranata/"
                        target="_blank"
                    >
                        <div className="bg-card text-card-foreground px-3 py-1.5 rounded-[0.3rem] border">
                            <FileUser className="inline mr-2 w-5 h-5" />
                            Download CV
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
