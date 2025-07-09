export default function Projects() {
    return(
        <section className="mx-[20%] py-6">
            <div className="mb-5">
                <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    Projects
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-white mb-4">Project Title 1</h2>
                    <p className="text-gray-300 mb-4">
                        A brief description of the project, its purpose, and technologies used.
                    </p>
                    <a href="#" className="text-blue-200 hover:underline">View Project</a>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-white mb-4">Project Title 2</h2>
                    <p className="text-gray-300 mb-4">
                        A brief description of the project, its purpose, and technologies used.
                    </p>
                    <a href="#" className="text-blue-200 hover:underline">View Project</a>
                </div>
            </div>
        </section>
    )
}