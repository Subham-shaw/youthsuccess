"use client";

import Image from 'next/image'
import { useState } from "react";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        // bg-[#ffffffa1]
        <nav className="fixed left-0 w-screen z-9999 backdrop-blur-2xl bg-white px-4 md:px-[5vw] py-5 md:py-0"> 
            <div className="flex items-center justify-between">
                {/* Logo */}
                <a href={'/#'}>
                    <div className='flex justify-between align-middle text-center items-center'>
                        <Image
                            src="/icon.png"
                            width={80}
                            height={80}
                            alt="Picture of the author"
                        />
                        <h1 className="font-bold text-xl px-2 md:text-3xl">Youthsuccess Ecco. Pvt. Ltd.</h1>
                    </div>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex font-semibold">
                    <Link href="/#">Home</Link>
                    <Link href="/#services">Services</Link>
                    <Link href="/#about">About</Link>
                    <Link href="/#contact">Contact</Link>
                    <Link href="/legal">Legal</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/signin" className="p-2 m-2 text-2xl font-bold" id='login'>
                        <LoginIcon /> Sign In
                    </Link>
                </ul>

                {/* Desktop Login */}
                {/* <div className="hidden md:flex items-center">
                    <Link href="/login" className="p-2 m-2 text-2xl font-bold" id='login'>
                        <LoginIcon /> Login
                    </Link>
                </div> */}

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                    aria-label="Toggle Menu"
                >
                    {open ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden mt-4 rounded-xl bg-white shadow-lg">
                    <ul className="flex flex-col items-center gap-4 py-6 font-semibold">
                        <Link onClick={() => setOpen(false)} href="/#">Home</Link>
                        <Link onClick={() => setOpen(false)} href="/#services">Services</Link>
                        <Link onClick={() => setOpen(false)} href="/#about">About</Link>
                        <Link onClick={() => setOpen(false)} href="/#contact">Contact</Link>
                        <Link onClick={() => setOpen(false)} href="/legal">Legal</Link>
                        <Link onClick={() => setOpen(false)} href="/gallery">Gallery</Link>


                        <Link
                            onClick={() => setOpen(false)}
                            href="/signin"
                            className="p-1.5 m-2 text-xl font-bold"
                            id="login"
                        >
                            <LoginIcon /> Sign In
                        </Link>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
