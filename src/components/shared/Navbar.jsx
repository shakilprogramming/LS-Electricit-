"use client"; // Mark this as a Client Component
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon } from "lucide-react"; // Icons for theme toggle

const Navbar = () => {
    const [theme, setTheme] = useState("light"); // Default theme

    // Load theme from localStorage on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme); // Apply the theme
    }, []);

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"; // Switch between light and dark
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Save theme to localStorage
        document.documentElement.setAttribute("data-theme", newTheme); // Apply the new theme
    };

    const navItems = [
        { title: "Home", path: "/" },
        { title: "Experience", path: "/jobs" },
        { title: "Contact", path: "/contact" },
    ];

    return (
        <nav className="navbar fixed top-0 z-50 bg-black/40 backdrop-blur-sm w-full">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-8 py-2">
                {/* Logo and Brand Name */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image 
                            src="/assets/ben.JPG" 
                            alt="Logo" 
                            width={80} 
                            height={40} 
                            className="rounded-lg"
                        />
                        <span className="ml-2 text-2xl font-bold text-white">LS Electricité</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button 
                        className="btn btn-ghost text-white"
                        aria-label="Open Menu"
                        onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6">
                    <ul className="flex space-x-6">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href={item.path} 
                                    className="text-white hover:text-gray-400 transition-colors duration-200"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-300"
                        aria-label="Toggle Theme"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div id="mobile-menu" className="lg:hidden hidden bg-black/80 backdrop-blur-sm w-full">
                <ul className="flex flex-col items-center py-4">
                    {navItems.map((item, index) => (
                        <li key={index} className="w-full text-center">
                            <Link 
                                href={item.path} 
                                className="block py-2 text-white hover:text-gray-400 transition-colors duration-200"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                    <li className="w-full text-center">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-300"
                            aria-label="Toggle Theme"
                        >
                            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;