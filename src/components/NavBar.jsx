export default function NavBar() {
    return (
        <nav className="bg-background py-4 border-b border-gray-300 shadow-lg">
            <div className="flex justify-between items-center mx-[20%]">
                <div className="text-white text-lg font-bold">MyApp</div>
                <div className="space-x-4">
                    <a href="#home" className="text-gray-300 hover:text-white">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white">About</a>
                    <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
                </div>
            </div>
        </nav>
    );
}
