import { Code, Zap, Lightbulb, Users } from "lucide-react";

export default function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code className="w-6 h-6" />,
            skills: ["JavaScript", "Kotlin", "PHP", "Java", "C++"],
            bgGradient: "from-blue-500/20 to-purple-500/20",
            borderColor: "border-blue-500/30"
        },
        {
            title: "Frameworks & Libraries",
            icon: <Zap className="w-6 h-6" />,
            skills: ["React", "React Native", "CodeIgniter 3", "Express.js", "Tailwind CSS", "Shadcn"],
            bgGradient: "from-green-500/20 to-teal-500/20",
            borderColor: "border-green-500/30"
        },
        {
            title: "Tools & Technologies",
            icon: <Lightbulb className="w-6 h-6" />,
            skills: ["MySQL", "MongoDB", "Git & GitHub", "Postman", "Figma", "Visual Studio Code", "Android Studio"],
            bgGradient: "from-orange-500/20 to-red-500/20",
            borderColor: "border-orange-500/30"
        },
        {
            title: "Soft Skills",
            icon: <Users className="w-6 h-6" />,
            skills: ["Problem Solving", "Team Collaboration", "Time Management", "Adaptability"],
            bgGradient: "from-pink-500/20 to-violet-500/20",
            borderColor: "border-pink-500/30"
        }
    ];

    return (
        <section className="mx-[20%] py-6 flex flex-col border-b border-accent-foreground">
            <div className="mb-5">
                <h1 className="text-2xl font-bold text-white flex items-start justify-start gap-3">
                    <Code className="w-8 h-8 text-blue-400" />
                    Skills
                </h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                    <div 
                        key={index}
                        className={`group relative bg-gradient-to-br ${category.bgGradient} p-6 rounded-2xl shadow-lg border ${category.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl`}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-white/10 rounded-lg text-white group-hover:rotate-12 transition-transform duration-300">
                                {category.icon}
                            </div>
                            <h2 className="text-xl font-bold text-white">
                                {category.title}
                            </h2>
                        </div>
                        
                        <div className="space-y-2">
                            {category.skills.map((skill, skillIndex) => (
                                <div 
                                    key={skillIndex}
                                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    <div className="w-2 h-2 bg-current rounded-full opacity-60"></div>
                                    <span className="text-sm font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
