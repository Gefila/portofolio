import { Card } from "./ui/card";
import logoIsb from "../assets/images/logo_isb.png";
import logoSmk from "../assets/images/logo_smk.webp";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section className="mx-[20%] py-6">
            <div className="mb-5">
                <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <GraduationCap className="w-7 h-7" />
                    Education
                </h1>
            </div>
            <div className="flex flex-col gap-6">
                <Card className="p-6">
                    <div className="flex flex-col md:flex-row items-start gap-5">
                        <div className="flex-shrink-0">
                            <img
                                src={logoIsb}
                                alt="Institut Sains dan Bisnis Atma Luhur Logo"
                                className="w-20 h-20 rounded-lg object-contain bg-white p-2 shadow-md"
                            />
                        </div>
                        <div className="flex-grow ">
                            <h2 className="text-xl font-bold text-white mb-2">
                                Bachelor of Computer Science
                            </h2>
                            <div className="mb-2">
                                <a
                                    className="text-blue-200 font-medium"
                                    href="https://isbatmaluhur.ac.id"
                                    target="_blank"
                                >
                                    Institut Sains dan Bisnis Atma Luhur
                                </a>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-300">
                                <div className="flex items-center gap-2">
                                    <span className="text-green-500 font-semibold">
                                        GPA:
                                    </span>
                                    <span>4.0</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>2022 - Now</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Pangkalpinang, Bangka Belitung</span>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs font-medium">
                                    Computer Science
                                </span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-xs font-medium">
                                    Software Engineering
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex flex-col md:flex-row items-start gap-5">
                        <div className="flex-shrink-0">
                            <img
                                src={logoSmk}
                                alt="Institut Sains dan Bisnis Atma Luhur Logo"
                                className="w-20 h-20 rounded-lg object-contain bg-white p-2 shadow-md"
                            />
                        </div>
                        <div className="flex-grow ">
                            <h2 className="text-xl font-bold text-white mb-2">
                                Multimedia
                            </h2>
                            <div className="mb-2">
                                <a
                                    className="text-blue-200 font-medium"
                                    href="https://isbatmaluhur.ac.id"
                                    target="_blank"
                                >
                                    SMKN 2 Pangkalpinang
                                </a>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-300">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>2019 - 2022</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Pangkalpinang, Bangka Belitung</span>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs font-medium">
                                    Graphic Design
                                </span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-xs font-medium">
                                    Multimedia
                                </span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}
