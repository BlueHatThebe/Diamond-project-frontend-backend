"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
	const { data: session } = useSession();

	return (
		<div className='navbar navbar-dark top-0  '>
			<div className='container-fluid bg-dark  '>
				<div className='card-body'>
					<ul className='nav justify-content-between'>
						<li className='nav-item text-white'>
							<Link href='/' className='nav-link  text-white'>
								Home
							</Link>
						</li>
						<div className='d-flex gap-3'>
							{" "}
							<li className='nav-item'>
								<Link href='/dashboard' className='nav-link  text-white'>
									Dashboard
								</Link>
							</li>
							{!session ? (
								<>
									<li className='nav-item'>
										<Link href='/login' className='nav-link  text-white'>
											Login
										</Link>
									</li>
									<li className='nav-item'>
										<Link href='/register' className='nav-link  text-white'>
											Register
										</Link>
									</li>
								</>
							) : (
								<>
									<li className='nav-item nav-link'>{session.user?.email}</li>
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
							)}
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
