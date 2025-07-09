import { ArrowRight } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description:
                "Full-stack web application built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://placehold.co/600x400",
            liveDemo: "#",
            github: "#",
        },
        {
            id: 2,
            title: "Task Management App",
            description:
                "Responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
            technologies: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
            image: "https://placehold.co/600x400",
            liveDemo: "#",
            github: "#",
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description:
                "Interactive weather dashboard with location-based forecasts, data visualization, and offline functionality using PWA technologies.",
            technologies: ["Vue.js", "Chart.js", "PWA", "Weather API"],
            image: "https://placehold.co/600x400",
            liveDemo: "#",
            github: "#",
        },
        
    ];

    return (
        <section className="mx-[20%] py-6">
            <div className="mb-5">
                <h1 className="text-2xl font-bold text-white flex items-start justify-start">
                    Projects
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                        <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href={project.liveDemo}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="text-center mt-12">
                <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:transform hover:scale-105"
                >
                    View All Projects
                    <ArrowRight className="w-5 h-5" />
                </a>
            </div> */}
        </section>
    );
}
