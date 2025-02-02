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
        <div className="flex justify-center">
            <div className="navbar fixed z-10 bg-black/40 max-w-screen-xl mx-auto text-white flex items-center justify-between px-2 w-full">
                <div className="navbar-start">
                    {/* Logo for small screens (inside dropdown) */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Open Menu">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black/80 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.path} className="hover:text-gray-400 focus:text-gray-400 transition-colors duration-200">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logo for large screens (outside dropdown) */}
                    <Link href="/" className="hidden lg:flex" passHref>
                        <Image src="/assets/ben.JPG" alt="Logo" width={100} height={50} />
                    </Link>
                    <a className=" text-4xl text-bold">LS Electricité</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.path} className="hover:text-gray-400 focus:text-gray-400 transition-colors duration-200">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-4">
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
        </div>
    );
};

export default Navbar;