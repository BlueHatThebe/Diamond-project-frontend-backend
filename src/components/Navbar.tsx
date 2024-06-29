"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from 'next/dynamic'
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Tailwind CSS classes for styling
const navLinkClasses = "text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white no-underline";
const dropdownLinkClasses = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 no-underline";

const Navbar = () => {
    const { data: session } = useSession();

    useEffect(() => {
        // Manually initialize Bootstrap dropdowns
        const dropdownToggleList = [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'));
        dropdownToggleList.map(function (dropdownToggle) {
            return new bootstrap.Dropdown(dropdownToggle);
        });
    }, []);

    return (
        <nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
            <div className='container-fluid d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    {!session ? (
                        <Link href='/' passHref className="no-underline">
                            <span className={`nav-link ${navLinkClasses} no-underline`}>Home</span>
                        </Link>
                    ) : (
                        <Link href='/dashboard' passHref className="no-underline">
                            <span className={`nav-link ${navLinkClasses}`}>Dashboard</span>
                        </Link>
                    )}
                </div>
                <div className='text-center text-white font-bold'>Shiny Secure</div>
                <ul className='nav d-flex gap-3'>
                    {session ? (
                        <li className='nav-item dropdown'>
                            <div
                                className="nav-link text-white"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={(e) => e.preventDefault()}
                            >
                                <img
                                    src="https://cdn.create.vista.com/api/media/small/475532336/stock-vector-people-icon-person-icon-user-icon-vector-illustration-graphic-design"
                                    className="rounded-full w-12 h-12 object-cover"
                                    alt="Avatar"
                                    loading="lazy"
                                />
                            </div>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                <li>
                                    <Link href="/profile" passHref className="no-underline">
                                        <span className={dropdownLinkClasses}>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <span className={dropdownLinkClasses} onClick={() => signOut()}>Logout</span>
                                </li>
                            </ul>
                        </li>
                    ) : (
                        <>
                            <li className='nav-item'>
                                <Link href='/login' passHref className="no-underline">
                                    <span className={`nav-link ${navLinkClasses}`}>Login</span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/register' passHref className="no-underline">
                                    <span className={`nav-link ${navLinkClasses}`}>Register</span>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;