import React from 'react'
import Logo from './logo'
import { Button } from '../ui/button'
import Link from 'next/link'
import { User2 } from 'lucide-react'

function Navbar() {
	return (
		<div className='h-20 bg-secondary border-b fixed inset-0 z-50'>
			<div className='container max-w-6xl flex items-center justify-between h-full'>
				<Logo />

				<div className='flex items-center gap-2'>
					<Button>
						<Link href={'/sign-in'}>
							<User2 className='w-4 h-4' />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
