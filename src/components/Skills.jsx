export default function Skills() {
    return (
        <section className="mx-[20%] py-6">
            <div className="mb-5">
                <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    Skills
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-white mb-4">Programming Languages</h2>
                    <ul className="list-disc pl-5 text-gray-300">
                        <li>JavaScript</li>
                        <li>Kotlin</li>
                        <li>Java</li>
                        <li>PHP</li>
                        <li>C++</li>
                    </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-white mb-4">Frameworks & Libraries</h2>
                    <ul className="list-disc pl-5 text-gray-300">
                        <li>React</li>
                        <li>React Native</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Codeigniter 3</li>
                    </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-white mb-4">Tools & Technologies</h2>
                    <ul className="list-disc pl-5 text-gray-300">
                        <li>Git & GitHub</li>
                        <li>MYSQL</li>
                        <li>Android Studio</li>
                        <li>Visual Studio Code</li>
                        <li>Postman</li>
                        <li>Figma</li>
                    </ul>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-white mb-4">Soft Skills</h2>
                    <ul className="list-disc pl-5 text-gray-300">
                        <li>Problem Solving</li>
                        <li>Team Collaboration</li>
                        <li>Time Management</li>
                        <li>Adaptability</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
