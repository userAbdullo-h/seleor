'use client'

import { IProduct } from '@/types'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Heart } from 'lucide-react'
import NoSSR from '../ui/no-ssr'
import { formatPrice } from '@/lib/utils'

interface Props {
	product: Partial<IProduct>
}

function WatchListCard({ product }: Props) {
	return (
		<div className={'border relative flex flex-col'}>
			<div className='bg-secondary relative'>
				<Image
					src={product.image!}
					width={200}
					height={200}
					alt={product.title!}
					className='mx-auto'
				/>
				<div className='absolute right-0 top-0 z-50 flex items-center'>
					<Button size={'icon'}>
						<Heart className='fill-red-500 text-red-500' />
					</Button>
				</div>
			</div>
			<div className='p-2'>
				<div className='flex justify-between items-center text-sm'>
					<h1 className='font-bold'>{product.title}</h1>
					<NoSSR>
						<p className='font-medium'>{formatPrice(+product.price!)}</p>
					</NoSSR>
				</div>
				<p className='text-xs text-muted-foreground leading-1 line-clamp-5'>
					{product.description}
				</p>
			</div>
		</div>
	)
}

export default WatchListCard
