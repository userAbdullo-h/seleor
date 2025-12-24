import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
	return (
		<Link href='/'>
			<div className='flex items-center gap-1'>
				<Image src={'/logo.svg'} alt='Logo' width={150} height={150} />
			</div>
		</Link>
	)
}

export default Logo
