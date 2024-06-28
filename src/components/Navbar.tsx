"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
	const { data: session } = useSession();

	return (
		<nav className='navbar navbar-dark navbar-expand-lg bg-dark'>
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
};

export default Navbar;
