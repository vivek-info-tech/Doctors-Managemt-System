import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
export default function Footer() {
	return (
		<div className='md:mx-10'>
			<div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
				<div>
					<img className='mb-5 w-40' src={assets.logo} alt="" />
					<p className='w-full md:w-2/3 text-gray-600 leading-6'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
						Ipsum has been the industry's standard dummy text ever since the 1500s, when
						an unknown printer took a galley of type and scrambled it to make a type
						specimen book
					</p>
				</div>
				<div>
					<h1 className='text-xl font-medium mb-5'>COMPANY</h1>
					<ul className=' flex flex-col gap-2 text-gray-600'>
						<Link to='/'>
							<li>Home</li>
						</Link >
						<Link to='/about'> <li>About us</li></Link>
						<Link to='/contact'> <li>Contact us</li></Link>
						<Link> <li>Privacy Policy</li></Link>

					</ul>
				</div>
				<div>
					<h1 className='text-xl font-medium mb-5'>GET IN TOUCH</h1>
					<div className=' flex flex-col gap-2 text-gray-600'>
						<p> 8888888888 </p>
						<p>vivek@gmail.com</p>
					</div>
				</div>

			</div>
			<div>
				<hr />
				<p className=' text-sm text-center py-5'>Copyright © 2024 GreatStack - All Right Reserved</p>
			</div>
		</div>
	)
}
