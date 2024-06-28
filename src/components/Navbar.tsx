"use client";
// components/Navbar.js

import React, { useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
    const { data: session } = useSession();

<<<<<<< HEAD
	return (
		<nav className='navbar navbar-dark navbar-expand-lg bg-dark fixed top-2 left- right-2'>
			<div className='container-fluid d-flex justify-content-between align-items-center'>
				<div className='d-flex align-items-center'>
					{!session ? (
						<Link href='/' className='nav-link text-white'>
							Home
						</Link>
					) : (
						<Link href='/dashboard' className='nav-link text-white'>
							<FaArrowAltCircleLeft />
						</Link>
					)}
				</div>
				<div className='text-center text-white font-bold'>Shiny Secure</div>
				<ul className='nav d-flex gap-3'>
					{session ? (
						<>
							<li className='nav-item'>
								<Link href='/dashboard' className='nav-link text-white'></Link>
							</li>
							<li className='nav-item'>
								<button
									onClick={() => {
										signOut();
									}}
									className='btn btn-primary'>
									Logout
								</button>
							</li>
						</>
					) : (
						<>
							<li className='nav-item'>
								<Link href='/login' className='nav-link text-white'>
									Login
								</Link>
							</li>
							<li className='nav-item'>
								<Link href='/register' className='nav-link text-white'>
									Register
								</Link>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
=======
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
                        <Link href='/' passHref>
                            <span className='nav-link text-white'>Home</span>
                        </Link>
                    ) : (
                        <Link href='/dashboard' passHref>
                            <span className='nav-link text-white'>Dashboard</span>
                        </Link>
                    )}
                </div>
                <div className='text-center text-white font-bold'>Shiny Secure</div>
                <ul className='nav d-flex gap-3'>
                    {session ? (
                        <li className='nav-item dropdown'>
                            <div
                                className="nav-link dropdown-toggle text-white"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={(e) => e.preventDefault()}
                            >
                                <img
                                    src=""
                                    className="rounded-circle"
                                    height="15"
                                    alt="Avatar"
                                    loading="lazy"
                                />
                            </div>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                <li>
                                    <Link href="/profile">
                                        <span className="dropdown-item">My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <span className="dropdown-item" onClick={() => signOut()}>Logout</span>
                                </li>
                            </ul>
                        </li>
                    ) : (
                        <>
                            <li className='nav-item'>
                                <Link href='/login' passHref>
                                    <span className='nav-link text-white'>Login</span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link href='/register' passHref>
                                    <span className='nav-link text-white'>Register</span>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
>>>>>>> origin
};

export default Navbar;
