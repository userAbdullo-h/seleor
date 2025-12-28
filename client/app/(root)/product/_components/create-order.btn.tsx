import { Button } from '@/components/ui/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import Image from 'next/image'
import React from 'react'

function CreateOrderBtn() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button size={'lg'} className='w-fit'>
					Purchase
				</Button>
			</PopoverTrigger>
			<PopoverContent className='p-1 w-56' side='right'>
				<div className='flex flex-col space-y-1'>
					<Button variant={'secondary'}>
						<Image
							src={'/stripe.svg'}
							alt='stripe'
							width={70}
							height={50}
							className='cursor-pointer'
						/>
					</Button>
					<Button variant={'secondary'}>
						<Image
							src={'/payme.svg'}
							alt='payme'
							width={70}
							height={50}
							className='cursor-pointer'
						/>
					</Button>
					<Button variant={'secondary'}>
						<Image
							src={'/click.svg'}
							alt='click'
							width={70}
							height={50}
							className='cursor-pointer'
						/>
					</Button>
					<Button variant={'secondary'}>
						<Image
							src={'/uzum.svg'}
							alt='uzum'
							width={70}
							height={50}
							className='cursor-pointer'
						/>
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	)
}

export default CreateOrderBtn
