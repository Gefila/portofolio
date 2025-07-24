import { ArrowRight } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Kuesioner E-Wallet",
            description:
                "Platform kuesioner web untuk mengumpulkan data penggunaan e-wallet, dengan perbandingan AHP otomatis (Level 1–3), pemeriksaan konsistensi (CR > 0.1), dan integrasi Discord webhook untuk monitoring.",
            technologies: ["React.js", "Tailwind CSS", "Shadcn UI", "Discord Webhook"],
            image: "https://private-user-images.githubusercontent.com/106391467/455508527-3e140d55-a315-4e9e-b1c5-5aa0fb4c65d5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMzMjExMTgsIm5iZiI6MTc1MzMyMDgxOCwicGF0aCI6Ii8xMDYzOTE0NjcvNDU1NTA4NTI3LTNlMTQwZDU1LWEzMTUtNGU5ZS1iMWM1LTVhYTBmYjRjNjVkNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyNFQwMTMzMzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZTgwZGJkMTliYjgwNGY2Y2U1NTIwYjViYjVlNGQxNWU3ZWJlZjNiNjhjZjM2MTVhMTRkNzViNjU0YjU3MDY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.bZy4B1xZZlkQFGRvTX8DG_PmRnnNYL5OUmebq0NHikg",
            liveDemo: "https://kuesioner-e-wallet.vercel.app/",
            github: "https://github.com/Gefila/kuesioner-e-wallet",
        },
        {
            id: 2,
            title: "QuizKuy",
            description:
                "Website kuis interaktif dengan timer real-time, penilaian otomatis, dan pelacakan riwayat kuis. Dirancang responsif untuk pengalaman pengguna yang nyaman.",
            technologies: ["React.js", "Tailwind CSS", "DaisyUI"],
            image: "https://private-user-images.githubusercontent.com/106391467/455510003-54c0a67b-2488-448f-b717-b9302df1bc02.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMzMjE1OTQsIm5iZiI6MTc1MzMyMTI5NCwicGF0aCI6Ii8xMDYzOTE0NjcvNDU1NTEwMDAzLTU0YzBhNjdiLTI0ODgtNDQ4Zi1iNzE3LWI5MzAyZGYxYmMwMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyNFQwMTQxMzRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NDQ3YzI5ZDI3MjQ1OWY4NWEzZGQ4MzJmYTYwZjRkZmIyNDc1MGY4NWJmMTI3YzQzMDBlYzIzZjNhOWMwZDBkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ZXHRLxniEzf1V-3zr1VDptlWMWyBWDwU0assXvWbmdU",
            liveDemo: "https://quiz-kuy.netlify.app/",
            github: "https://github.com/Gefila/quiz",
        },
        {
            id: 3,
            title: "MeowMart",
            description:
                "Platform e-commerce untuk perlengkapan hewan peliharaa dengan autentikasi pengguna, peran admin/pelanggan, manajemen produk & kategori (CRUD), sistem diskon, dan integrasi payment gateway via Midtrans",
            technologies: ["CodeIgniter 3", "Bootstrap", "jQuery", "Midtrans API"],
            image: "https://placehold.co/600x400",
            liveDemo: "#",
            github: "https://github.com/Gefila/MeowMart",
        },
        {
            id: 4,
            title: "BangkApp",
            description:
                "Aplikasi Android informasi wisata Bangka Belitung, mencakup tempat kuliner, rental mobil, dan hotel. Fokus pada tampilan yang bersih, performa optimal, dan pengalaman pengguna yang intuitif.",
            technologies: ["Kotlin"],
            image: "https://placehold.co/600x400",
            liveDemo: "#",
            github: "https://github.com/Gefila/BangkApp",
        },
        {
            id: 5,
            title: "Gefila Computer",
            description:
                "Aplikasi Android toko online produk komputer dengan fitur login/registrasi, katalog produk (CRUD), pencarian, keranjang belanja, dan forum diskusi produk.",
            technologies: ["Kotlin", "Express.js", "MySQL"],
            image: "https://placehold.co/600x400",
            liveDemo: "#",
            github: "https://github.com/Gefila/gefila-computer-mobile",
        }
        
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

                        <div className="p-6 flex flex-col ">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 text-sm mb-4 leading-relaxed text-justify">
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
                                    target="_blank"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                                    target="_blank"
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
