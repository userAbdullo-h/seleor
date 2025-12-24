'use client'

import { IProduct } from '@/types'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { formatPrice } from '@/lib/utils'
import dynamic from 'next/dynamic'

const Price = dynamic(
	() =>
		Promise.resolve(({ price }: { price: number }) => (
			<span className='font-bold'>{formatPrice(price)}</span>
		)),
	{ ssr: false }
)

interface Props {
	product: Partial<IProduct>
}

function ProductCard({ product }: Props) {
	const router = useRouter()
	return (
		<div
			onClick={() => router.push(`/product/${product._id}`)}
			className='cursor-pointer'>
			<div className='bg-secondary relative group'>
				<Image
					src={product.image!}
					alt={product.title!}
					width={300}
					height={300}
					className='mx-auto '
				/>
				<div className='absolute right-0 top-0 z-50 opacity-0 group-hover:opacity-100 transition-all '>
					<Button size={'icon'}>
						<Heart />
					</Button>
				</div>
			</div>
			<div className='flex justify-between items-center mt-2 text-sm'>
				<h3 className='font-semibold'>{product.title}</h3>
				<Price price={product.price!} />
			</div>
			<p className='text-xs text-muted-foreground'>{product.category}</p>
		</div>
	)
}

export default ProductCard
